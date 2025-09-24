import { depositsData } from "@/constants/main-page/deposits";
import InfoCards from "@/ui/main-page/cards/InfoCards";
import { useTranslations } from "next-intl";
import React from "react";

export default function Deposits() {
  const t = useTranslations()
  return (
    <div className="container">
      <InfoCards data={depositsData} title={`${t("Subheader.personal.deposits")}`} />
    </div>
  );
}
