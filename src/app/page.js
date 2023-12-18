"use client";

import Image from "next/image";
import transLogo from "../assets/Ummah-white-trans-logo.svg";
import check from "../assets/check-svg.svg";
import cross from "../assets/cross-svg.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [emailormobile, setemailormobile] = useState("");
  const [password, setpassword] = useState("");
  const [isName, setIsName] = useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [isEmailorMobile, setIsEmailorMobile] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const isValidUsername = (username) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^[a-z0-9_\.]+$/;
    const a = regex.test(username);
    return a;
  };

  const isValidEmailorMobile = (emailormobile) => {
    const regexForMobile = /^(0|91)?[6-9][0-9]{9}$/;
    const regexForEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const mobileTest = regexForMobile.test(emailormobile);
    const emailTest = regexForEmail.test(emailormobile);
    console.log(mobileTest, emailTest);
    if (!mobileTest && !emailTest) {
      return false;
    } else {
      return true;
    }
  };

  const createUser = async () => {
    if (isEmailorMobile && isName && isPassword && isUsername) {
      console.log("User created");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username) {
        isValidUsername(username) ? setIsUsername(true) : setIsUsername(false);
      } else if (name) {
        name.length >= 5 ? setIsName(true) : setIsName(false);
      } else if (password) {
        password.length >= 8 ? setIsPassword(true) : setIsPassword(false);
      } else if (emailormobile) {
        isValidEmailorMobile(emailormobile)
          ? setIsEmailorMobile(true)
          : setIsEmailorMobile(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [
    name,
    username,
    emailormobile,
    password,
    isEmailorMobile,
    isName,
    isPassword,
    isUsername,
  ]);

  return (
    <>
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
          <form
            className="text-center  mx-auto mt-8"
            id="signup-form"
            name="signup-form"
          >
            <h2 className="font-semibold font-signika text-lg">
              Create Account
            </h2>
            <div className="flex flex-col mt-1 ">
              <div className="flex items-center relative">
                <input
                  id="signup-name-input"
                  name="signup-name-input"
                  value={name}
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Full Name"
                />
                {name.length > 5 ? (
                  <Image
                    id="isName"
                    className="absolute right-4 opacity-75 select-none"
                    src={isName ? check : cross}
                    alt="check"
                    height={22}
                    width={22}
                  ></Image>
                ) : null}
              </div>
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
                {username.length > 5 ? (
                  <Image
                    id="isUsername"
                    className="absolute right-4 opacity-75 select-none"
                    src={isUsername ? check : cross}
                    alt="check"
                    height={22}
                    width={22}
                  ></Image>
                ) : null}
              </div>
              <div className="flex items-center relative">
                <input
                  id="signup-emailormobile-input"
                  name="signup-emailormobile-input"
                  value={emailormobile}
                  onChange={(e) => setemailormobile(e.target.value)}
                  type="text"
                  className=" mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Mobile Number or email address"
                />
                {emailormobile.length >= 10 ? (
                  <Image
                    id="isEmailorMobile"
                    className="absolute right-4 opacity-75 select-none"
                    src={isEmailorMobile ? check : cross}
                    alt="check"
                    height={22}
                    width={22}
                  ></Image>
                ) : null}
              </div>
              <div className="flex items-center relative">
                <input
                  id="signup-password-input"
                  name="signup-password-input"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="text"
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Password"
                />
                {password.length >= 8 ? (
                  <Image
                    id="isPassword"
                    className="absolute right-4 opacity-75 select-none"
                    src={isPassword ? check : cross}
                    alt="check"
                    height={22}
                    width={22}
                  ></Image>
                ) : null}
              </div>
              <Link href={"/forgot-password"} className="text-xs block">
                <p className="text-right mx-2 font-signika">Forgot password?</p>
              </Link>
              <Link href={"/login"} className="text-xs block -mt-4">
                <p className="text-left mx-2 font-signika">
                  Already have account?
                </p>
              </Link>
              <button className="px-4 py-2 rounded mt-5 hover:outline hover:text hover:outline-1 hover:outline-gray-100">
                Bismillah
              </button>
            </div>
          </form>
          <div className="text-center font-medium  mt-8">
            <p className="text-gray-400 text-xs font-signika">
              By signup you confirm our <br />{" "}
              <Link href={"/terms-of-uses"}>Terms of Use</Link> and{" "}
              <Link href={"/privacy-policy"}>Privacy policy</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
