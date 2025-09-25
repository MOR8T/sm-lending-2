import Image from "next/image";
import operator_img from "@/../public/images/operator.svg";
import { useTranslations } from "next-intl";

export default function HelpSectionInfo() {
  const t = useTranslations("helpSectionInfo");
  return (
    <div className="container">
      <div className="bg-[#F5F5F5] rounded-3xl grid md:grid-cols-[auto_1fr] md:gap-5">
        <div className="md:p-10 p-5">
          <Image
            src={operator_img}
            alt="operator"
            width={388}
            height={370}
            className="md:max-w-[388px] md:max-h-[370px] w-full h-full max-w-[279px] max-h-[266px] md:mx-none mx-auto"
          />
        </div>
        <div className="md:p-[40px_40px_40px_0px] p-[0px_24px_24px_24px] text-[#141414] text-[16px] leading-5">
          <h2 className="md:text-[20px] text-[18px] md:leading-6 leading-[22px] font-semibold">
            {t("full_company_name")}
          </h2>
          <ul className="mb-[8px] mt-6">
            <li>
              {t("pasport_for_register")}:{" "}
              <span className="font-medium">
                {t("value_of_pasport_for_register")}
              </span>
            </li>
            <li>
              {t("NBT_license")}:{" "}
              <span className="font-medium">{t("value_of_NBT_license")}</span>
            </li>
            <li>
              {t("index")}:{" "}
              <span className="font-medium">{t("value_of_index")}</span>
            </li>
          </ul>
          <ul>
            <li>
              {t("address")}:{" "}
              <span className="font-medium">{t("value_of_address")}</span>
            </li>
            <li>
              {t("contact")}:{" "}
              <span className="font-medium">{t("value_of_contact")}</span>
            </li>
            <li>
              {t("general_question")}:{" "}
              <span className="font-medium">
                {t("value_of_general_question")}
              </span>
            </li>
            <li>
              {t("gmail")}:{" "}
              <span className="font-medium">{t("value_of_gmail")}</span>
            </li>
            <li>
              {t("website")}:{" "}
              <span className="font-medium">{t("value_of_website")}</span>
            </li>
            <li>
              {t("legal_address")}:{" "}
              <span className="font-medium">
                {" "}
                {t("value_of_legal_address")}
              </span>
            </li>
            <li>
              {t("working_time")}:{" "}
              <span className="font-medium">{t("value_of_working_time")}</span>
            </li>
            <li>
              {t("weekends")}:{" "}
              <span className="font-medium">{t("value_of_weekends")}</span>
            </li>
            <li>
              {t("trust_num")}:{" "}
              <span className="font-medium">{t("value_of_trust_num")}</span>
            </li>
          </ul>
          <ul className="mt-[8px]">
            <li>
              {t("citizens")}:{" "}
              <span className="font-medium">{t("value_of_citizens")}</span>
            </li>
            <li>
              {t("reception_day")}:{" "}
              <span className="font-medium">{t("value_of_reception_day")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
