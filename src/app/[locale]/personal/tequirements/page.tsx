"use client";
import bank_image from "@/../public/images/tequirements/1.svg";
import OpenAnAccountForm from "@/ui/main-page/form/OpenAnAccountForm";
import { useTranslations } from "next-intl";
import SectionInfo from "@/components/sectionInfo/SectionInfo";

export default function Tequirements() {
  const t = useTranslations("Tequirements");

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
          <p>{t("text1")}</p>
          <ul className="list-disc ml-[20px]">
            <li className="font-bold">{t("text2")}</li>
            <li className="font-bold">{t("text3")}</li>
            <li>
              <span className="font-bold">{t("text4")}</span> {t("text5")}
            </li>
            <li>
              <span className="font-bold">{t("text6")}</span> {t("text7")}
            </li>
          </ul>
        </div>
        <OpenAnAccountForm />
      </div>
    </div>
  );
}
