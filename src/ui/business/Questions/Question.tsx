"use client";
import { QuestionT } from "@/types/business/frequentlyQuestions";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Question({ title, description }: QuestionT) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={`w-full overflow-hidden border-b border-[#DFE4E9] py-[32px] border-t ${
        !active && "!max-h-[90px]"
      }`}
    >
      <div className="flex justify-between ">
        <h1
          onClick={() => setActive(!active)}
          className={`md:text-[18px] text-[16px] md:leading-[24px] leading-[20px] font-normal md:bodyBig font-family-bold text-green cursor-pointer ${
            active && "!text-[#00AF66] !font-bold"
          }`}
        >
          {title}
        </h1>
        <div
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {!active ? (
            <FaPlus className="w-[20px] h-[20px]" />
          ) : (
            <FaMinus className="w-[20px] h-[20px]" />
          )}
        </div>
      </div>
      <div className={` duration-300 opacity-[0] ${active && "!opacity-[1]"}`}>
        <p className="whitespace-break-spaces text-base md:text-sm text-[16px] font-normal pt-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}
