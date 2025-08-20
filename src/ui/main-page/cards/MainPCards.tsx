"use client";
import { Link } from "@/i18n/navigation";
import { MainPCardsT } from "@/types/main-page/ui/cards";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function MainPCards({ cards }: MainPCardsT) {
  const t = useTranslations();
  return (
    <div className="overflow-x-auto max-w-[1280px]">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[398px]"
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.title}
            className="bg-[#F5F5F5] rounded-[24px] overflow-hidden"
          >
            <Link
              href={card.href}
              className="relative pt-[32px] px-6 xl:w-[302px] w-full h-[398px] flex flex-col gap-[8px]"
            >
              <h1 className="text-[#141414] text-[24px] leading-6 font-bold">
                {t(card.title)}
              </h1>
              <h2 className="text-[#595959] text-[16px] leading-[22px]">
                {t(card.subTitle)}
              </h2>
              <div className="absolute bottom-8 left-6 bg-white w-10 h-10 rounded-[50%] grid place-content-center">
                <FaArrowRightLong />
              </div>
              <div className="absolute bottom-0 right-0">
                <Image src={card.img} alt="img-card" width={193} height={200} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
