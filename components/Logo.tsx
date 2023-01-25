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
        <div className="w-full">
            <Link href="/" className="w-full inline-block align-middle">
                <Image
                    width={width}
                    height={height}
                    src="/images/logo.png"
                    alt="Somhako"
                />
            </Link>
        </div>
    );
}
