import { Profile } from "@prisma/client";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchComboBox from "./SearchComboBox";

export default function LocationField({
    userProfile,
    handleChange,
}: {
    userProfile: Profile;
    handleChange: (e: any) => void;
}) {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [searchParams, setSearchParams] = useState("");

    const {
        data: Locations,
        isLoading: queryLoading,
        isError: queryError,
    } = useQuery(["getLocations", searchParams], () =>
        fetch(`/api/search/locations?search=${searchParams}`).then((data) =>
            data.json().then((j) => j.locations)
        )
    );

    return (
        <div className="formInputPair">
            <label
                htmlFor="pref_location"
                className="mb-4 inline-block font-medium leading-none"
            >
                Preferred Location
            </label>

            <SearchComboBox
                handleChange={(item) =>
                    handleChange({
                        target: {
                            id: "pref_location",
                            value: item,
                        },
                    })
                }
                setSearchParams={setSearchParams}
                data={queryLoading ? [] : Locations}
                value={userProfile.pref_location}
            />
        </div>
    );
}
