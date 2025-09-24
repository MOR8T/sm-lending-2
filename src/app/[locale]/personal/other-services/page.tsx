import {
  creditCardsData,
  moneyTrasferData,
} from "@/constants/main-page/other-services";
import InfoCards from "@/ui/main-page/cards/InfoCards";
import MoneyTrasferCards from "@/ui/main-page/cards/MoneyTrasferCards";
import { useTranslations } from "next-intl";
import Image from "next/image";
import sms_icon from "@/../public/images/other-services/sms_icon.svg";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

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
      <div className="bg-[#F0F0F0] rounded-3xl md:p-10 p-6 md:grid md:grid-cols-[1fr_auto] flex flex-col-reverse gap-6 md:mt-[60px] mt-10">
        <div>
          <SectionTitle className="md:mb-8 md:mt-0 mb-4 mt-0">
            {t("Subheader.other_services.SMS")}
          </SectionTitle>
          <div className="text-[14px] leading-4 text-[#262626] flex flex-col gap-5">
            <p>{t("Subheader.other_services.SMS_Bunk")}</p>
            <p>{t("Subheader.other_services.client")}</p>
            <div>
              <p>{t("Subheader.other_services.balance")}</p>
              <p>{t("Subheader.other_services.active")}</p>
              <p>{t("Subheader.other_services.inactive")}</p>
              <p>{t("Subheader.other_services.notifyoff")}</p>
              <p>{t("Subheader.other_services.notifyon")}</p>
              <p>{t("Subheader.other_services.rate")}</p>
              <p>{t("Subheader.other_services.list_command")}</p>
              <p>{t("Subheader.other_services.message_num")}</p>
            </div>
            <p>{t("Subheader.other_services.price_fun")}</p>
          </div>
        </div>
        <div>
          <Image
            src={sms_icon}
            alt="sms"
            width={364}
            height={363}
            className="max-w-[364px] w-full md:max-h-[363px] max-h-[276px] h-auto m-auto"
          />
        </div>
      </div>
    </div>
  );
}
