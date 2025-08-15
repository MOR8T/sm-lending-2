import { DepositsAccountT } from "@/types/business/depositsAccounts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function DepositsAccount({
  img,
  title,
  contents,
  button,
  detail,
  translation,
  calssName,
}: DepositsAccountT) {
  const t = useTranslations(translation);
  return (
    <div
      className={`flex md:flex-row flex-col md:gap-[88px] md:px-[0] px-[22px] items-center bg-[#F7F8F9] rounded-[28px] ${calssName}`}
    >
      <div>
        <Image src={img} className="h-[171px] w-[276px] md:h-[360px] md:w-[400px]" alt="img-account" />
      </div>
      <div className="md:h-[232px] flex flex-col gap-[32px] w-full md:w-auto">
        <div className="flex flex-col md:gap-[32px]">
          <h1 className="text-[22px] leading-[28px] md:text-[30px] md:leading-[38px]">
            {title}
          </h1>
          <div className="flex md:flex-row flex-col md:gap-[63px] gap-[16px] md:mt-auto mt-[24px]">
            {contents.map((e, i) => (
              <div
                key={i}
                className="md:flex-1 flex md:flex-col flex-row items-center justify-between md:w-auto w-full"
              >
                <h1 className="whitespace-nowrap text-base md:text-sm text-[16px] font-normal text-[#222222]">
                  {t(e.label)}
                </h1>
                <p className="headRegular whitespace-nowrap text-[22px] leading-[28px] font-normal">
                  {t(e.value)}
                </p>
              </div>
            ))}
          </div>
          <hr
            style={{ color: "rgb(232, 247, 235)" }}
            className="hidden md:block"
          ></hr>
          <div className="flex items-center md:flex-row flex-col md:w-auto md:mt-0 mt-[40px] md:pb-0 pb-[32px] w-full">
            <button
              className="bg-[#00AF66] cursor-pointer md:w-auto w-full group grid grid-flow-col items-center justify-center outline-none duration-150 md:mr-6 md:block py-[14px] px-[23.8px] text-base leading-5 gap-1 bg-green text-white hover:bg-green-90 active:bg-green-100 disabled:bg-grey disabled:text-darkGrey rounded-lg"
              onClick={button.action}
            >
              {button.title}
            </button>
            {detail?.action && (
              <button
                className="md:mt-4.2 mt-[24px] cursor-pointer  md:w-auto w-full font-normal text-base text-[#00AF66] text-center md:mt-0"
                onClick={detail.action}
              >
                {detail.title}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
