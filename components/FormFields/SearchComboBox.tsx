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
    value: string;
}) {
    console.log({ data, value });
    return (
        <Combobox>
            <Combobox.Input
                onChange={(e) => setSearchParams(e.target.value)}
                className="formInputs"
            />
            <Combobox.Options className="bg-white border flex-col">
                {data &&
                    data.map((item: string) => (
                        <Combobox.Option
                            key={item}
                            value={item}
                            className="hover:bg-slate-400 hover:text-white p-1 inline-block"
                            onClick={() => handleChange(item)}
                        >
                            {item}
                        </Combobox.Option>
                    ))}
            </Combobox.Options>
            <div className="flex justify-start items-center capitalize border py-2 my-2">
                {value}
            </div>
        </Combobox>
    );
}
