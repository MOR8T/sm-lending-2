"use client";
import { ReviewsT } from "@/types/business/reviews";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Reviews({ items }: ReviewsT) {
  const [slide, setSlide] = useState<number>(0);
  const limitLeft = slide !== 0;
  const limitNext = slide !== items.length - 1;

  console.log("slide", slide);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (limitNext) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
      }
    }, 7000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [slide]);

  return (
    <div className="w-full bg-[#ECF0F3] md:mt-[120px] mt-[60px] md:py-[96px]  py-6 pb-13.5 relative overflow-hidden">
      <div
        style={{ translate: "-" + slide * 100 + "%" }}
        className=" md:h-[605px] h-[271px]  duration-900 flex "
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-full">
            <div className=" container h-auto md:h-full !pt-[40px] md:pt-0">
              <p className="bodyBig mb-7 md:mb-[92px] md:max-w-[990px] md:text-2xl md:leading-[46px]">
                {item.message}
              </p>
              <div className="flex md:gap-[40px] gap-[8px] items-center">
                <Image
                  src={item.company.icon}
                  className="md:w-[100px] md:h-[100px] w-[56px] h-[56px]"
                  alt="img-slide"
                />
                <div className="flex flex-col md:gap-[9px] gap-[0px]">
                  <h1 className="md:text-[38px] text-[20px] md:font-bold bodyNormal md:head1 whitespace-nowrap md:mb-1">
                    {item.company.title}
                  </h1>
                  <p className="text-[#73787D] md:text-[24px] ">
                    {item.company.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" container bottom-[32px] right-[12px] flex justify-end md:pt-0 !pt-[40px] gap-[12px]">
        <button
          onClick={() => limitLeft && setSlide(slide - 1)}
          className={`bg-[#FFFFFF] flex justify-center items-center rounded-full h-[56px] w-[56px] cursor-pointer hover:text-[#3a6178] ${
            limitLeft && "text-[#3a6178]"
          }`}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => limitNext && setSlide(slide + 1)}
          className={`bg-[#FFFFFF] flex justify-center items-center rounded-full h-[56px] w-[56px] cursor-pointer hover:text-[#3a6178] ${
            limitNext && "text-[#3a6178]"
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
