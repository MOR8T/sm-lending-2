"use client";
import { useTranslations } from "next-intl";
import Input from "../input/Input";
import ButtonFon from "../buttons/ButtonFon";
import { Link } from "@/i18n/navigation";
import TextArea from "../input/TextArea";

interface OpenAnAccountFormT {
  className?: string;
}

export default function OnlineQuestionnaireForm({
  className = "",
}: OpenAnAccountFormT) {
  const t = useTranslations();

  function onFinish() {}

  return (
    <div
      className={`mt-[91px] bg-[#F5F5F5] rounded-[24px] md:p-10 p-6 text-[#282828] ${className}`}
    >
      <h1 className="text-[#262626] md:text-[32px] md:leading-8 text-[20px] leading-5 font-semibold text-center md:mb-8 mb-6">
        {t("OnlineQuestionnaire.formTitle")}
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-[#262626] text-[20px] leading-6 font-semibold">
            {t("OnlineQuestionnaire.subTitle1")}
          </h2>
        </div>
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
        <Input
          placeholder={t("CalculateCredit.phoneNumber") + "*"}
          value=""
          onChange={() => {}}
        />
        <div className="md:col-span-2">
          <h2 className="text-[#262626] text-[20px] leading-6 font-semibold">
            {t("OnlineQuestionnaire.subTitle2")}
          </h2>
        </div>
        <Input
          placeholder={t("OnlineQuestionnaire.desiredLoanAmount")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.loanTerm")}
          value=""
          onChange={() => {}}
        />
        <TextArea
          placeholder={t("OnlineQuestionnaire.creditGoal")}
          value=""
          onChange={() => {}}
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <h2 className="text-[#262626] text-[20px] leading-6 font-semibold">
            {t("OnlineQuestionnaire.subTitle3")}
          </h2>
        </div>
        <Input
          placeholder={t("OnlineQuestionnaire.birthdate")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.passportSeries")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.passportNumber")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.passportIssueDate")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.issuingAuthority")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.address")}
          value=""
          onChange={() => {}}
        />
        <div className="md:col-span-2">
          <h2 className="text-[#262626] text-[20px] leading-6 font-semibold">
            {t("OnlineQuestionnaire.subTitle4")}
          </h2>
        </div>
        <Input
          placeholder={t("OnlineQuestionnaire.placeOfWork")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.jobtitle")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.jobposition")}
          value=""
          onChange={() => {}}
        />
        <Input
          placeholder={t("OnlineQuestionnaire.monthlyIncome")}
          value=""
          onChange={() => {}}
        />
        <div className="md:col-span-2 grid">
          <ButtonFon onClick={() => onFinish()}>
            {t("buttons.submitAnApplication")}
          </ButtonFon>
        </div>
        <div className="md:col-span-2">
          <p className="text-[#7B7B84] text-[16px] leading-6 text-center">
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
