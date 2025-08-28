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
          <SectionTitle className="md:mb-8 md:mt-0 mb-4 mt-0">SMS-банкинг</SectionTitle>
          <div className="text-[14px] leading-4 text-[#262626] flex flex-col gap-5">
            <p>
              SMS - Banking хидматест, ки ба шумо имкон медиҳад, ки бо истифода
              аз телефони мобилии худ аз ҳолати маблағҳои худ дар суратҳисоби
              корти худ дар вақти воқеӣ огоҳ бошед.
            </p>
            <p>
              Муштарие, ки ба хизматрасонии SMS-банкинг пайваст шудааст, имкони
              иҷрои амалиёти зеринро дорад:
            </p>
            <div>
              <p>Balance xxxx - Тавозуни суратҳисобро дархост кунед;</p>
              <p>Active xxxx - Кортро фаъол созед;</p>
              <p>ғайрифаъол xxxx - Хомӯш кардани корт;</p>
              <p>Notifyoff xxxx - Хомӯш кардани огоҳии корт;</p>
              <p>Notifyon xxxx - Огоҳии кортро фаъол созед;</p>
              <p>Қурби xxxx - Қурби асъор;</p>
              <p>xxxx - Рӯйхати фармонҳои имконпазир.</p>
              <p>
                Дар матни паём xxxx чор рақами охирини корти пластикӣ мебошад,
                ки хидмат ба онҳо пайваст аст. Ин фармонҳо бояд ҳамчун SMS ба
                рақами 5151 фиристода шаванд.
              </p>
            </div>
            <p>
              Функсия барои як сол 20 (бист) сомониро ташкил медиҳад. Шумо
              метавонед функсияи «SMS - Бонкинг»-ро дар офиси марказӣ ё дар
              тамоми филиалҳо ва марказҳои хизматрасонии ташкилоти мо пайваст
              намоед.
            </p>
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
