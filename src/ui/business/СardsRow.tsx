"use client";
import { CardsT } from "@/types/business/cards";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function CardsRow({
  cards,
  translation = "businessCards",
}: CardsT) {
  const t = useTranslations(translation);
  return (
    <div className=" mt-[80px] max-w-[1128px] w-full mx-auto flex md:flex-row flex-col gap-[26px] px-[24px]">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-[#F4FBF9] relative pt-[40px] px-[32px] rounded-[24px] md:w-[360px] md:h-[424px] h-[328px] w-full text-gray-900 flex flex-col md:gap-[18px] gap-[8px]"
        >
          <h1 className="text-[22px] leading-7 font-bold">{t(card.title)}</h1>
          <h2 className="leading-[1.5]">{t(card.subTitle)}</h2>
          <div className=" absolute bottom-0 w-full flex justify-center ml-[-32px]">
            <Image src={card.img} className="md:h-[240px] h-[220px]" alt="img-card" />
          </div>
        </div>
      ))}
    </div>
  );
}
