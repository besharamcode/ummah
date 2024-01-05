import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import transLogo from "@/assets/Ummah-white-trans-logo.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ummah of Prophet Muhammad Sallallahu Alaihi Wasallam",
  description:
    'The Prophet Muhammad (peace be upon him) said: "The example of the believers in their affection, mercy, and compassion for each other is that of a body. When any limb aches, the whole body reacts with sleeplessness and fever.',
};

export default function AuthLayout({ children }) {
  return (
    <body className={inter.className}>
      <main className="grid place-items-center h-screen">
        <div className="block max-w-sm border p-6 bg-conatiner rounded-lg shadow border-gray-700 relative">
          <div className="grid place-items-center mb-2">
            <Image
              className=" absolute left-6 top-4"
              src={transLogo}
              width={70}
              height={"auto"}
              alt="Ummah"
            ></Image>
          </div>
          <h1 className="text-l text-center font-bold font-signika my-2 m-auto mt-11 pt-5">
            Welcome in Ummah <br /> of Prophet <br />
            Muhammad Sallallahu Alaihi Wasallam
          </h1>
          {children}
          <div className="text-center mt-8 text-xs">
            <Link
              className="text-gray-500 mx-2 font-light"
              href={"/in/terms-of-uses"}
            >
              Terms of Use
            </Link>{" "}
            <Link
              className="text-gray-500 mx-2 font-light"
              href={"/in/privacy-policy"}
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </main>
    </body>
  );
}
