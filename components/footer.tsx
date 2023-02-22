import Link from "next/link"
import Logo from "./Logo"

export default function Footer() {
  const followUs = [
    {
      url: "https://www.linkedin.com/company/somhako/",
      text: "LinkedIn",
      icon: <i className="fa-brands fa-linkedin-in"></i>,
    },
    {
      url: "https://discord.gg/934TJUe6BF",
      text: "Discord",
      icon: <i className="fa-brands fa-discord"></i>,
    },
    {
      url: "https://twitter.com/somhako",
      text: "Twitter",
      icon: <i className="fa-brands fa-twitter"></i>,
    },
  ]
  return (
    <>
      <div className="bg-white dark:bg-gray-800 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] dark:bg-gray-900 relative text-black dark:text-white">
        <div className="pt-7">
          <div className="container">
            <div className="w-full text-center mb-4">
              <Logo width={200} height={200} />
              <p className="pt-4 max-w-[500px] mx-auto w-full">
                SOMHAKO is the first protocol-based, composable, and
                decentralized social graph uniting the entire HR industry. By
                indexing and syncing candidate data on the blockchain network.
              </p>
            </div>
            <div className="w-full text-center mb-4">
              <h4 className="font-bold text-xl mt-2 mb-4">Follow Us</h4>
              <ul className="flex items-center justify-center">
                {followUs.map((followUs, i) => (
                  <li className="mb-3" key={i}>
                    <Link
                      href={followUs.url}
                      className="hover:text-[#6D27F9] inline-flex items-center font-medium"
                    >
                      <span className="inline-block w-[30px] mr-2 text-center text-2xl">
                        {followUs.icon}
                      </span>
                      {/* {followUs.text} */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-3 bg-gradient-to-r from-[#A382E5] to-[#60C3E2]">
          <div className="container">
            <p className="text-white text-sm text-center">
                © 2023, All Rights Reserved, Somhako Version 2.3
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
