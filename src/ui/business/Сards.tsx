import { cardsT } from "@/types/business/cards";
import Image from "next/image";
import React from "react";

export default function Сards({ cards }: cardsT) {
  return (
    <div className=" max-w-[1128px] w-full mx-auto flex gap-[26px]">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-[#F4FBF9] relative pt-[40px] px-[32px] rounded-[24px] w-[360px] h-[424px] text-gray-900 flex flex-col gap-[18px]"
        >
          <h1 className="text-[22px] leading-7 font-bold whitespace-pre">{card.title}</h1>
          <h2 className="leading-[1.5] whitespace-pre">{card.subTitle}</h2>
          <div className=" absolute bottom-0 w-full flex justify-center ml-[-32px]">
            <Image src={card.img} alt="img-card" />
          </div>
        </div>
      ))}
    </div>
  );
}
