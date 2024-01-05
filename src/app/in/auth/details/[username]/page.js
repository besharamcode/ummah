/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCookies, hasCookie } from "cookies-next";

export default function Userverified({}) {
  const router = useRouter();
  const cookieStore = getCookies();
  const [form, setForm] = useState({
    mobile: "",
    dob: "",
    gender: "",
  });

  useEffect(() => {
    if (!hasCookie("UV_Token")) {
      // router.push("/");
    }
  }, []);

  const handleInput = (e) => {
    if (e.target.name === "dob") {
      setForm({
        ...form,
        [e.target.name]: e.target.value.formate,
      });
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="text-center  mx-auto mt-8"
        id="signup-form"
        name="signup-form"
        onSubmit={(e) => createUser(e)}
      >
        <h2 className="font-semibold font-signika text-lg">Create Account</h2>
        <div className="flex flex-col mt-1 ">
          <div className="flex items-center relative">
            <input
              autoComplete="true"
              id="mobile"
              name="mobile"
              value={form.mobile}
              type="number"
              onChange={(e) => handleInput(e)}
              className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
              placeholder="Mobile number"
            />
            {/* {form.name.length > 5 ? (
              <i
                className={`fa-solid ${
                  isTrue.isName ? "fa-circle-check" : "fa-circle-xmark"
                } absolute right-4 opacity-75 select-none text-xl`}
              ></i>
            ) : null} */}
          </div>
          <div className="flex items-center relative">
            {/* <input
              autoComplete="true"
              id="dob"
              name="dob"
              value={form.dob}
              onFocus={(e) => (e.target.type = "date")}
              onChange={(e) => handleInput(e)}
              type="text"
              className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full"
              placeholder="Date of birth"
            /> */}

            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>

            {/* {form.username.length > 5 ? (
              <i
                className={`fa-solid ${
                  isTrue.isUsername ? "fa-circle-check" : "fa-circle-xmark"
                } absolute right-4 opacity-75 select-none text-xl`}
              ></i>
            ) : null} */}
          </div>
          <div className="flex items-center relative">
            <select
              value={form.gender}
              onChange={(e) => handleInput(e)}
              name="gender"
              id="gender"
              placeholder="Done"
              className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded w-full appearance-none"
            >
              <option selected defaultValue="Prefer not to say">
                Prefer not to say
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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
    </>
  );
}
