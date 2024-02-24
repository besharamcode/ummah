import { Inter } from "next/font/google";
import "@/app/globals.css";
import Logo from "@/components/Logo";
import { h1 } from "@/constants/data";
import Link from "next/link";
import { ModeToggle } from "@/components/Themebutton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ummah of Prophet Muhammad Sallallahu Alaihi Wasallam",
  description:
    'The Prophet Muhammad (peace be upon him) said: "The example of the believers in their affection, mercy, and compassion for each other is that of a body. When any limb aches, the whole body reacts with sleeplessness and fever.',
};

export default function AuthLayout({ children }) {
  return (
    <main>
      <ModeToggle />
      <div className="grid place-items-center min-h-screen mx-4">
        <div className="border shadow-lg pb-12 lg:w-1/3 md:w-2/3 sm:w-2/3">
          <span className="font-caveat absolute top-[7vw] left-[5vw] select-none text-5xl blur-2xl h-10 w-10 bg-foreground rounded-full"></span>
          <span className="font-caveat absolute bottom-[7vw] right-[5vw] select-none text-5xl blur-2xl h-10 w-10 bg-foreground rounded-full"></span>
          <div className="sm:px-12 px-8 pt-12 pb-5 lg:px-6">
            <div className="grid place-content-center mb-3">
              <Logo width={130} />
            </div>
            <h1 className="text-center my-2 capitalize font-bold text-lg w-5/6 mx-auto font-caveat">
              {h1.signup.eng}
            </h1>
            {children}
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <Link
              className=" text-[11px] text-muted-foreground text-center"
              href="/in/legal/privacypolicy"
            >
              Privacy Policy
            </Link>{" "}
            <span className="mx-2 text-[11px] text-muted-foreground text-center">
              |
            </span>
            <Link
              className="text-[11px] text-muted-foreground text-center"
              href="/in/legal/privacypolicy"
            >
              Terms of Uses
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
