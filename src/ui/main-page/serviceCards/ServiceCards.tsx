import React from "react";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";
import { ServiceCardsT } from "@/types/main-page/ui/types";

function ServiceCards({
  translation = "personalServiceCards",
  items,
}: ServiceCardsT) {
  const t = useTranslations(translation);

  return (
    <div className="container">
      <h1 className="md:text-[29px] text-[20px] md:leading-[38px] leading-[24px] mb-[40px] font-bold">
        {t("title")}
      </h1>
      <div className="md:flex md:flex-wrap grid grid-cols-2 gap-6">
        {items.map((el) => {
          return (
            <ServiceCard
              key={el.key}
              img={el.img}
              text={t(el.text)}
              href={el.href}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCards;
