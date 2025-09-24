"use client";
import bank_image from "@/../public/images/tequirements/1.svg";
import OpenAnAccountForm from "@/ui/main-page/form/OpenAnAccountForm";
import { useTranslations } from "next-intl";
import SectionInfo from "@/components/sectionInfo/SectionInfo";

export default function Tequirements() {
  const t = useTranslations("TequirementsBusiness");

  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={t("title")}
        description={t("description")}
        img={bank_image}
      />
      <div className="container-2md md:mt-[60px] mt-[40px]">
        <h2 className="text-[#262626] md:text-[24px] text-[20px] leading-5 mb-6 font-semibold">
          {t("title2")}
        </h2>
        <div className="text-[16px] leading-6">
          <p> {t("title2")}</p>
          <p> {t("text8")}</p>
          <ul className="list-disc ml-[20px]">
            <li>{t("text9")}</li>
            <li>{t("text10")}</li>
          </ul>
          <p>{t("text11")}</p>
          <ul className="list-disc ml-[20px]">
            <li>{t("text12")}</li>
            <li>{t("text13")}</li>
          </ul>
        </div>
        <OpenAnAccountForm />
      </div>
    </div>
  );
}
