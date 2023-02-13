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
        <Combobox value={value} onChange={(value) => handleChange(value)}>
            <Combobox.Input
                onChange={(e) => {
                    setSearchParams(e.target.value);
                }}
                className="mx-4 ml-6 w-full rounded-full border border-slate-500 p-1 pl-3"
            />
            {data && (
                <Combobox.Options className="absolute mt-3 w-full flex-col justify-center rounded-md border bg-white shadow-md">
                    {data.map((item: string) => (
                        <Combobox.Option
                            key={item}
                            value={item}
                            className="w-full rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white"
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
