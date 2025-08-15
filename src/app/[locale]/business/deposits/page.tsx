import InfoNavigationBanner from "@/components/banner/InfoNavigationBanner";
import { questions } from "@/constants/business/const";
import DepositsAccounts from "@/ui/business/depositsAccounts/DepositsAccounts";
import FrequentlyQuestions from "@/ui/business/Questions/FrequentlyQuestions";
import { useTranslations } from "next-intl";
import bunnerDeposits from "@/../public/icons/bunnerDeposits.svg";
import React from "react";

export default function Deposits() {
  const t = useTranslations();
  return (
    <div className=" container md:text-[40px] text-[30px] md:leading-[48px] leading-[40px] font-bold md:display2 mb-4.2 mt-1 md:my-7">
      <DepositsAccounts title={t("depositsAccounts.title")} />
      <FrequentlyQuestions
        title={t("frequentlyQuestions.title")}
        questions={questions}
      />
      <InfoNavigationBanner
        title={t("infoBannerDeposits.title")}
        description={t("infoBannerDeposits.description")}
        href="/"
        img={bunnerDeposits}
        linkText={t("buttons.detail")}
      />
    </div>
  );
}
