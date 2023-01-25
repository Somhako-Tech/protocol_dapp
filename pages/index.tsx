import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import {
    Bars3Icon,
    XMarkIcon,
    GlobeAltIcon,
    ScaleIcon,
    BoltIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "For companies", href: "#forcompanies" },
    { name: "For Candidates", href: "#forcandidates" },
    { name: "Documentation", href: "#" },
];

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) router.push("/home");
    }, [session, router]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const candidateBenifits = [
        {
            name: "Discover new job opportunities",
            description:
                "Discover new job opportunities through a global network of employers on the Somhako Protocol.",
            icon: "💼",
        },
        {
            name: "Verify and showcase",
            description:
                "Verify and showcase your qualifications and work experience through blockchain-based NFTs.",
            icon: "📜",
        },
        {
            name: "Easily search and connect",
            description:
                "Easily search and connect with potential employers, recruiters, and other industry professionals.",
            icon: "🔍",
        },
        {
            name: "Increase your visibility",
            description:
                "Increase your visibility and reach in the job market by building your professional brand.",
            icon: "📈",
        },
    ];

    return (
        <>
            <div className="isolate bg-white">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                        className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="px-6 pt-6 lg:px-8">
                    <div>
                        <nav
                            className="flex h-9 items-center justify-between"
                            aria-label="Global"
                        >
                            <div
                                className="flex lg:min-w-0 lg:flex-1"
                                aria-label="Global"
                            >
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img src="/images/logo.png" alt="Somhako" />{" "}
                                </a>
                            </div>
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <Bars3Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="font-semibold text-gray-900 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                                <Link
                                    href="/join"
                                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                >
                                    Log in
                                </Link>
                            </div>
                        </nav>
                        <Dialog
                            as="div"
                            open={mobileMenuOpen}
                            onClose={setMobileMenuOpen}
                        >
                            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                                <div className="flex h-9 items-center justify-between">
                                    <div className="flex">
                                        <a href="#" className="-m-1.5 p-1.5">
                                            <span className="sr-only">
                                                Your Company
                                            </span>
                                            <img
                                                className="h-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <div className="py-6">
                                            <Link
                                                href="/join"
                                                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                Log in
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Dialog>
                    </div>
                </div>
                <main>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <div>
                                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        {/* <span className="text-gray-600">
        Announcing our next round of funding.{" "}
        <a
            href="#"
            className="font-semibold text-indigo-600"
        >
            <span
                className="absolute inset-0"
                aria-hidden="true"
            />
            Read more{" "}
            <span aria-hidden="true">
                &rarr;
            </span>
        </a>
    </span> */}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                        Somhako: Your digital resume for the
                                        future
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                        Somhako Protocol is the future of job
                                        searching for candidates. Its a
                                        decentralized social graph for the HR
                                        industry that uses blockchain technology
                                    </p>
                                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                                        <a
                                            href="#"
                                            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                        >
                                            Learn more{" "}
                                            <span
                                                className="text-indigo-200"
                                                aria-hidden="true"
                                            >
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                    <svg
                                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                        viewBox="0 0 1155 678"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                            fillOpacity=".3"
                                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                                x1="1155.49"
                                                x2="-78.208"
                                                y1=".177"
                                                y2="474.645"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#9089FC" />
                                                <stop
                                                    offset={1}
                                                    stopColor="#FF80B5"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <section className="forcandidates" id="forcandidates">
                <div className="bg-white py-24 sm:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="sm:text-center">
                            <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                                For Candidates
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Adapt for the future
                            </p>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"></p>
                        </div>

                        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                                {candidateBenifits.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                            {/* <feature.icon
                                                className="h-8 w-8"
                                                aria-hidden="true"
                                            /> */}
                                            {feature.icon}
                                        </div>
                                        <div className="sm:min-w-0 sm:flex-1">
                                            <p className="text-lg font-semibold leading-8 text-gray-900">
                                                {feature.name}
                                            </p>
                                            <p className="mt-2 text-base leading-7 text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="forcompanies" id="forcompanies">
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-24 sm:px-4 sm:py-32 lg:px-8">
                        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                                aria-hidden="true"
                            >
                                <circle
                                    cx={512}
                                    cy={512}
                                    r={512}
                                    fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"
                                />
                                <defs>
                                    <radialGradient
                                        id="759c1415-0410-454c-8f7c-9a820de03641"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(512 512) rotate(90) scale(512)"
                                    >
                                        <stop stopColor="#7775D6" />
                                        <stop
                                            offset={1}
                                            stopColor="#E935C1"
                                            stopOpacity={0}
                                        />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Unlock the global talent pool with Somhako
                                    <br />
                                    Protocol.
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    The smart way to discover and hire top
                                    talent, Streamline your recruitment process
                                    with Somhako Protocol.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a
                                        href="#"
                                        className="text-base font-semibold leading-7 text-white"
                                    >
                                        Learn more{" "}
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                            <div className="relative mt-16 h-80 lg:mt-8">
                                <img
                                    className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                                    alt="App screenshot"
                                    width={1824}
                                    height={1080}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 text-gray-600 mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">
                        Benefits for companies
                    </h1>
                    <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">
                                01.
                            </div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">
                                    Scout
                                </div>
                                <p className="max-w-xs py-2 text-sm text-indigo-900">
                                    You will have access to a wider pool of
                                    highly qualified candidates who have been
                                    vetted by the protocol, increasing the
                                    chances of finding the perfect fit for your
                                    open positions.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">
                                02.
                            </div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">
                                    Streamlined recruiting process
                                </div>
                                <p className="max-w-xs py-2 text-sm text-indigo-900">
                                    {" Our ATS's automation, queue, planning,"}
                                    scheduling, and task management features
                                    will help you streamline your recruiting
                                    process, saving them time and resources.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">
                                03.
                            </div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">
                                    API access
                                </div>
                                <p className="max-w-xs py-2 text-sm text-indigo-900">
                                    Open access to our open graph protocol
                                    allows you to use the data on you
                                    applications for free.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">
                                04.
                            </div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">
                                    Development
                                </div>
                                <p className="max-w-xs py-2 text-sm text-indigo-900">
                                    We build the right solution for your
                                    business. We craft beautiful, intuitive, and
                                    user-friendly interfaces that are easy to
                                    use and easy to maintain.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">
                                05.
                            </div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">
                                    Deployment
                                </div>
                                <p className="max-w-xs py-2 text-sm text-indigo-900">
                                    We build the right solution for your
                                    business. We craft beautiful, intuitive, and
                                    user-friendly interfaces that are easy to
                                    use and easy to maintain.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;

import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

export async function getServerSideProps(context: any) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );

    if (session) {
        return {
            redirect: {
                destination: "/home",
                permanent: false,
            },
        };
    }

    return { props: {} };
}
