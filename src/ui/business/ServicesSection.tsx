import {
  stylesServicesSection1,
  stylesServicesSection2,
} from "@/constants/business/const";
import { ServicesSectionT } from "@/types/business/cards";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ServicesSection({
  cards,
  title,
  translation,
  typeStyleBox = 1,
}: ServicesSectionT) {
  const t = useTranslations(translation);

  const stylesServices = {
    1: stylesServicesSection1,
    2: stylesServicesSection2,
  };

  const stylesServicesSection = stylesServices[typeStyleBox];

  return (
    <div className="flex flex-col md:gap-[40px] gap-[32px] md:mt-[156px] mt-[60px] max-w-[1128px] w-full mx-auto px-[20px]">
      <h1 className="md:text-[38px] md:leading-7 text-[28px] font-bold text-gray-900">
        {title}
      </h1>
      <div className=" grid md:grid-cols-3 md:grid-rows-2 md:h-[872px] gap-[26px] grid-cols-2 grid-rows-[]">
        {cards.map((card, i) => (
          <div
            key={i}
            className={` px-[24px] py-[24px] relative md:py-[40px] md:px-[32px] md:!rounded-3xl !rounded-2xl text-gray-900 flex flex-col gap-[18px] transition-all duration-300  hover:scale-[1.02] ${stylesServicesSection[i].div}`}
          >
            <h1
              className={`md:text-[22px] md:leading-7 md:m-0 leading-[1.25rem] text-[16px] md:font-bold  ${stylesServicesSection[i].h1}`}
            >
              {t(card.title)}
            </h1>
            <h2 className={`leading-[1.5] ${stylesServicesSection[i].h2}`}>
              {t(card.subTitle)}
            </h2>
            <div
              className={` absolute bottom-0 w-full flex justify-center ml-[-32px] ${stylesServicesSection[i].imgDiv}`}
            >
              <Image
                className={`${stylesServicesSection[i].img}`}
                src={card.img}
                alt="img-card"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
