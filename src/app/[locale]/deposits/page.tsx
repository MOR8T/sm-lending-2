import InfoNavigationBanner from "@/components/banner/InfoNavigationBanner";
import FrequentlyQuestions from "@/ui/business/Questions/FrequentlyQuestions";
import DepositsCom from "@/ui/main-page/deposits/DepositsCom";
import { useTranslations } from "next-intl";
import bunnerDeposits from "@/../public/icons/bunnerDeposits.svg";
import { questions } from "@/constants/business/const";

export default function Deposits() {
  const t = useTranslations();
  return (
    <div className="container">
      <DepositsCom title={t("depositsAccounts.title")} />
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
