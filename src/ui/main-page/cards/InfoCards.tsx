import React from "react";
import BorderButton from "../buttons/BorderButton";
import ButtonFon from "../buttons/ButtonFon";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { InfoCardsT } from "@/types/main-page/ui/cards";
import Image from "next/image";

export default function InfoCards({ data, className = "", title }: InfoCardsT) {
  const t = useTranslations();
  return (
    <div className={`mt-10 *:${className}`}>
      <div className="mb-6">
        <h1 className="md:text-[32px] text-[20px] leading-8 text-[#323856] font-semibold">
          {title}
        </h1>
      </div>
      <div className={` grid gap-10`}>
        {data.map((el, i) => {
          return (
            <div
              key={el.title}
              className="bg-[#F0F0F0] rounded-[24px] lg:p-[38px_48px_38px_24px] p-[38px_24px] grid lg:grid-cols-[387px_1fr] grid-cols-1 gap-6"
            >
              <div className="max-w-[387px] w-full max-h-[230px] mx-auto rounded-[16px] bg-white overflow-hidden">
                {el.img ? (
                  <Image
                    src={el.img}
                    alt={`card ${i}`}
                    width={387}
                    height={258}
                    className="w-full h-auto"
                  />
                ) : null}
              </div>
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
                <div className="md:flex md:justify-between md:items-center grid grid-cols-1 gap-4">
                  <Link href="">
                    <span className="text-[#595959] text-[16px]">
                      {t("buttons.haveQuestion")}
                    </span>
                  </Link>
                  <div className="md:flex grid sm:grid-cols-2 gap-[16px]">
                    <BorderButton>{t("buttons.detail")}</BorderButton>
                    <ButtonFon>{t("buttons.design")}</ButtonFon>
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
