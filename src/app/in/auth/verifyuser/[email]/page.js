"use client";

import Image from "next/image";
import transLogo from "@/assets/Ummah-white-trans-logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import check from "@/assets/check-svg.svg";
import cross from "@/assets/cross-svg.svg";
import { getCookies } from "cookies-next";

export default function Verifyuseremail() {
  const router = useRouter();
  const params = useParams();

  const { email } = params;

  return (
    <>
      <div className="grid place-items-center">
        <h2 className="font-semibold font-signika text-lg mt-4">
          Verify email
        </h2>
        <p className="text-center mt-2 text-sm font-light">
          We sent a confirmation Email on <br /> {email.slice(0, 3)}******.com,
          <br />
          if not found please check in spam
        </p>
      </div>
    </>
  );
}
