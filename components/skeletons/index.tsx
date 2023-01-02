import { Skeleton } from "@mui/material";
const ProfileFormSkeleton = () => (
    <>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "6rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />

        <Skeleton variant="rounded" width={"auto"} height={100} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
        <Skeleton variant="rounded" width={"auto"} height={100} />
    </>
);

export { ProfileFormSkeleton };
