"use client";

import Image from "next/image";
import transLogo from "../assets/Ummah-white-trans-logo.svg";
import whiteImage from "../assets/Ummah-white-logo.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [isTrue, setIsTrue] = useState({
    isName: false,
    isUsername: false,
    isEmail: false,
    isPassword: false,
  });

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
      console.log(isAvail);
      isAvail
        ? setIsTrue({ ...isTrue, isUsername: true })
        : setIsTrue({ ...isTrue, isUsername: false });
    } else {
      setIsTrue({ ...isTrue, isUsername: false });
    }
  };

  const isValidEmail = async (email) => {
    // const regexForMobile = /^(0|91)?[6-9][0-9]{9}$/;
    // const mobileTest = regexForMobile.test(email);

    const regexForEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailTest = regexForEmail.test(email);
    if (emailTest) {
      const isAvail = await checkData(email);
      isAvail
        ? setIsTrue({ ...isTrue, isEmail: true })
        : setIsTrue({ ...isTrue, isEmail: false });
    } else {
      setIsTrue({ ...isTrue, isEmail: false });
    }
  };

  const isValidName = (name) => {
    return name.length > 5
      ? setIsTrue({ ...isTrue, isName: true })
      : setIsTrue({ ...isTrue, isName: false });
  };
  const isValidPassword = (password) => {
    return password.length > 8
      ? setIsTrue({ ...isTrue, isPassword: true })
      : setIsTrue({ ...isTrue, isPassword: false });
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
  const getDebouncedGetEmail = debounce(isValidEmail, 2000);
  const getDebouncedGetPassword = debounce(isValidPassword, 2000);

  const handleInput = (value, from) => {
    if (from === "Name") {
      getDebouncedGetName(value);
      setForm({ ...form, name: value });
    } else if (from === "Username") {
      getDebouncedGetUsername(value);
      setForm({ ...form, username: value });
    } else if (from === "Email") {
      setForm({ ...form, email: value });
      getDebouncedGetEmail(value);
    } else if (from === "Password") {
      setForm({ ...form, password: value });
      getDebouncedGetPassword(value);
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (
      isTrue.isEmail &&
      isTrue.isName &&
      isTrue.isPassword &&
      isTrue.isUsername
    ) {
      const create = await fetch(`api/auth/signup`, {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ form }),
      });
      const response = await create.json();
      if (response.message) {
        router.push(response.path);
      } else {
        alert(response.error);
      }
    }
  };

  return (
    <>
      <main className="grid place-items-center h-screen">
        <div className="flex bg-base-100 shadow-2xl">
          <div className="mockup-browser rounded-none border-r">
            <div className="mockup-browser-toolbar">
              <div className="input">https://www.ummah.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <Image src={transLogo} height={"auto"} width={"100vh"} alt="Ummah"></Image>
            </div>
          </div>
          <div className="block p-6 rounded-lg relative">
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
                    autoComplete="true"
                    id="name"
                    name="name"
                    value={form.name}
                    type="text"
                    onChange={(e) => handleInput(e.target.value, "Name")}
                    className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                    placeholder="Full Name"
                  />
                  {form.name.length > 5 ? (
                    <i
                      className={`fa-solid ${
                        isTrue.isName ? "fa-circle-check" : "fa-circle-xmark"
                      } absolute right-4 opacity-75 select-none text-xl`}
                    ></i>
                  ) : null}
                </div>
                <div className="flex items-center relative">
                  <input
                    autoComplete="true"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={(e) =>
                      handleInput(e.target.value.toLowerCase(), "Username")
                    }
                    type="text"
                    className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                    placeholder="Username"
                  />
                  {form.username.length > 5 ? (
                    <i
                      className={`fa-solid ${
                        isTrue.isUsername
                          ? "fa-circle-check"
                          : "fa-circle-xmark"
                      } absolute right-4 opacity-75 select-none text-xl`}
                    ></i>
                  ) : null}
                </div>
                <div className="flex items-center relative">
                  <input
                    autoComplete="true"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      handleInput(e.target.value.toLowerCase(), "Email")
                    }
                    type="text"
                    className=" mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                    placeholder="Email address"
                  />
                  {form.email.length >= 10 ? (
                    <i
                      className={`fa-solid ${
                        isTrue.isEmail ? "fa-circle-check" : "fa-circle-xmark"
                      } absolute right-4 opacity-75 select-none text-xl`}
                    ></i>
                  ) : null}
                </div>
                <div className="flex items-center relative">
                  <input
                    autoComplete="true"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={(e) => handleInput(e.target.value, "Password")}
                    type="password"
                    className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                    placeholder="Password"
                  />
                  {form.password.length >= 8 ? (
                    <i
                      className={`fa-solid ${
                        isTrue.isPassword
                          ? "fa-circle-check"
                          : "fa-circle-xmark"
                      } absolute right-4 opacity-75 select-none text-xl`}
                    ></i>
                  ) : null}
                </div>
                <Link href={"/in/auth/signin"} className="text-xs block">
                  <p className="text-right mx-2 font-signika">
                    Already have account?
                  </p>
                </Link>
                <button type="submit" className="btn btn-primary mt-4">
                  <i className="fa-solid fa-hand-point-up"></i>Bismillah
                </button>
              </div>
            </form>
            <div className="text-center mt-8">
              <p className=" text-xs font-light">
                By signup you confirm our <br />{" "}
                <Link className="" href={"/in/legal/termsofuses"}>
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link className="" href={"/in/legal/privacypolicy"}>
                  Privacy policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
