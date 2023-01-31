import { Combobox } from "@headlessui/react";
import { useState } from "react";

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
                />
                {open && (
                    <Combobox.Options className="bg-white border absolute w-full rounded-md mt-3 shadow-md">
                        {data &&
                            data.map((item: string) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className="hover:bg-indigo-500 hover:text-white p-1 w-full rounded-md px-2"
                                    onClick={() => {
                                        handleChange(item);
                                        setOpen(false);
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
