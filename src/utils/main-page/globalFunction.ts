export function addZero(num: string | number) {
  if (+num > 9) return num;
  else return `0${num}`;
}

export function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function currencyRateFormater(num: number | string | null) {
  switch (typeof num) {
    case "string": {
      return (+num).toFixed(4) + "";
    }
    case "number": {
      return num.toFixed(4) + "";
    }
    default: {
      return 0;
    }
  }
}

export function calculateAnnuityPayment(
  principal: number, // сумма кредита
  annualRate: number, // годовая ставка в процентах (например 18 для 18%)
  months: number // количество месяцев
): number {
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal / months;
  }

  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return Math.round(payment); // округляем до целого
}
