import { ClipLoader } from "react-spinners";
export function BigClipLoader() {
    return (
        <section className="flex w-full flex-wrap ">
            <div className="h-full w-full">
                <div className="flex-col items-center justify-center">
                    <div className="shadow-normal mx-auto my-10 flex w-full max-w-[1000px] flex-col items-center rounded-[25px] p-8 md:py-14 md:px-20">
                        <ClipLoader
                            size={150}
                            speedMultiplier={0.8}
                            color="white"
                            cssOverride={{ borderWidth: 5 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
