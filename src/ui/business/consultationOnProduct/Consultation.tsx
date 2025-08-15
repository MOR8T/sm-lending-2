"use client";
import React, { useState } from "react";
import FormNP from "../form/FormNP";
import { FromDataT } from "@/types/business/formNP";
import { useTranslations } from "use-intl";
import { inputsFromConsultation } from "@/constants/business/const";

export default function Consultation() {
  const t = useTranslations();
  const [data, setData] = useState<FromDataT>();

  return (
    <div className="w-full bg-[#343D52] md:mt-[120px] mt-[60px]">
      <FormNP
        translation="form"
        data={data}
        setData={setData}
        title={t("form.consultation.title")}
        subTitle={t("form.consultation.subTitle")}
        urlREQ="consultation/"
        inputs={inputsFromConsultation}
        buttonSend={{ action: () => {}, title: t("buttons.send") }}
        rulesOfUse="Бо (шартҳои коркарди маълумоти шахсиям ):https://example.com/ розӣ ҳастам."
      />
    </div>
  );
}
