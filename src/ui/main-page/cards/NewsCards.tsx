"use client";
import { Link } from "@/i18n/navigation";
import { NewsCardsT } from "@/types/main-page/ui/cards";
import { useTranslations } from "next-intl";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BorderButton from "../buttons/BorderButton";

export default function NewsCards({ cards }: NewsCardsT) {
  const t = useTranslations();
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[285px]"
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} className="p-[2px]">
            <div className="bg-[#fff] rounded-[24px] border border-b border-[#D9D9D9] h-[281px]">
              <div className="flex flex-col gap-4 justify-between md:p-10 p-6 w-full h-[280px] ">
                <div>
                  <h1 className="text-[#141414] md:text-[24px] text-[20px] md:leading-6 leading-[21px] font-bold limitText3">
                    {t(card.title)}
                  </h1>
                  <h2 className="text-[#595959] text-[16px] md:Аleading-[22px] mt-[16px] limitText3">
                    {t(card.subTitle)}
                  </h2>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[#8C8C8C] text-[16px] leading-6">
                    {card.date}
                  </p>
                  <Link href={card.href}>
                    <BorderButton className="">
                      {t("buttons.detail")}
                    </BorderButton>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
