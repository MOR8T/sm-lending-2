"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import ButtonFon from "@/ui/main-page/buttons/ButtonFon";
import { BlueBannerT } from "@/types/main-page/ui/types";
import { useTranslations } from "next-intl";

// Pagination Autoplay
export default function BlueBanner({ items }: BlueBannerT) {
  const t = useTranslations();
  return (
    <div className="container">
      <div className=" blue-banner-swiper">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          modules={[Pagination, EffectFade, Autoplay]}
          // Fade effect
          effect="fade"
          fadeEffect={{ crossFade: true }} // Smooth crossfade
          speed={1000} // Duration of fade in ms
          loop={true}
          // Pagination
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-[246px] custom-bullet">${t(
                items?.[index]?.title
              )}</span>`;
            },
          }}
          // Autoplay
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full md:h-[520px]"
        >
          {items.map((el) => {
            return (
              <SwiperSlide key={el.title} className="">
                <div className="relatime rounded-3xl overflow-hidden md:h-[480px] w-full grid md:grid-cols-2 bg-[#F1F9FA]">
                  <div className="absolute top-0 left-0 md:py-[88px] py-[30px] md:px-[80px] px-[20px] md:pr-[10px]">
                    <h1 className="font-bold max-w-[596px] md:text-[40px] text-[22px] leading-[51px]">
                      {t(el.title)}
                    </h1>
                    <p className="md:text-[18px] max-w-[380px] text-[14px] mt-[24px] mb-[54px]">
                      {t(el.subTitle)}
                    </p>
                    <ButtonFon className="md:block hidden">
                      {t("buttons.detail")}
                    </ButtonFon>
                  </div>
                  <div className="absolute top-0 right-0 md:p-0 p-[0px_20px_30px_20px]">
                    <Image
                      src={el.img.src}
                      alt="banner"
                      width={100}
                      height={50}
                      className="w-full md:max-w-none max-w-[320px] md:mx-0 mx-auto"
                    />
                    <ButtonFon className="block md:hidden ">
                      {t("buttons.detail")}
                    </ButtonFon>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
