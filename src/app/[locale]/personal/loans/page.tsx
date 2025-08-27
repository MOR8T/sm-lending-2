import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { loansData } from "@/constants/main-page/loans";
import CalculateCredit from "@/ui/main-page/calculateCredit/CalculateCredit";
import InfoCards from "@/ui/main-page/cards/InfoCards";
import { useTranslations } from "next-intl";
import React from "react";

export default function Deposits() {
  const t = useTranslations();

  return (
    <div className="container">
      <SectionTitle className="container">
        {t("HomePage.calculateCredit")}
      </SectionTitle>
      <CalculateCredit isBusiness={false} />
      <InfoCards
        data={loansData}
        title="Қарзҳо"
        className="md:mt-[80px] mt-[40px]"
      />
    </div>
  );
}
