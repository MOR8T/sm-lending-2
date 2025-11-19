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
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          className="w-full md:h-[520px] h-[600px]"
        >
          {items.map((el, i: number) => {
            if (el.isImage) {
              return (
                <SwiperSlide key={el.title} className="">
                  <div className="relatime rounded-3xl overflow-hidden md:h-[480px] h-[560px] w-full grid md:grid-cols-2 bg-[#F1F9FA]">
                    <div className="md:absolute top-0 left-0 md:py-[88px] py-[30px] md:px-[80px] px-[20px] md:pr-[10px] z-20 md:block flex flex-col justify-center items-center md:text-start text-center">
                      <h1 className="font-bold md:max-w-[596px] md:text-[40px] text-[24px] md:leading-[51px]">
                        {t(el.title)}
                      </h1>
                      <p className="md:text-[18px] max-w-[380px] text-[16px] md:mt-[24px] mt-3 md:mb-[54px] mb-8">
                        {t(el.subTitle)}
                      </p> 
                      {i == 0 ? (
                        <ButtonFon className="md:py-4 py-3">
                          {t("buttons.detail")}
                        </ButtonFon>
                      ) : null}
                    </div>

                    <div className="md:absolute top-0 right-0 md:p-0 z-10 md:pb-0 pb-[0px]">
                      <Image
                        src={el?.img?.src || ""}
                        alt="banner"
                        width={500}
                        height={500}
                        className="w-full md:max-w-none"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            } else {
              switch (t(el.subTitle)) {
                case "advertisement": {
                  return (
                    <SwiperSlide key={el.title} className="">
                      <div className="grid rounded-3xl overflow-hidden md:h-[480px] h-[560px] w-full bg-[#F1F9FA]">
                        <div className="md:max-w-[450px]_ w-full overflow-hidden rounded-3xl lg:mr-20 lg:mx-0 mx-5 max-h-[310px]_">
                          <video
                            // controls
                            width="320"
                            preload="metadata" // only loads metadata initially
                            className=" md:max-w-[450px]_ w-full h-full  max-h-[310px]_"
                            muted={true}
                            autoPlay
                            loop
                          >
                            <source src={el.video} type="video/webm" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
                default: {
                  return (
                    <SwiperSlide key={el.title} className="">
                      <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden md:h-[480px] h-[560px] w-full bg-[#F1F9FA]">
                        <div className="md:h-full pl-[30px] md:pxl[80px] px-[20px] md:pr-[10px] z-20 flex flex-col justify-center items-center md:text-start text-center ">
                          <h1 className="font-bold md:max-w-[596px] md:text-[40px] text-[24px] md:leading-[51px]">
                            {t(el.title)}
                          </h1>
                          <p className="md:text-[18px] max-w-[380px] text-[16px] md:mt-[24px] mt-3 md:mb-[54px] mb-8">
                            {t(el.subTitle)}
                          </p>
                        </div>
                        <div className="md:p-0 flex items-center justify-end z-10 md:mb-0 mb-10 mx-auto">
                          <div className="md:max-w-[450px] w-full overflow-hidden rounded-3xl lg:mr-20 lg:mx-0 mx-5 max-h-[310px]">
                            <video
                              controls
                              width="320"
                              preload="metadata" // only loads metadata initially
                              className=" md:max-w-[450px] w-full  max-h-[310px]"
                              muted={true}
                              autoPlay
                              loop
                            >
                              <source src={el.video} type="video/webm" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              }
            }
          })}
        </Swiper>
      </div>
    </div>
  );
}
