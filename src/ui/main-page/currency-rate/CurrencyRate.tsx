"use client";
import { getCurrencyRate } from "@/api/main-page/currency-rate";
import { rateDown, rateUp } from "@/constants/main-page/icons";
import { CurrencyRateT, rate } from "@/types/main-page/ui/types";
import { Avatar } from "antd";

import { useEffect, useLayoutEffect, useState } from "react";
import CurrencyInput from "../input/CurrencyInput";
import { defaultRateTJ } from "@/constants/main-page/home-page";
import { addZero } from "@/utils/main-page/globalFunction";
import { useTranslations } from "next-intl";

type TypeT = "exchange" | "transfer" | "card";
type SaleT = "purchase" | "sale";

const currenyText = { "810": "Росс. Рубль", "840": "Долл. США", "978": "Евро" };

function countCurrency(
  c1: number,
  c2: number | null | undefined,
  c3: number | null | undefined
) {
  return +((c1 * (c2 || 0)) / (c3 || 0)).toFixed(2);
}

function CurrencyRate() {
  const t = useTranslations();
  const [sale, setSale] = useState<SaleT>("sale");
  const [type, setType] = useState<TypeT>("exchange");
  const [currencyRate, setCurrencyRate] = useState<CurrencyRateT | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  // calculatorStates
  const [recive, setRecive] = useState<number>(100);
  const [pay, setPay] = useState<number>(0);
  const [reciveCurrency, setReciveCurrency] = useState<rate | null>(null);
  const [payCurrency, setPayCurrency] = useState<rate | null>(defaultRateTJ);

  const activeClass = "border-[#3980A0] text-[#3980A0]";
  const disactiveClass = "border-[#8C8C8C] text-[#8C8C8C]";

  function currencyCode(rate: rate) {
    const sale_: {
      sale: "purchase";
      purchase: "sale";
    } = {
      sale: "purchase",
      purchase: "sale",
    };

    switch (rate.currency_num) {
      case "1": {
        return rate?.[`${type}_${sale_[sale]}`]; //sale_[sale];
      }
      default: {
        return rate?.[`${type}_${sale}`];
      }
    }
  }
  const getRate = async () => {
    const data: CurrencyRateT | null = await getCurrencyRate();
    const date = new Date();
    const time = `${addZero(date.getDate())}-${addZero(
      date.getMonth() + 1
    )}-${date.getFullYear()} ${addZero(date.getHours())}:${addZero(
      date.getMinutes()
    )}:${addZero(date.getSeconds())}`;
    setCurrentTime(time);
    if (data?.rates) {
      const body = {
        ...data,
        rates: [
          ...data?.rates?.filter(
            (el) =>
              el.wallet_purchase &&
              ["840", "810", "978"].includes(el.currency_num)
          ),
          defaultRateTJ,
        ],
      };
      setCurrencyRate(body);
      console.log(body.rates?.[0]?.[`${type}_${sale}`]);
      const reciveCurrency = body.rates?.[0];
      setReciveCurrency(reciveCurrency);
      setPay(countCurrency(recive, reciveCurrency?.[`${type}_${sale}`], 1));
    } else {
      setCurrencyRate(data);
    }
  };

  const reciveItems = currencyRate?.rates
    ? [
        ...currencyRate?.rates?.map((el) => ({
          key: el.country_code,
          onClick: () => {
            let currentPay = payCurrency;
            if (
              el?.country_code === payCurrency?.country_code ||
              (el?.country_code !== defaultRateTJ?.country_code &&
                payCurrency?.country_code !== defaultRateTJ?.country_code)
            ) {
              setPayCurrency(reciveCurrency);
              currentPay = reciveCurrency;
            }
            setReciveCurrency(el);
            setPay(
              countCurrency(
                recive,
                el?.[`${type}_${sale}`],
                currentPay?.[`${type}_${sale}`]
              )
            );
          },
          label: (
            <button
              className={`md:text-[16px] text-[18px] text-center w-full ${
                el.country_code === reciveCurrency?.country_code
                  ? "text-[#3980A0]"
                  : ""
              }`}
            >
              {el.currency_char_code}
            </button>
          ),
        })),
      ]
    : [];

  const payItems = currencyRate?.rates
    ? [
        ...currencyRate?.rates?.map((el) => ({
          key: el.country_code,
          onClick: () => {
            let currentRecive = reciveCurrency;
            if (
              el?.country_code === reciveCurrency?.country_code ||
              (el?.country_code !== defaultRateTJ?.country_code &&
                reciveCurrency?.country_code !== defaultRateTJ?.country_code)
            ) {
              setReciveCurrency(payCurrency);
              currentRecive = payCurrency;
            }
            setPayCurrency(el);
            setRecive(
              countCurrency(
                pay,
                el?.[`${type}_${sale}`],
                currentRecive?.[`${type}_${sale}`]
              )
            );
          },
          label: (
            <button
              className={`md:text-[16px] text-[18px] text-center w-full ${
                el.country_code === payCurrency?.country_code
                  ? "text-[#3980A0]"
                  : ""
              }`}
            >
              {el.currency_char_code}
            </button>
          ),
        })),
      ]
    : [];

  useLayoutEffect(() => {
    getRate();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (type && sale) {
      setPay(
        countCurrency(
          recive,
          reciveCurrency?.[`${type}_${sale}`],
          payCurrency?.[`${type}_${sale}`]
        )
      );
    }
    // eslint-disable-next-line
  }, [type, sale]);

  return (
    <div className="container">
      <div className="flex justify-between items-end mb-[11px]">
        <ul className="flex text-[14px]">
          <li
            className={`pb-[12px] px-[12px] border-b cursor-pointer ${
              type === "exchange" ? activeClass : disactiveClass
            }`}
            onClick={() => setType("exchange")}
          >
            {"Касса"}
          </li>
          <li
            className={`pb-[12px] px-[12px] border-b cursor-pointer ${
              type === "transfer" ? activeClass : disactiveClass
            }`}
            onClick={() => setType("transfer")}
          >
            {"Кошелёк"}
          </li>
          {/* <li
            className={`pb-[12px] px-[12px] border-b cursor-pointer ${
              type === "3" ? activeClass : disactiveClass
            }`}
            onClick={() => setType("3")}
          >
            {"Денежные переводы"}
          </li> */}
          <li
            className={`pb-[12px] px-[12px] border-b cursor-pointer ${
              type === "card" ? activeClass : disactiveClass
            }`}
            onClick={() => setType("card")}
          >
            {"Карта"}
          </li>
        </ul>
        <p className="text-[16px] md:block hidden">{currentTime}</p>
      </div>
      <div className="grid xl:grid-cols-[2fr_1fr] gap-6">
        <div className="bg-[#F5F5F5] md:rounded-[40px] rounded-3xl md:p-10 p-[24px_16px] text-center">
          <div className="grid sm:grid-cols-4 grid-cols-[1.5fr_1fr_1fr] md:text-[14px] text-[12px] text-[#8C8C8C] md:gap-[22px] gap-[20px] mb-4">
            <p className="md:ml-[44px] ml-[36] text-left">Валюта</p>
            <p className="sm:block hidden">Курс НБТ</p>
            <p>Покумка</p>
            <p>Продажа</p>
          </div>
          <div className="overflow-x-hidden grid md:gap-6 gap-[20px] md:max-h-[213px]">
            {currencyRate?.rates
              ?.filter((el) => ["840", "810", "978"].includes(el.currency_num))
              ?.map((el) => {
                const nbt = (
                  <>
                    {el.nbt}
                    {el.nbt - el.nbt_difference > 0 ? rateUp : rateDown}
                  </>
                );
                const purchase = (
                  <>
                    {el?.[`${type}_purchase`]}
                    {el?.[`${type}_purchase`]
                      ? el?.[`${type}_purchase`] -
                          el?.[`${type}_purchase_difference`] >
                        0
                        ? rateUp
                        : rateDown
                      : ""}
                  </>
                );
                const sale = (
                  <>
                    {el?.[`${type}_sale`]}
                    {el?.[`${type}_sale`]
                      ? el?.[`${type}_sale`] - el?.[`${type}_sale_difference`] >
                        0
                        ? rateUp
                        : rateDown
                      : ""}
                  </>
                );
                return (
                  <div
                    key={el.country_code}
                    className="grid sm:grid-cols-4 grid-cols-[1.5fr_1fr_1fr] text-[14px] text-[#8C8C8C] md:gap-[22px] gap-[20px] items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="md:block hidden">
                        <Avatar src={el.country_flag_url} size={32} />
                      </div>
                      <div className="block md:hidden">
                        <Avatar src={el.country_flag_url} size={24} />
                      </div>
                      <div className="text-left sm:text-nowrap">
                        <p className="md:text-[20px] text-[16px] font-semibold mb-[4px] text-[#262626]">
                          {el.currency_char_code}
                        </p>
                        <p>{currenyText?.[el.currency_num]}</p>
                      </div>
                    </div>
                    <p className="md:text-[20px] text-[16px] font-semibold text-[#262626] md:flex hidden items-center gap-1 justify-center">
                      {nbt}
                    </p>
                    <p className="md:text-[20px] text-[16px] font-semibold text-[#262626] flex items-center gap-1 justify-center">
                      {purchase}
                    </p>
                    <p className="md:text-[20px] text-[16px] font-semibold text-[#262626] flex items-center gap-1 justify-center">
                      {sale}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="bg-[#F5F5F5] md:rounded-[40px] rounded-3xl md:p-10 p-[24px_16px] flex flex-col gap-6">
          <ul className="flex">
            <li
              className={`pb-[8px] px-[12px] border-b cursor-pointer ${
                sale === "sale" ? activeClass : disactiveClass
              }`}
              onClick={() => {
                setSale("sale");
              }}
            >
              {"Купить"}
            </li>
            <li
              className={`pb-[8px] px-[12px] border-b cursor-pointer ${
                sale === "purchase" ? activeClass : disactiveClass
              }`}
              onClick={() => {
                setSale("purchase");
              }}
            >
              {"Продать"}
            </li>
          </ul>
          <CurrencyInput
            label={sale === "sale" ? "Получу" : "Заплачу"}
            value={recive}
            items={reciveItems}
            currency={reciveCurrency?.currency_char_code || ""}
            onChange={(e) => {
              setRecive(+e.target.value);
              setPay(
                countCurrency(
                  +e.target.value,
                  reciveCurrency?.[`${type}_${sale}`],
                  payCurrency?.[`${type}_${sale}`]
                )
              );
            }}
          />
          <CurrencyInput
            label={sale !== "sale" ? "Получу" : "Заплачу"}
            // disabled={true}
            value={pay}
            items={payItems}
            currency={payCurrency?.currency_char_code || ""}
            onChange={(e) => {
              setPay(+e.target.value);
              setRecive(
                countCurrency(
                  +e.target.value,
                  payCurrency?.[`${type}_${sale}`],
                  reciveCurrency?.[`${type}_${sale}`]
                )
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrencyRate;
