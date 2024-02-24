"use client";

import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Verifyuseremail() {
  const params = useParams();
  const { email } = params;

  const [otp, setOtp] = useState(new Array(4).fill(""));

  function onSubmit(e) {
    e.preventDefault();
    const userOTP = otp.join("");
    alert(userOTP);
  }

  const handleChange = (e, i) => {
    if (isNaN(e.target.value)) return false;
    // Handle backspace key
    setOtp([...otp.map((otp, index) => (index === i ? e.target.value : otp))]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    if (e.key === "Backspace" && i > 0 && !e.target.value) {
      // If backspace is pressed and the current input is empty, focus on the previous input
      otp[i - 1] && document.activeElement.previousSibling.focus();
    }
  };

  return (
    <>
      <p className="text-sm text-muted-foreground text-center mb-2">
        We send an email on your email {decodeURIComponent(email)}, <br /> If
        not found please check in spam
      </p>
      <h2 className="scroll-m-20 pb-4 text-xl font-semibold first:mt-0 text-center">
        OTP
      </h2>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="space-y-2 sm:mx-auto sm:w-3/4 "
      >
        <div className="flex gap-6 ">
          {otp.map((otp, i) => {
            return (
              <Input
                value={otp}
                key={i}
                name={`OTP${i}`}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleChange(e, i)}
                maxLength="1"
                className="text-center"
                type="text"
                placeholder="0"
              />
            );
          })}
        </div>
        <div className="mt-4">
          <Button className="w-full mt-4" type="submit">
            Submit
          </Button>
        </div>
        <Button variant="link" className="w-full">
          Resend OTP ?
        </Button>
      </form>
    </>
  );
}
