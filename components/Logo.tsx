import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Logo({
    width = 200,
    height = 200,
}: {
    width: number;
    height: number;
}) {
    const { theme, setTheme } = useTheme();
    return (
        <div className="max-h-[200px] w-full">
            <Link
                href="/explore"
                className="inline-block w-full max-w-[200px] align-middle"
            >
                <Image
                    width={width || 200}
                    height={height || 200}
                    loading="eager"
                    src={theme === "dark" ? "/images/logo-white.png" : "/images/logo.png"}
                    alt="Somhako"
                />
            </Link>
        </div>
    );
}
