import { getCurrencyRate } from "@/api/main-page/currency-rate";
import { CurrencyRateT } from "@/types/main-page/ui/types";
import React, { useLayoutEffect, useState } from "react";

function CurrencyRate() {
  const [currencyRate, setCurrencyRate] = useState<CurrencyRateT | null>(null);

  const getRate = async () => {
    const data: CurrencyRateT | null = await getCurrencyRate();
    setCurrencyRate(data);
  };

  useLayoutEffect(() => {
    getRate();
  }, []);

  return <div>CurrencyRate</div>;
}

export default CurrencyRate;
