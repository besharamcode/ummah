"use client";

import Image from "next/image";
import transLogo from "../assets/Ummah-white-trans-logo.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const router = useRouter();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [emailormobile, setemailormobile] = useState("");
  const [password, setpassword] = useState("");
  const [isName, setIsName] = useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [isEmailorMobile, setIsEmailorMobile] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const checkData = async (data) => {
    const find = await fetch(`/api/auth/signup/${data}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "GET",
    });
    const response = await find.json();
    if (response.isAvail) {
      return response.isAvail;
    } else {
      console.log(response.error);
    }
  };

  const isValidUsername = async (username) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^[a-z0-9_\.]+$/;
    const a = regex.test(username);
    if (a) {
      const isAvail = await checkData(username);
      isAvail ? setIsUsername(true) : setIsUsername(false);
    } else {
      setIsUsername(false);
    }
  };

  const isValidEmailorMobile = async (emailormobile) => {
    // const regexForMobile = /^(0|91)?[6-9][0-9]{9}$/;
    // const mobileTest = regexForMobile.test(emailormobile);

    const regexForEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailTest = regexForEmail.test(emailormobile);
    if (emailTest) {
      const isAvail = await checkData(emailormobile);
      isAvail ? setIsEmailorMobile(true) : setIsEmailorMobile(false);
    } else {
      setIsEmailorMobile(false);
    }
  };

  const isValidName = (name) => {
    return name.length > 5 ? setIsName(true) : setIsName(false);
  };
  const isValidPassword = (password) => {
    return password.length > 8 ? setIsPassword(true) : setIsPassword(false);
  };

  const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const getDebouncedGetName = debounce(isValidName, 2000);
  const getDebouncedGetUsername = debounce(isValidUsername, 2000);
  const getDebouncedGetEmailorMobile = debounce(isValidEmailorMobile, 2000);
  const getDebouncedGetPassword = debounce(isValidPassword, 2000);

  const handleInput = (value, from) => {
    if (from === "Name") {
      getDebouncedGetName(value);
      setname(value);
    } else if (from === "Username") {
      getDebouncedGetUsername(value);
      setusername(value);
    } else if (from === "Emailormobile") {
      setemailormobile(value);
      getDebouncedGetEmailorMobile(value);
    } else if (from === "Password") {
      setpassword(value);
      getDebouncedGetPassword(value);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (isEmailorMobile && isName && isPassword && isUsername) {
      const create = await fetch(`api/auth/signup`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name, username, emailormobile, password }),
      });
      const response = await create.json();
      if (response.message) {
        router.push(`/in/auth/verifyuser/${emailormobile}`);
      } else {
        alert(response.error);
      }
    }
  };

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
            onSubmit={(e) => createUser(e)}
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
                  onChange={(e) => handleInput(e.target.value, "Name")}
                  className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Full Name"
                />
                {name.length > 5 ? (
                  <i
                    className={`fa-solid ${
                      isName ? "fa-circle-check" : "fa-circle-xmark"
                    } absolute right-4 opacity-75 select-none text-xl`}
                  ></i>
                ) : null}
              </div>
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
                {username.length > 5 ? (
                  <i
                    className={`fa-solid ${
                      isUsername ? "fa-circle-check" : "fa-circle-xmark"
                    } absolute right-4 opacity-75 select-none text-xl`}
                  ></i>
                ) : null}
              </div>
              <div className="flex items-center relative">
                <input
                  id="signup-emailormobile-input"
                  name="signup-emailormobile-input"
                  value={emailormobile}
                  onChange={(e) =>
                    handleInput(e.target.value.toLowerCase(), "Emailormobile")
                  }
                  type="text"
                  className=" mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                  placeholder="Email address"
                />
                {emailormobile.length >= 10 ? (
                  <i
                    className={`fa-solid ${
                      isEmailorMobile ? "fa-circle-check" : "fa-circle-xmark"
                    } absolute right-4 opacity-75 select-none text-xl`}
                  ></i>
                ) : null}
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
                {password.length >= 8 ? (
                  <i
                    className={`fa-solid ${
                      isPassword ? "fa-circle-check" : "fa-circle-xmark"
                    } absolute right-4 opacity-75 select-none text-xl`}
                  ></i>
                ) : null}
              </div>
              <Link href={"/in/auth/signin"} className="text-xs block">
                <p className="text-right mx-2 font-signika">
                  Already have account?
                </p>
              </Link>
              <button type="submit" className="px-4 py-2 rounded mt-5 ">
                <i className="fa-solid fa-hand-point-up"></i> Bismillah
              </button>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-xs font-light">
              By signup you confirm our <br />{" "}
              <Link className="text-gray-500" href={"/in/legal/termsofuses"}>
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link className="text-gray-500" href={"/in/legal/privacypolicy"}>
                Privacy policy
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
