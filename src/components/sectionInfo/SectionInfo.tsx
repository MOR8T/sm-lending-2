import { SectionInfoT } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function SectionInfo({
  title,
  description,
  img,
  className = "",
  textMaxWidth = "max-w-[461px]",
}: SectionInfoT) {
  return (
    <div className={`w-full bg-[#DBECF2] md:py-8 py-10 ${className}`}>
      <div className="container-2md md:grid md:grid-cols-2 flex flex-col-reverse gap-2">
        <div
          className={`md:mx-0 mx-auto flex flex-col justify-center md:items-start items-center md:text-left text-center ${textMaxWidth}`}
        >
          <h1 className="text-[#262626] md:text-[32px] md:leading-8 text-[20px] leading-5 font-semibold">
            {title}
          </h1>
          <p className="text-[16px] leading-[18px] mt-[12px]">{description}</p>
        </div>
        <div className="flex md:justify-end justify-center">
          <Image
            src={img}
            alt="bank"
            width={326}
            height={258}
            className="md:w-[326px] md:h-[258px] w-[200px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
}
