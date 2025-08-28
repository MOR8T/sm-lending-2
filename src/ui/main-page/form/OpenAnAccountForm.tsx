"use client";
import { useTranslations } from "next-intl";
import Input from "../input/Input";
import ButtonFon from "../buttons/ButtonFon";
import CreditSelect from "../select/CreditSelect";
import { Link } from "@/i18n/navigation";

interface OpenAnAccountFormT {
  className?: string;
}

export default function OpenAnAccountForm({
  className = "",
}: OpenAnAccountFormT) {
  const t = useTranslations();

  function onFinish() {}

  return (
    <div
      className={`mt-[91px] bg-[#F5F5F5] rounded-[24px] md:p-10 p-6 text-[#282828] ${className}`}
    >
      <h1 className="text-[#262626] md:text-[32px] md:leading-8 text-[20px] leading-5 font-semibold text-center">
        {t("Tequirements.formTitle")}
      </h1>
      <div className="max-w-[619px] my-6 text-center mx-auto">
        <p className="text-[16px] leading-6">{t("Tequirements.formTitle2")}</p>
        <p className="text-[16px] leading-6">{t("Tequirements.formTitle3")}</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <Input
          placeholder={t("CalculateCredit.lastname") + "*"}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("CalculateCredit.fistname") + "*"}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("CalculateCredit.middlename")}
          value=""
          onChange={() => {}}
        />
        <CreditSelect
          placeholder={t("CalculateCredit.region") + "*"}
          value=""
          items={[
            {
              label: "",
              key: "1",
            },
          ]}
        />
        <div className="grid md:grid-cols-[2fr_1fr] gap-6 md:col-span-2">
          <Input
            placeholder={t("CalculateCredit.phoneNumber") + "*"}
            value=""
            onChange={() => {}}
          />
          <ButtonFon onClick={() => onFinish()}>
            {t("buttons.design")}
          </ButtonFon>
        </div>
        <div className="md:col-span-2">
          <p className="text-[#7B7B84] text-[16px] leading-6">
            {t("Tequirements.formInfo1")}{" "}
            <Link href="" className="text-[#007EFD]">
              {t("Tequirements.formInfo2")}
            </Link>{" "}
            {t("Tequirements.formInfo3")}{" "}
            <Link href="" className="text-[#007EFD]">
              {" "}
              {t("Tequirements.formInfo4")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
