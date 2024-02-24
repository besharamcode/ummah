import Desktopheader from "@/components/Desktopheader";
import Mobileheader from "@/components/Mobileheader";
import Mobilenav from "@/components/Mobilenav";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ummah of Prophet Muhammad Sallallahu Alaihi Wasallam",
  description:
    'The Prophet Muhammad (peace be upon him) said: "The example of the believers in their affection, mercy, and compassion for each other is that of a body. When any limb aches, the whole body reacts with sleeplessness and fever.',
};

export default function homeLayout({ children }) {
  return (
    <>
      <main className="">
        <Desktopheader />
        <Mobileheader />
        {children}
        <Sidebar />
        <Mobilenav />
      </main>
    </>
  );
}
