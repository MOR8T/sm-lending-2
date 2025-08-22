import { useState } from "react";
import Items from "../items/Items";
import ShowInfo from "../showInfo/ShowInfo";
import ButtonFon from "../buttons/ButtonFon";
import CreditSlider from "../slider/CreditSlider";
import { formatNumber } from "@/utils/main-page/globalFunction";
import CreditSelect from "../select/CreditSelect";
import CreditModal from "../modals/CreditModal";
import CreditSuccessModal from "../modals/CreditSuccessModal";

type CreditTypeT = "personal" | "business";
const maxMoney = {
  personal: 250000,
  business: 500000,
};

const creditsOption = {
  personal: [
    {
      label: "Заррини аҷоиб (26-28)",
      maxMoney: 250000,
      maxMonth: 24,
      precent: "",
    },
    {
      label: "Заррини (26% TSJ - 20% USD)",
      maxMoney: 250000,
      maxMonth: 36,
      precent: "",
    },
    {
      label: "Амонат (24% TSJ - 18% USD - 24% RUB)",
      maxMoney: 250000,
      maxMonth: 36,
      precent: "",
    },
    {
      label: "Дастгирӣ (20-26% TJS / 20-26% USD)",
      maxMoney: 250000,
      maxMonth: 36,
      precent: "",
    },
    {
      label: "Молҳо ба кредит (насия) (22%)",
      maxMoney: 10000,
      maxMonth: 18,
      precent: "",
    },
    {
      label: "Ҳамсафари мо (28)",
      maxMoney: 200000,
      maxMonth: 24,
      precent: "",
    },
    {
      label: "Лаҳза (Овердрафт)",
      maxMoney: 0,
      maxMonth: 3,
      precent: "",
    },
  ],
  business: [],
};

export default function CalculateCredit() {
  const [type, setType] = useState<CreditTypeT>("personal");
  const [money, setMoney] = useState(10000);
  const [month, setMonth] = useState(6);
  const [creditType, setCreditType] = useState("");
  return (
    <div className="container">
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
              label: "Физ. лица",
              value: "personal",
            },
            {
              label: "Юр. лица",
              value: "business",
            },
          ]}
        />
      </div>
      <div className="bg-[#F5F5F5] text-[#141414] md:rounded-[40px] rounded-3xl md:p-10 p-[24px] grid xl:grid-cols-[2fr_1fr] gap-[60px]">
        <div className="grid gap-8">
          <div>
            <CreditSelect
              value={creditType}
              items={creditsOption?.["personal"].map((el) => {
                return {
                  onClick: () => {
                    setCreditType(el.label);
                  },
                  key: el.label,
                  label: (
                    <button
                      className={`md:text-[16px] text-[18px] text-left w-full ${
                        creditType === "type" ? "text-[#3980A0]" : ""
                      }`}
                    >
                      {el.label}
                    </button>
                  ),
                };
              })}
              label="Тип кредита"
            />
          </div>
          <CreditSlider
            value={money}
            onChange={(e) => setMoney(e)}
            label="Сумма кредита"
            unit="TJS"
            unit2="сомони"
            max={maxMoney[type]}
            min={1000}
            step={1000}
          />
          <CreditSlider
            value={month}
            onChange={(e) => setMonth(e)}
            label="Срок кредита"
            unit="месяцев"
            unit2="месяца"
            max={36}
            min={1}
            step={1}
          />
        </div>
        <div className="grid gap-6">
          <div className="xl:grid xl:grid-cols-2 flex flex-wrap justify-between grid-flow-row-dense gap-x-6 gap-y-[42px] pt-8">
            <ShowInfo
              label="Ежемесячный платеж"
              value={`${formatNumber(1034)} сомони`}
              className="xl:col-span-2"
            />
            <ShowInfo label="Вам понадобится" value="Паспорт РТ" />
            <ShowInfo label="Вероятность одобрения" value="+50%" />
            <ShowInfo
              label="Сумма кредита"
              value={`${formatNumber(money)} сомони`}
            />
            <ShowInfo label="Срок кредита" value={`${month} месяцев`} />
          </div>
          <ButtonFon className="w-full">Оформить онлайн</ButtonFon>
        </div>
      </div>
      <CreditModal options={creditsOption.personal} />
      <CreditSuccessModal />
    </div>
  );
}
