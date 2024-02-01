"use client";

import Image from "next/image";
import React from "react";
import img1 from "../assets/Ummah-white-logo.svg";
import img2 from "../assets/Unique.svg";
import img3 from "../assets/Profile_pic.jpeg";
import img5 from "../assets/सर्व सेवा संघ_1.png";
import img4 from "../assets/सर्व सेवा संघ_2.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Stories = () => {
  const storyArray = [
    {
      username: "ummah",
      imgPath: img1,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: true,
      isUser: true,
    },
    {
      username: "_ahmed.code_",
      imgPath: img2,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: false,
      isUser: false,
    },
    {
      username: "ummah",
      imgPath: img3,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: false,
      isUser: false,
    },
    {
      username: "_ahmed.code_",
      imgPath: img4,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: false,
      isUser: false,
    },
    {
      username: "ummah",
      imgPath: img5,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: false,
      isUser: false,
    },
    {
      username: "_ahmed.code_",
      imgPath: img4,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: false,
      isUser: false,
    },
    {
      username: "ummah",
      imgPath: img3,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: true,
      isUser: false,
    },
    {
      username: "_ahmed.code_",
      imgPath: img5,
      hasStory: true,
      storyLink: "../assets/Ummah-white-logo.svg",
      isWatch: true,
      isUser: false,
    },
  ];
  return (
    <Accordion type="single" collapsible className="my-3 rounded-md ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="">Stories</AccordionTrigger>
        <AccordionContent className="flex overflow-auto items-center pb-3 gap-4 no-scrollbar">
          {storyArray.length > 0
            ? storyArray.map((story, i) => {
                return (
                  <div
                    key={i}
                    className={` rounded-full p-[1px] min-w-16 w-16 drop-shadow `}
                  >
                    <div className="relative">
                      <div
                        className={`rounded-full p-[.16rem] shadow-inner ${
                          story.isWatch
                            ? "bg-zinc-700"
                            : "bg-gradient-to-r to-[#007880] from-[#87543b]"
                        }`}
                      >
                        <Image
                          src={story.imgPath}
                          width={"100"}
                          height={"100"}
                          alt={story.username}
                          className="rounded-full border-[1.8px] border-black"
                        ></Image>
                      </div>
                      {story.isUser ? (
                        <span className=" bg-white rounded-full h-[1.15rem] grid place-items-center w-[1.131rem] absolute bottom-[.02rem] right-1.5">
                          <i className="fa-solid fa-circle-plus text-sky-400 rounded-full mt-[1px]"></i>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="text-center text-xs mt-1">
                      <p className="text-ellipsis text-wrap">
                        {story.username.length > 8
                          ? story.username.substring(0, 8) + "..."
                          : story.username}
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Stories;
