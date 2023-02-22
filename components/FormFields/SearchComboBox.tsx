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
                className="w-full rounded-lg border-slate-300"
            />
            {data && (
                <Combobox.Options className="absolute z-[99] right-0 top-[100%] w-full bg-white shadow-normal p-2 min-h-[20px] max-h-[300px] overflow-y-auto">
                    {isQueryLoading && (
                        <div className="text-center p-4">
                            <ClipLoader size={20} />
                        </div>
                    )}
                    {data.map((item: string) => (
                        <Combobox.Option
                            key={item}
                            value={item}
                            className="w-full text-sm rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white"
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
