import { depositsData } from "@/constants/business/deposits";
import InfoCards from "@/ui/main-page/cards/InfoCards";
import { useTranslations } from "next-intl";

export default function Deposits() {
  const t = useTranslations()
  return (
    <div className="container">
      <InfoCards data={depositsData} title={t("Subheader.business.deposits")} />
    </div>
  );
}
