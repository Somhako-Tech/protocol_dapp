import { Profile } from "@prisma/client";
import { Combobox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchComboBox from "./SearchComboBox";
import { ClipLoader } from "react-spinners";

export default function LocationField({
    userProfile,
    handleChange,
}: {
    userProfile: Profile;
    handleChange: (e: any) => void;
}) {
    // const [selectedLocation, setSelectedLocation] = useState("");
    const [searchParams, setSearchParams] = useState("");
    const [locations, setLocations] = useState([]);
    const [isQueryLoading, setIsQueryLoading] = useState(false);

    useEffect(() => {
        const getLocations = async () => {
            const newLocations = await fetch(
                `/api/search/locations?search=${searchParams}`
            ).then((data) => data.json().then((j) => j.locations));
            setLocations(newLocations);
            setIsQueryLoading(false);
        };

        setIsQueryLoading(true);
        getLocations();
    }, [searchParams]);

    return (
        <div className="relative ">
            <label
                htmlFor="pref_location"
                className="font-medium mb-2 leading-none inline-block"
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
                data={isQueryLoading ? [] : locations}
                value={userProfile.pref_location}
                isQueryLoading={isQueryLoading}
            />
        </div>
    );
}
