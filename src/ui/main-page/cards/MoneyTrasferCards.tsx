import React from "react";
import BorderButton from "../buttons/BorderButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { MoneyTrasferCardsT } from "@/types/main-page/ui/cards";

export default function MoneyTrasferCards({
  className = "",
  data,
  title = "",
}: MoneyTrasferCardsT) {
  const t = useTranslations();

  return (
    <div className={`${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-10">
        {data.map((el, i) => {
          return (
            <div
              key={el.title}
              className="bg-[#F5F5F5] md:rounded-[80px_12px_12px_80px] rounded-[12px] grid md:grid-cols-[200px_1fr]"
            >
              <div className="md:pt-0 pt-6">
                <Image
                  src={el.img}
                  alt={`transfer ${i}`}
                  width={200}
                  height={200}
                  className="max-w-[200px] w-full max-h-[200px] h-full md:mx-0 mx-auto"
                />
              </div>
              <div className="md:p-[14.5px_24px] p-6 flex flex-col justify-between gap-3">
                <h2 className="text-[#141414] text-[24px] leading-6 font-semibold">
                  {el.title}
                </h2>
                <p className="text-[#595959] text-[16px] leading-[24px] limitText3">
                  {el.description}
                </p>
                <BorderButton className="max-w-[137px]">
                  {t("buttons.detail")}
                </BorderButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
