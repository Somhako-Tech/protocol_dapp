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
    return (
        <Combobox>
            <Combobox.Input
                onChange={(e) => {
                    setSearchParams(e.target.value);
                    handleChange(e.target.value);
                }}
                value={value}
                className="formInputs"
                required
            />
            {data && (
                <Combobox.Options className="bg-white border flex-col justify-center w-full">
                    {data.map((item: string) => (
                        <Combobox.Option
                            key={item}
                            value={item}
                            className="hover:bg-slate-400 hover:text-white p-1 w-full"
                            onClick={() => handleChange(item)}
                        >
                            {item}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            )}
        </Combobox>
    );
}
