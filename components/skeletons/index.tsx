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

const ProfilePreviewSkeleton = () => (
    <div className="shadow-normal bg-opacity-98 mb-6 flex h-[350px] flex-col items-center justify-evenly rounded-[30px] border bg-white py-6 px-6  text-center shadow-slate-200 duration-300 hover:opacity-100 hover:shadow-2xl">
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="circular" width={100} height={100} />

        <Skeleton
            variant="text"
            width={250}
            height={50}
            sx={{ fontSize: "3rem", padding: "1rem" }}
        />
        <Skeleton variant="text" width={250} height={100} />
    </div>
);

const ProfileSummarySkeleton = () => (
    <div className="w-full">
        <div className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-[25px] border border-slate-700 bg-white p-8 md:py-14 md:px-20">
            <Skeleton
                variant="text"
                width="100%"
                height={50}
                sx={{ fontSize: "3rem", padding: "1rem" }}
            />
            <Skeleton
                variant="text"
                width="100%"
                height={80}
                sx={{ fontSize: "3rem", padding: "1rem" }}
            />
            <Skeleton
                variant="text"
                width="100%"
                height={50}
                sx={{ fontSize: "3rem", padding: "1rem" }}
            />
            <Skeleton
                variant="text"
                width="100%"
                height={80}
                sx={{ fontSize: "3rem", padding: "1rem" }}
            />
            <Skeleton
                variant="text"
                width="100%"
                height={50}
                sx={{ fontSize: "3rem", padding: "1rem" }}
            />
            <Skeleton
                variant="text"
                width="100%"
                height={80}
                sx={{ fontSize: "3rem", padding: "1rem" }}
            />
        </div>
    </div>
);

export { ProfileFormSkeleton, ProfilePreviewSkeleton, ProfileSummarySkeleton };
