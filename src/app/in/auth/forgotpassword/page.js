"use client";

import Image from "next/image";
import transLogo from "@/assets/Ummah-white-trans-logo.svg";
import check from "@/assets/check-svg.svg";
import cross from "@/assets/cross-svg.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const [username, setusername] = useState("");

  const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const getDebouncedGetName = debounce(1000);

  const handleInput = (value, from) => {};

  return (
    <>
          <form
            className="text-center  mx-auto mt-8"
            id="signup-form"
            name="signup-form"
            onSubmit={(e) => createUser(e)}
          >
            <h2 className="font-semibold font-signika text-lg"></h2>
            <div className="flex flex-col mt-1 ">
              <div className="flex items-center relative">
                <input
                  id="signup-username-input"
                  name="signup-username-input"
                  value={username}
                  onChange={(e) => setusername(e.target.value.toLowerCase())}
                  type="text"
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Username"
                />
              </div>
              <div className="flex items-center relative">
                <input
                  id="signup-password-input"
                  name="signup-password-input"
                  value={OTP}
                  onChange={(e) => setOTP(e.target.value, "Password")}
                  type="number"
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="OTP"
                />
              </div>
              <Link href={"/"} className="text-xs block">
                <p className="text-left mx-2 font-signika">
                  <>Don&apos;t have account?</>
                </p>
              </Link>
              <button
                type="submit"
                className="px-4 py-2 rounded mt-5 hover:outline hover:text hover:outline-1 hover:outline-gray-100"
              >
                Bismillah
              </button>
            </div>
          </form>
    </>
  );
}
