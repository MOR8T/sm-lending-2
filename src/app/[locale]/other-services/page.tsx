import InfoNavigationBanner from "@/components/banner/InfoNavigationBanner";
import bunnerDeposits from "@/../public/icons/bunnerDeposits.svg";
import { useTranslations } from "next-intl";

export default function OtherServices() {
  const t = useTranslations();
  return (
    <div className="container">
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
