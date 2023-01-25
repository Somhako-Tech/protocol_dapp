import { Combobox } from "@headlessui/react";

export default function SearchComboBox({
    setSearchParams,
    handleChange,
    data,
    value,
}: {
    setSearchParams: (value: string) => void;
    handleChange: (e: any) => void;
    data: Array<string> | undefined;
    value: Array<string> | undefined;
}) {
    return (
        <Combobox multiple>
            <Combobox.Input
                onChange={(e) => setSearchParams(e.target.value)}
                className="formInputs"
            />
            <Combobox.Options className="bg-white border fixed">
                {data &&
                    data.map((item: string) => (
                        <Combobox.Option
                            key={item}
                            value={item}
                            className="hover:bg-slate-400 hover:text-white p-1"
                            onClick={() => handleChange(item)}
                        >
                            {item}
                        </Combobox.Option>
                    ))}
            </Combobox.Options>
            <div className="flex justify-start items-center capitalize border py-2 my-2">
                {value && value.length > 0 && (
                    <ul className="p-1 font-medium">
                        {value.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </Combobox>
    );
}
