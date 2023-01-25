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
        <div className="relative">
            <Combobox multiple>
                <Combobox.Input
                    onChange={(e) => setSearchParams(e.target.value)}
                    className="formInputs"
                />
                <Combobox.Options className="bg-white border absolute">
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
            </Combobox>
        </div>
    );
}
