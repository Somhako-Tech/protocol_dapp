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
    <div className="flex flex-col justify-evenly items-center shadow-normal border shadow-slate-200 rounded-[30px] py-6 px-6 mb-6 text-center hover:shadow-2xl  h-[350px] hover:opacity-100 bg-white bg-opacity-98 duration-300">
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
        <div className="w-full max-w-[1000px] mx-auto my-10 bg-white shadow-normal border border-slate-700 rounded-[25px] p-8 md:py-14 md:px-20 flex flex-col justify-center items-center">
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
