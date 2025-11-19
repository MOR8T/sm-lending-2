"use client";
import bank_image from "@/../public/images/bank_with_location.svg";
import SectionInfo from "@/components/sectionInfo/SectionInfo";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={t("title")}
        description={t("disc")}
        img={bank_image}
        textMaxWidth="max-w-[447px]"
      />
      <div className="container-2md md:mt-[60px] mt-[40px]">
        <h2 className="text-[#262626] md:text-[24px] text-[20px] leading-5 mb-6 font-semibold">
          {t("title_2")}
        </h2>
        <div>
          <p className="text-[16px] leading-6">{t("text_1")}</p>
          <p className="text-[16px] leading-6">{t("text_2")}</p>
          <p className="text-[16px] leading-6">{t("text_3")}</p>
          <p className="text-[16px] leading-6">{t("text_4")}</p>
          <p className="text-[16px] leading-6">{t("text_5")}</p>
          <p className="text-[16px] leading-6">{t("text_6")}</p>
          <p className="text-[16px] leading-6">{t("text_7")}</p>
          <p className="text-[16px] leading-6">{t("text_8")}</p>
          <p className="text-[16px] leading-6">{t("text_9")}</p>
          <p className="text-[16px] leading-6">{t("text_10")}</p>
        </div>
      </div>
    </div>
  );
}
