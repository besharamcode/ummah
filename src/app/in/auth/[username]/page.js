/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCookies } from "cookies-next";

export default function Userdetails({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jwt = searchParams.get("jwt");
  const [isAuth, setisAuth] = useState({
    isAuth: false,
    error: "",
  });

  const isAuthenticate = async (query) => {
    const isAuth = await fetch(`/api/auth/signup/verifyuser?jwt=${query}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    const response = await isAuth.json();
    if (response.isAuth) {
      router.push(response.redirect);
    } else {
      console.log(response.error);
      setisAuth({ isAuth: false, error: response.error });
    }
  };

  useEffect(() => {
    if (jwt !== null) {
      isAuthenticate(jwt);
    } else {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="grid place-items-center">
        {!isAuth.isAuth ? <h2>{isAuth.error}</h2> : ""}
      </div>
    </>
  );
}
