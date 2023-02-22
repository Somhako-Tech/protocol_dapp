import Image from "next/image"
import Link from "next/link"
import userImage from '/public/images/userImage.png'

export default function Explore() {
    return (
        <>
        <div className="py-8">
            <div className="w-full max-w-[920px] px-4 mx-auto">
                <div className="bg-white dark:bg-gray-800 border border-teal-300 shadow-normal rounded-normal p-6">
                    <div className="border-b pb-6 flex flex-wrap items-center">
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
                        <div className="w-full sm:max-w-[calc(100%-115px)] sm:pl-6">
                            <h1 className="mb-2 text-2xl font-semibold dark:text-white">
                                @SAM
                            </h1>
                            <p className="mb-2 text-sm text-lightGray">
                                SAM Roger | ID:2135478894
                            </p>
                            <div className="flex flex-wrap items-center">
                                <h5 className="font-medium text-darkGray dark:text-white">
                                    Web Developer | &nbsp; 
                                </h5>
                                <p className="text-lightGray dark:text-white break-all">
                                    0xDFbE2975027c253A997B203782590A6f7F0699f9
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 border-b"> 
                        <div className="flex flex-wrap items-center justify-between mb-3">
                            <ul className="border border-slate-300 dark:bg-gray-700 dark:text-white text-2xl rounded-lg py-2 px-3 flex items-center mr-4">
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
                            <Link href="#" className="my-2 inline-block bg-primary hover:bg-secondary text-white rounded-lg text-center py-3 px-6">
                                Resume <i className="fa-solid fa-download ml-2"></i>
                            </Link>
                        </div>
                        <div className="bg-[#FAF8FF] dark:bg-gray-700 rounded-lg p-6">
                            <ul className="flex flex-wrap text-darkGray dark:text-white">
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
                    <div className="py-6 border-b dark:text-white">
                        <h3 className="mb-4 text-lg font-semibold">Summary</h3>
                        <div className="rounded-normal dark:bg-gray-700 border p-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                    <div className="py-6 border-b dark:text-white">
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
                    <div className="py-6 border-b dark:text-white">
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
                    <div className="py-6 border-b dark:text-white">
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
                    <div className="pt-6 dark:text-white">
                        <h3 className="mb-4 text-lg font-semibold">Certifications</h3>
                        <div
                            className="mb-4 rounded-normal border border-slate-200 bg-[#FAF8FF] dark:bg-gray-700 p-4 md:p-6"
                            key={'This item will repeat.'}
                        >
                            <article>
                                <h4 className="mb-1 text-lg font-semibold">
                                    Advanced Python
                                </h4>
                                <p className="mb-2 font-medium text-[#6D27F9]">
                                    Google
                                </p>
                                <p className="mb-2 text-sm font-light text-[#333] dark:text-white">
                                    Issued On:- 01-05-2021 <br />
                                    Expired On:- Not expire
                                </p>
                                <p className="text-[#333] dark:text-white font-light text-sm mb-2">
                                    Credentials ID:- <Link href={'https://hbsajdb.com'} className="text-primary hover:underline">https://hbsajdb.com</Link>
                                </p>
                                <a
                                    type="button"
                                    href={"https://hbsajdb.com"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border border-[#6D27F9] rounded-lg py-1.5 px-4 text-sm hover:bg-gradient-to-r hover:from-[#A382E5] hover:to-[#60C3E2] hover:text-white"
                                >
                                    Show Certificate
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}