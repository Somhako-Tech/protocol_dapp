import { Combobox } from "@headlessui/react";
import { ClipLoader } from "react-spinners";

export default function SearchComboBox({
    setSearchParams,
    handleChange,
    data,
    value,
    isQueryLoading,
}: {
    setSearchParams: (value: string) => void;
    handleChange: (e: any) => void;
    data: Array<string> | undefined;
    value: string;
    isQueryLoading: boolean;
}) {
    return (
        <Combobox value={value} onChange={(value) => handleChange(value)}>
            <Combobox.Input
                onChange={(e) => {
                    setSearchParams(e.target.value);
                }}
                className="mx-4 ml-6 w-1/2 rounded-full border border-slate-500 p-1 pl-3"
            />
            {isQueryLoading && (
                <div className="absolute right-8 top-2">
                    <ClipLoader size={20} />
                </div>
            )}
            {data && (
                <Combobox.Options className="absolute top-2/3 left-1/2  mt-3 w-1/2 flex-col justify-center rounded-md border bg-white shadow-md">
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
