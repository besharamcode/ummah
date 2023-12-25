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
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [emailormobile, setemailormobile] = useState("");
  const [password, setpassword] = useState("");
  const [isName, setIsName] = useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [isEmailorMobile, setIsEmailorMobile] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

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
            <h2 className="font-semibold font-signika text-lg">Sign in</h2>
            <div className="flex flex-col mt-1 ">
              <div className="flex items-center relative">
                <input
                  id="signup-username-input"
                  name="signup-username-input"
                  value={username}
                  onChange={(e) =>
                    handleInput(e.target.value.toLowerCase(), "Username")
                  }
                  type="text"
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Username"
                />
              </div>
              <div className="flex items-center relative">
                <input
                  id="signup-password-input"
                  name="signup-password-input"
                  value={password}
                  onChange={(e) => handleInput(e.target.value, "Password")}
                  type="password"
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between">
                <Link href={"/"} className="text-xs mx-2 font-signika text-white">
                  Don&apos;t have account?
                </Link>
                <Link
                  href={"/in/auth/forgotpassword"}
                  className="text-xs mx-2 font-signika text-white"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded mt-5 "
              >
                Bismillah
              </button>
            </div>
          </form>
          
    </>
  );
}
