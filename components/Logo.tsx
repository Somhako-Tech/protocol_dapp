import Link from "next/link";

export default function logo() {
    return (
        <>
            <div className="w-full max-w-[170px] xl:max-w-[200px]">
                <Link
                    href="/candidate"
                    className="w-full inline-block align-middle"
                >
                    <img src="/images/logo.png" alt="Somhako" />
                </Link>
            </div>
        </>
    );
}
