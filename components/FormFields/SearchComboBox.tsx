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
        <div className="relative">
            <Combobox value={value} onChange={(value) => handleChange(value)}>
                <Combobox.Input
                    onChange={(e) => {
                        setSearchParams(e.target.value);
                    }}
                    className="formInputs"
                />
                {data && (
                    <Combobox.Options className="bg-white border flex-col justify-center w-full absolute rounded-md mt-3 shadow-md">
                        {data.map((item: string) => (
                            <Combobox.Option
                                key={item}
                                value={item}
                                className="hover:bg-indigo-500 hover:text-white p-1 w-full rounded-md px-2"
                                onClick={() => handleChange(item)}
                            >
                                {item}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </Combobox>
        </div>
    );
}
