import Image from "next/image"
import Link from "next/link"
import userImage from '/public/images/userImage.png'

export default function MintPage() {
    return (
        <>
        <div className="py-8">
            <div className="container">
                <div className="mb-6 py-3 px-6 border border-teal-300 rounded-normal shadow-normal bg-white dark:bg-gray-800">
                    <div className="flex items-center">
                        <span className="mr-3 bg-green-500 rounded-full w-[30px] h-[30px] text-white flex items-center justify-center">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <h4 className="font-bold text-lg dark:text-white">Your profile has been minted</h4>
                    </div>
                </div>
                <div className="mb-6 bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal">
                    <div className="flex flex-wrap items-center p-6">
                        <div className="mb-6 w-full sm:mb-0 sm:max-w-[115px]">
                            <Image
                                src={
                                    userImage
                                }
                                alt="@Sam"
                                width={115}
                                height={115}
                                className="rounded-full"
                            />
                        </div>
                        <div className="w-full sm:max-w-[calc(100%-115px)] sm:pl-6 flex flex-wrap justify-between">
                            <aside className="mr-4">
                                <h1 className="mb-2 text-2xl font-semibold dark:text-white">
                                    Sam Roger
                                </h1>
                                <p className="mb-2 text-sm text-lightGray">
                                    @Joe
                                </p>
                                <div className="flex flex-wrap items-center">
                                    <h5 className="font-medium text-darkGray dark:text-white">
                                        Web Developer | &nbsp; 
                                    </h5>
                                    <p className="text-lightGray dark:text-white break-all">
                                        0xDFbE2975027c253A997B203782590A6f7F0699f9
                                    </p>
                                </div>
                            </aside>
                            <aside className="my-2">
                                <ul className="border border-slate-300 dark:bg-gray-700 dark:text-white text-xl rounded-lg py-1 px-2 flex items-center">
                                    <li className="m-2">
                                        <Link href="#" target="_blank" className="hover:text-primary">  
                                            <i className="fa-brands fa-behance"></i>
                                        </Link>
                                    </li> 
                                    <li className="m-2">
                                        <Link href="#" target="_blank" className="hover:text-primary">  
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </Link>
                                    </li> 
                                    <li className="m-2">
                                        <Link href="#" target="_blank" className="hover:text-primary">  
                                            <i className="fa-brands fa-stack-overflow"></i>
                                        </Link>
                                    </li> 
                                    <li className="m-2">
                                        <Link href="#" target="_blank" className="hover:text-primary">  
                                            <i className="fa-brands fa-github"></i>
                                        </Link>
                                    </li> 
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="bg-gradient-to-tr from-[#A382E5] to-[#60C3E2] rounded-bl-normal rounded-br-normal p-6">
                        <ul className="w-full max-w-[750px] mx-auto flex flex-wrap text-white">
                            <li className="flex items-center w-full sm:max-w-[50%] lg:max-w-[33.33%] font-light mb-3 pr-1 break-all">
                                <i className="fa-solid fa-envelope mr-3"></i>
                                <span className="mr-2">:</span>
                                <p>admin@gmail.com</p>
                            </li>
                            <li className="flex items-center w-full sm:max-w-[50%] lg:max-w-[33.33%] font-light mb-3 pr-1">
                                <i className="fa-solid fa-phone mr-3"></i>
                                <span className="mr-2">:</span>
                                <p>9856985698</p>
                            </li>
                            <li className="flex items-center w-full sm:max-w-[50%] lg:max-w-[33.33%] font-light mb-3 pr-1">
                                <i className="fa-solid fa-wallet mr-3"></i>
                                <span className="mr-2">:</span>
                                <p>$ 5000</p>
                            </li>
                            <li className="flex items-center w-full sm:max-w-[50%] lg:max-w-[33.33%] font-light mb-3 pr-1">
                                <i className="fa-solid fa-briefcase mr-3"></i>
                                <span className="mr-2">:</span>
                                <p>Full Time</p>
                            </li>
                            <li className="flex items-center w-full sm:max-w-[50%] lg:max-w-[33.33%] font-light mb-3 pr-1">
                                <i className="fa-solid fa-location-dot mr-3"></i>
                                <span className="mr-2">:</span>
                                <p>Remote</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[920px] px-4 mx-auto">
                <div className="mb-6 bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal p-6">
                    <div className="dark:text-white">
                        <h3 className="mb-4 text-lg font-semibold">Summary</h3>
                        <div className="rounded-normal dark:bg-gray-700 border p-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className="mb-6 bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal p-6">
                    <div className="dark:text-white">
                        <h3 className="mb-4 text-lg font-semibold">Skills</h3>
                        <div className="flex flex-wrap items-start">
                            <p
                                className="mr-2 mb-3 flex items-center rounded-lg bg-[#C9B3FF] py-2 px-3 text-[14px] dark:bg-gray-700 dark:text-white"
                            >
                                HTML
                            </p>
                            <p
                                className="mr-2 mb-3 flex items-center rounded-lg bg-[#C9B3FF] py-2 px-3 text-[14px] dark:bg-gray-700 dark:text-white"
                            >
                                PHP
                            </p>
                            <p
                                className="mr-2 mb-3 flex items-center rounded-lg bg-[#C9B3FF] py-2 px-3 text-[14px] dark:bg-gray-700 dark:text-white"
                            >
                                Java
                            </p>
                            <p
                                className="mr-2 mb-3 flex items-center rounded-lg bg-[#C9B3FF] py-2 px-3 text-[14px] dark:bg-gray-700 dark:text-white"
                            >
                                Adobe Photoshop
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-6 bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal p-6">
                    <div className="dark:text-white">
                        <h3 className="mb-4 text-lg font-semibold">Experience</h3>
                        <div
                            className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] dark:bg-gray-700 p-4 md:p-6"
                            key={'This item will repeat.'}
                        >
                            <article>
                                <h4 className="mb-1 text-lg font-semibold">
                                    Java Developer
                                </h4>
                                <p className="mb-2 font-medium text-[#6D27F9]">
                                    xyz Company Name
                                </p>
                                <p className="mb-2 text-sm font-light text-[#333] dark:text-white">
                                    Started Date:- 01-02-2021
                                    <br /> End Date:- Present
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="mb-6 bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal p-6">
                    <div className="dark:text-white">
                        <h3 className="mb-4 text-lg font-semibold">Education</h3>
                        <div
                            className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] dark:bg-gray-700 p-4 md:p-6"
                            key={'This item will repeat.'}
                        >
                            <article>
                                <h4 className="mb-1 text-lg font-semibold">
                                    BCA Program
                                </h4>
                                <p className="mb-2 font-medium text-[#6D27F9]">
                                    Delhi University
                                </p>
                                <p className="mb-2 text-sm font-light text-[#333] dark:text-white">
                                    Graduation Date:- 01-02-2023
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="mb-6 bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal py-10 p-6">
                    <div className="dark:text-white text-center">
                        <h3 className="text-xl mb-3">Referral Link</h3>
                        <Link href={'https//www.xyzmnzhfhfhhksjd.com'} className="inline-block text-primary text-lg mb-3">
                            https//www.xyzmnzhfhfhhksjd.com
                            <span className="text-[#898989] inline-block ml-2">
                                <i className="fa-solid fa-copy"></i>
                            </span>
                        </Link>
                        <h5 className="text-2xl font-bold">Referred Account: 0</h5>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}