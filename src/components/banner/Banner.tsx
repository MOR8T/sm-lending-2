"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import BannerButton from "@/ui/main-page/buttons/BannerButton";

type oneData = {
  key: string;
  onClick: () => void;
  title: string;
  description: string;
  textColor: string;
  button: {
    text: string;
    bgColor: string;
    color: string;
  };
  img: {
    src: string | StaticImageData;
    alt: string;
  };
  bgColor: string;
};

type Props = {
  spaceBetween?: number;
  slidesPerView?: number;
  items: oneData[];
};

// Pagination Autoplay
export default function Banner({
  spaceBetween = 30,
  slidesPerView = 1,
  items,
}: Props) {
  return (
    <div className="container rounded-3xl overflow-hidden banner-swiper">
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Pagination, EffectFade, Autoplay]}
        // Fade effect
        effect="fade"
        fadeEffect={{ crossFade: true }} // Smooth crossfade
        speed={1000} // Duration of fade in ms
        loop={true}
        // Pagination
        pagination={{
          clickable: true,
          // renderBullet: (index, className) => {
          //   return `<span class="${className} custom-bullet"></span>`;
          // },
        }}
        // Autoplay
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full md:h-[480px]"
      >
        {items.map((el) => {
          return (
            <SwiperSlide key={el.key} className="rounded-3xl overflow-hidden">
              <div
                className="md:h-[480px] w-full grid md:grid-cols-2"
                style={{ background: el.bgColor }}
              >
                <div className="md:py-[105.5px] py-[30px] md:px-[80px] px-[20px]">
                  <h1
                    style={{
                      color: el.textColor,
                    }}
                    className="font-bold max-w-[410px] md:text-[40px] text-[22px] leading-[51px]"
                  >
                    {el.title}
                  </h1>
                  <p
                    style={{
                      color: el.textColor,
                    }}
                    className="md:text-[18px] text-[14px] md:mt-[20px] mb-[40px]"
                  >
                    {el.description}
                  </p>
                  <BannerButton
                    className="md:block hidden"
                    style={{
                      background: el.button.bgColor,
                      color: el.button.color,
                    }}
                  >
                    {el.button.text}
                  </BannerButton>
                </div>
                <div className="md:p-0 p-[0px_20px_30px_20px]">
                  <Image
                    src={el.img.src}
                    alt={el.img.alt}
                    width={100}
                    height={50}
                    className="w-full md:max-w-none max-w-[320px] md:mx-0 mx-auto"
                  />
                  <BannerButton
                    className="block md:hidden "
                    style={{
                      background: el.button.bgColor,
                      color: el.button.color,
                    }}
                  >
                    {el.button.text}
                  </BannerButton>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
