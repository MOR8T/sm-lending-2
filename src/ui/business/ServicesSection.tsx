import { stylesServicesSection } from "@/constants/business/const";
import { ServicesSectionT } from "@/types/business/cards";
import Image from "next/image";
import React from "react";

export default function ServicesSection({ cards, title }: ServicesSectionT) {
  return (
    <div className="flex flex-col gap-[40px] mt-[156px] max-w-[1128px] w-full mx-auto">
      <h1 className="text-[38px] leading-7 font-bold text-gray-900">{title}</h1>
      <div className=" grid grid-cols-3 grid-rows-2 h-[872px] gap-[26px]">
        {cards.map((card, i) => (
          <div
            key={i}
            className={` relative pt-[40px] px-[32px] rounded-[24px] text-gray-900 flex flex-col gap-[18px] ${stylesServicesSection[i].div}`}
          >
            <h1
              className={`text-[22px] leading-7 font-bold ${stylesServicesSection[i].h1}`}
            >
              {card.title}
            </h1>
            <h2 className={`leading-[1.5] ${stylesServicesSection[i].h2}`}>
              {card.subTitle}
            </h2>
            <div
              className={` absolute bottom-0 w-full flex justify-center ml-[-32px] ${stylesServicesSection[i].img}`}
            >
              <Image src={card.img} alt="img-card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
