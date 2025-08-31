"use client";
import { useState } from "react";
import Items from "../items/Items";
import ShowInfo from "../showInfo/ShowInfo";
import ButtonFon from "../buttons/ButtonFon";
import CreditSlider from "../slider/CreditSlider";
import {
  calculateAnnuityPayment,
  formatNumber,
} from "@/utils/main-page/globalFunction";
import CreditSelect from "../select/CreditSelect";
import CreditModal from "../modals/CreditModal";
import CreditSuccessModal from "../modals/CreditSuccessModal";
import { useTranslations } from "next-intl";

type CreditTypeT = "personal" | "business";
const maxMoney = {
  personal: 250000,
  business: 500000,
};

const creditsOption = {
  personal: [
    {
      label: "Заррини аҷоиб (26%)",
      maxMoney: 250000,
      maxMonth: 24,
      precent: 26,
    },
    {
      label: "Заррини (26%)",
      maxMoney: 250000,
      maxMonth: 36,
      precent: 26,
    },
    {
      label: "Амонат (24%)",
      maxMoney: 250000,
      maxMonth: 36,
      precent: 24,
    },
    {
      label: "Дастгирӣ (20%)",
      maxMoney: 250000,
      maxMonth: 36,
      precent: 20,
    },
    {
      label: "Молҳо ба кредит (насия) (22%)",
      maxMoney: 10000,
      maxMonth: 18,
      precent: 22,
    },
    {
      label: "Ҳамсафари мо (28%)",
      maxMoney: 200000,
      maxMonth: 24,
      precent: 28,
    },
    {
      label: "Лаҳза (Овердрафт)",
      maxMoney: 0,
      maxMonth: 3,
      precent: 0,
    },
  ],
  business: [],
};

export default function CalculateCredit({
  isPersonal = true,
  isBusiness = true,
}: {
  isPersonal?: boolean;
  isBusiness?: boolean;
}) {
  const t = useTranslations();
  const [type, setType] = useState<CreditTypeT>(
    isPersonal ? "personal" : "business"
  );
  const [money, setMoney] = useState(10000);
  const [month, setMonth] = useState(6);
  const [creditType, setCreditType] = useState<{
    label: string;
    maxMoney: number;
    maxMonth: number;
    precent: number;
  } | null>(null);
  const [formModal, setFormModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  return (
    <div className="container">
      {isPersonal && isBusiness ? (
        <div className="mb-[12px]">
          <Items
            value={type}
            onChange={(t) => {
              setType(t as CreditTypeT);
              if (money > maxMoney[t as CreditTypeT])
                setMoney(maxMoney[t as CreditTypeT]);
            }}
            items={[
              {
                label: t("CalculateCredit.personal"),
                value: "personal",
              },
              {
                label: t("CalculateCredit.business"),
                value: "business",
              },
            ]}
          />
        </div>
      ) : null}
      <div className="bg-[#F5F5F5] text-[#141414] md:rounded-[40px] rounded-3xl md:p-10 p-[24px] grid xl:grid-cols-[2fr_1fr] md:gap-[60px] gap-6">
        <div className="grid gap-8">
          <div>
            <CreditSelect
              value={creditType?.label || ""}
              items={creditsOption?.["personal"].map((el) => {
                return {
                  onClick: () => {
                    setCreditType(el);
                  },
                  key: el.label,
                  label: (
                    <button
                      className={`md:text-[16px] text-[18px] text-left w-full ${
                        creditType?.label === el.label ? "text-[#3980A0]" : ""
                      }`}
                    >
                      {el.label}
                    </button>
                  ),
                };
              })}
              label={t("CalculateCredit.creditType")}
            />
          </div>
          <CreditSlider
            value={money}
            onChange={(e) => setMoney(e)}
            label={t("CalculateCredit.monthlyPayment")}
            unit="TJS"
            unit2={t("CalculateCredit.somoni")}
            max={maxMoney[type]}
            min={1000}
            step={1000}
          />
          <CreditSlider
            value={month}
            onChange={(e) => setMonth(e)}
            label={t("CalculateCredit.loanTerm")}
            unit={t("CalculateCredit.theMonth")}
            unit2={t("CalculateCredit.theMonth")}
            max={36}
            min={1}
            step={1}
          />
        </div>
        <div className="flex flex-col gap-6 justify-between">
          <div className="xl:grid xl:grid-cols-2 flex md:flex-row flex-col flex-wrap justify-between grid-flow-row-dense gap-x-6 md:gap-y-[42px] gap-y-6 pt-8">
            <ShowInfo
              label={t("CalculateCredit.monthlyPayment")}
              value={`${calculateAnnuityPayment(
                money,
                creditType?.precent || 0,
                month
              )} ${t("CalculateCredit.somoni")}`}
              className="xl:col-span-2"
            />
            <ShowInfo
              label={t("CalculateCredit.youNeed")}
              value={t("CalculateCredit.pasportRT")}
            />
            {/* <ShowInfo
              label={t("CalculateCredit.probabilityOfOpproval")}
              value="+50%"
            /> */}
            <ShowInfo
              label={t("CalculateCredit.summOfCredit")}
              value={`${formatNumber(money)} ${t("CalculateCredit.somoni")}`}
            />
            <ShowInfo
              label={t("CalculateCredit.loanTerm")}
              value={`${month} ${t("CalculateCredit.theMonth")}`}
            />
          </div>
          <ButtonFon
            onClick={() => setFormModal(true)}
            className="w-full p-[16px_4px] grid place-content-center"
          >
            {t("CalculateCredit.applyOnline")}
          </ButtonFon>
        </div>
      </div>
      <CreditModal
        open={formModal}
        setOpen={setFormModal}
        options={creditsOption.personal}
        onFinish={() => {
          setFormModal(false);
          setSuccessModal(true);
        }}
      />
      <CreditSuccessModal open={successModal} setOpen={setSuccessModal} />
    </div>
  );
}
