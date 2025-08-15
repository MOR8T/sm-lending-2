"use client";
import { DepositsAccountsT } from "@/types/business/depositsAccounts";
import React from "react";
import DepositsAccount from "./DepositsAccount";
import { useTranslations } from "next-intl";
import depositsAccountImg1 from "@/../public/icons/depositsAccountImg1.svg";
import depositsAccountImg2 from "@/../public/icons/depositsAccountImg2.svg";
import depositsAccountImg3 from "@/../public/icons/depositsAccountImg3.svg";
import depositsAccountImg4 from "@/../public/icons/depositsAccountImg4.svg";
import { depositsAccountContents1, depositsAccountContents3 } from "@/constants/business/const";

export default function DepositsAccounts({ title }: DepositsAccountsT) {
  const t = useTranslations("depositsAccounts");
  return (
    <div>
      <h1 className=" md:display2 md:my-[48px] my-[24px] md:text-[40px] md:leading-[51px] text-[30px] leading-[38px]">
        {title}
      </h1>
      <section>
        <DepositsAccount
          title={t("depositsAccount1.title")}
          img={depositsAccountImg1}
          contents={depositsAccountContents1}
          translation="depositsAccounts.depositsAccount1"
          button={{ title: t("buttons.openContribution"), action: () => {} }}
          detail={{ title: t("buttons.detail"), action: () => {} }}
        />
         <DepositsAccount
          title={t("depositsAccount1.title")}
          img={depositsAccountImg2}
          contents={depositsAccountContents1}
          translation="depositsAccounts.depositsAccount1"
          button={{ title: t("buttons.openContribution"), action: () => {} }}
          detail={{ title: t("buttons.detail"), action: () => {} }}
        />
         <DepositsAccount
          title={t("depositsAccount3.title")}
          img={depositsAccountImg3}
          contents={depositsAccountContents3}
          translation="depositsAccounts.depositsAccount3"
          button={{ title: t("buttons.openContribution"), action: () => {} }}
          detail={{ title: t("buttons.detail"), action: () => {} }}
          calssName="!bg-[#343D52] !text-[#fff]"
        />
         <DepositsAccount
          title={t("depositsAccount1.title")}
          img={depositsAccountImg4}
          contents={depositsAccountContents1}
          translation="depositsAccounts.depositsAccount1"
          button={{ title: t("buttons.openContribution"), action: () => {} }}
          detail={{ title: t("buttons.detail"), action: () => {} }}
          calssName="!bg-[#F4FBF9]"
        />
        
      </section>
    </div>
  );
}
