import { ClipLoader } from "react-spinners";
import { useTheme } from "next-themes";
export function BigClipLoader({ color }: { color: string }) {
    const { theme, setTheme } = useTheme();
    return (
        <section className="py-8">
            <div className="container">
                <div className="flex items-center justify-center min-h-[50vh] rounded-normal shadow-normal bg-white dark:bg-gray-700">
                    <ClipLoader
                        size={150}
                        speedMultiplier={0.8}
                        color={color || "white"}
                        cssOverride={{ borderWidth: 5 }}
                    />
                </div>
            </div>
        </section>
    );
}
