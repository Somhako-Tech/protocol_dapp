import Link from "next/link";
import Image from "next/image";
export default function Logo({
    width = 200,
    height = 200,
}: {
    width: number;
    height: number;
}) {
    return (
        <div className="w-full  max-h-[200px]">
            <Link
                href="/home"
                className="w-full inline-block align-middle max-w-[200px]"
            >
                <Image
                    width={width || 200}
                    height={height || 200}
                    src="/images/logo.png"
                    alt="Somhako"
                />
            </Link>
        </div>
    );
}
