"use client";

import Image from "next/image";
import transLogo from "@/assets/Ummah-white-trans-logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import check from "@/assets/check-svg.svg";
import cross from "@/assets/cross-svg.svg";
import { getCookies } from "cookies-next";

export default function Verifyuser() {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [attempt, setAttempt] = useState(3);
  const [isResend, setIsResend] = useState(false);
  const { uv_token } = getCookies();
  const checkOTP = async (e) => {
    e.preventDefault();
    if (OTP) {
      const find = await fetch(`/api/auth/signup/verifyuser/${OTP}`, {
        headers: {
          "Content-type": "application/json",
          cookie: uv_token,
        },
        method: "GET",
      });
      const response = await find.json();
      if (response) {
        router.push(response.path);
      } else {
        console.log(response.error);
      }
    }
  };

  const resendOTP = async (e) => {
    e.preventDefault();
    if (OTP) {
      const find = await fetch(`/api/auth/signup/verifyuser/${OTP}`, {
        headers: {
          "Content-type": "application/json",
          "uv-token": uv_token,
        },
        method: "GET",
      });
      const response = await find.json();
      if (response.isTrue) {
        router.push(response.path);
      } else {
        console.log(response.error);
      }
    }
  };

  console.log(uv_token);

  const handleInput = (value) => {
    setEmail(value);
    getDebouncedGetEmailorMobile(value);
  };

  return (
    <>
      <form
        className="text-center  mx-auto mt-2"
        id="signup-form"
        name="signup-form"
        onSubmit={(e) => checkOTP(e)}
      >
        {uv_token !== undefined ? (
          <p className="text-xs font-light mb-3">
            We sent an email, <br />
            if not found check in spam
          </p>
        ) : null}
        <h2 className="font-semibold font-signika text-lg">Verify email</h2>
        <div className="flex flex-col mt-1 ">
          {uv_token === undefined ? (
            <div className="flex items-center relative">
              <input
                id="signup-emailormobile-input"
                name="signup-emailormobile-input"
                value={email}
                onChange={(e) => handleInput(e.target.value.toLowerCase())}
                type="text"
                className=" mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                placeholder="Email address"
              />
              {isEmail.length >= 10 ? (
                <Image
                  id="isEmailorMobile"
                  className="absolute right-4 opacity-75 select-none"
                  src={isEmail ? check : cross}
                  alt="check"
                  height={22}
                  width={22}
                ></Image>
              ) : null}
            </div>
          ) : null}
          {
            <div className="flex items-center relative">
              <input
                id="signup-name-input"
                name="signup-name-input"
                value={OTP}
                type="number"
                onChange={(e) => setOTP(e.target.value)}
                className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
                placeholder="OTP"
              />
            </div>
          }
          <div className="flex justify-between">
            <Link
              href={"/in/auth/signin"}
              className="text-xs mx-2 font-signika text-white"
            >
              Already have account?
            </Link>
            <p
              onClick={(e) => resendOTP(e)}
              className="text-xs mx-2 font-signika text-white"
            >
              Resend OTP?
            </p>
          </div>
          <button type="submit" className="px-4 py-2 rounded mt-5 ">
            Next
          </button>
        </div>
      </form>
    </>
  );
}
