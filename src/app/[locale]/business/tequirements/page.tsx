"use client";
import SectionInfo from "@/components/sectionInfo/SectionInfo";
import { useTranslations } from "use-intl";
import bank_image from "@/../public/images/tequirements/1.svg";

export default function Tequirements() {
  const t = useTranslations("TequirementsBusiness");
  return (
    <div className="">
      <SectionInfo
        title={t("title")}
        description={t("description")}
        img={bank_image}
      />
    </div>
  );
}
