import {
  creditCardsData,
  moneyTrasferData,
} from "@/constants/main-page/other-services";
import InfoCards from "@/ui/main-page/cards/InfoCards";
import MoneyTrasferCards from "@/ui/main-page/cards/MoneyTrasferCards";
import { useTranslations } from "next-intl";

export default function OtherServices() {
  const t = useTranslations();
  return (
    <div className="container">
      <MoneyTrasferCards
        title={t("otherServices.moneyTrasfer")}
        data={moneyTrasferData}
      />
      <InfoCards
        data={creditCardsData}
        title={t("otherServices.creditCards")}
        className="md:mt-[80px] mt-[40px]"
      />
    </div>
  );
}
