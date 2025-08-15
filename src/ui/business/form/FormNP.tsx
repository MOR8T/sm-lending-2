import { FormNPT } from "@/types/business/formNP";
import React from "react";
import InputForm from "./InputForm";
import { useTranslations } from "next-intl";
import { TextWithDollarLinks } from "./FormaterLink";

export default function FormNP({
  translation,
  urlREQ,
  data,
  setData,
  title,
  subTitle,
  inputs,
  buttonSend,
  rulesOfUse
}: FormNPT) {
  const t = useTranslations(translation);
  const onChange = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };
  return (
    <div className=" container flex md:flex-row flex-col md:gap-[127px] gap-[24px] h-auto md:!p-[96px] !py-[40px] !px-[20px]">
      <div className=" flex flex-col md:gap-[17px] gap-[16px] md:w-[365px]">
        <h1 className="md:head1 md:text-[38px] text-[22px] md:leading-[38px] leading-[28px] md:text-left text-center  font-bold text-[#FFFFFF]">
          {title}
        </h1>
        <h2 className="md:bodyBig mb-4.2 text-[#FFFFFF] md:text-left text-center md:text-[18px] md:leading-[24px] text-[16px] leading-[20px]">{subTitle}</h2>
      </div>
      <div className="md:max-w-[456px] w-full">
        {inputs.map((e, i) => (
          <InputForm
            key={i}
            title={t(e.label)}
            keyID={e.key}
            onChange={onChange}
            value={data?.[e.key]}
          />
        ))}
        <div className="flex md:flex-row  flex-col md:gap-[32px] gap-[24px] md:items-center">
          <button
            onClick={buttonSend.action}
            className=" bg-[#00AF66] group grid grid-flow-col items-center justify-center outline-none duration-150 py-3 px-5 font-family-bold text-lg leading-5.8 gap-2 bg-green text-white hover:bg-green-90 active:bg-green-100 disabled:bg-grey disabled:text-darkGrey w-full md:w-auto rounded-lg"
          >
            {buttonSend.title}
          </button>
          <TextWithDollarLinks text={rulesOfUse} />
        </div>
      </div>
    </div>
  );
}
  