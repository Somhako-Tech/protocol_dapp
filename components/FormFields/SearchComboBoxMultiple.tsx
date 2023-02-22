import { Combobox } from "@headlessui/react";
import { useState } from "react";

export default function SearchComboBox({
    setSearchParams,
    searchParams,
    handleChange,
    data,
    exclude,
}: {
    setSearchParams: (value: string) => void;
    handleChange: (e: any) => void;
    data: Array<string> | undefined;
    exclude: Array<string>;
    searchParams: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <Combobox multiple>
                <Combobox.Input
                    onChange={(e) => {
                        setSearchParams(e.target.value);
                        setOpen(true);
                    }}
                    className="w-full rounded-lg border-slate-300 dark:text-black"
                    value={searchParams}
                    id="searchInput"
                />
                {open && (
                    <Combobox.Options className="absolute z-[99] right-0 top-[100%] w-full bg-white dark:bg-gray-700 shadow-normal p-2 min-h-[20px] max-h-[300px] overflow-y-auto">
                        {data &&
                            data
                                .filter((item) => !exclude.includes(item))
                                .map((item: string) => (
                                    <Combobox.Option
                                        key={item}
                                        value={item}
                                        className="w-full text-sm rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white"
                                        onClick={() => {
                                            handleChange(item);
                                            setOpen(false);
                                            setSearchParams("");
                                        }}
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
