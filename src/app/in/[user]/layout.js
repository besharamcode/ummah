import { Inter } from "next/font/google";
import "../../globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ummah of Prophet Muhammad Sallallahu Alaihi Wasallam",
  description:
    'The Prophet Muhammad (peace be upon him) said: "The example of the believers in their affection, mercy, and compassion for each other is that of a body. When any limb aches, the whole body reacts with sleeplessness and fever.',
};

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <header className="bg-conatiner h-screen w-fit pl-6 pr-20 py-4">
          <div className="mb-12 mt-2">
            {/* <Image
              src={""}
              alt="Ummah"
              height={"auto"}
              width={100}
            ></Image> */}
          </div>

          <nav>
            <ul className="ml-1 mt-3">
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-home text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Home</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-search text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Search</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-lightbulb text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Explore</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-clapperboard text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Reels</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-message-line text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Messages</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-lightbulb text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Notification</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-lightbulb text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Create</span>
                </Link>
              </li>
              <li className="my-8">
                <Link href={"#"} className="flex justify-start items-center ">
                  <i className="mr-3 fa-regular fa-lightbulb text-xl font-bold"></i>
                  <span className="leading-3 -mb-0.5">Profile</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div></div>
        </header>
        {children}
      </body>
    </html>
  );
}
