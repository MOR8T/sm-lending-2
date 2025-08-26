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
