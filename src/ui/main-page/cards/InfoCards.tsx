import React from "react";
import BorderButton from "../buttons/BorderButton";
import ButtonFon from "../buttons/ButtonFon";
import { Link } from "@/i18n/navigation";

interface InfoCardsT {
  data: {
    title: string;
    description: string;
    title1: string;
    subTitle1: string;
    title2: string;
    subTitle2: string;
    title3: string;
    subTitle3: string;
  }[];
  className?: string;
  title: string;
}

export default function InfoCards({ data, className = "", title }: InfoCardsT) {
  return (
    <div className={`mt-10 *:${className}`}>
      <div className="mb-6">
        <h1 className="md:text-[32px] text-[20px] leading-8 text-[#323856] font-semibold">
          {title}
        </h1>
      </div>
      <div className={` grid gap-10`}>
        {data.map((el) => {
          return (
            <div
              key={el.title}
              className="bg-[#F0F0F0] rounded-[24px] lg:p-[38px_48px_38px_24px] p-[38px_24px] grid lg:grid-cols-[387px_1fr] grid-cols-1 gap-6"
            >
              <div className="w-full h-[230px] rounded-[16px] bg-white"></div>
              <div className="flex flex-col justify-between lg:gap-2 gap-6">
                <div>
                  <h3 className="text-[#262626] text-[24px] font-semibold mb-1">
                    {el.title}
                  </h3>
                  <p className="text-[#595959] text-[14px] leading-[14px]">
                    {el.description}
                  </p>
                </div>
                <div className="md:grid md:grid-cols-3 flex flex-wrap gap-4">
                  <div>
                    <p className="text-[#595959] text-[14px] leading-[14px] mb-1">
                      {el.subTitle1}
                    </p>
                    <p className="text-[#141414] text-[16px] leading-5 font-semibold">
                      {el.title1}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#595959] text-[14px] leading-[14px] mb-1">
                      {el.subTitle2}
                    </p>
                    <p className="text-[#141414] text-[16px] leading-5 font-semibold">
                      {el.title2}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#595959] text-[14px] leading-[14px] mb-1">
                      {el.subTitle3}
                    </p>
                    <p className="text-[#141414] text-[16px] leading-5 font-semibold">
                      {el.title3}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <Link href="">
                    <span className="text-[#595959] text-[16px]">
                      Остались вопросы?
                    </span>
                  </Link>
                  <div className="flex gap-[16px]">
                    <BorderButton>Подробнее</BorderButton>
                    <ButtonFon>Оформить</ButtonFon>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
