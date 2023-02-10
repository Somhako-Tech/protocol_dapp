import { Combobox } from "@headlessui/react";
import { useState } from "react";

export default function SearchComboBox({
    setSearchParams,
    searchParams,
    handleChange,
    data,
}: {
    setSearchParams: (value: string) => void;
    handleChange: (e: any) => void;
    data: Array<string> | undefined;
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
                    className="formInputs"
                    value={searchParams}
                    id="searchInput"
                />
                {open && (
                    <Combobox.Options className="absolute mt-3 w-full rounded-md border bg-white shadow-md">
                        {data &&
                            data.map((item: string) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className="w-full rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white"
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
