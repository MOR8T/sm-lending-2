export function addZero(num: string | number) {
  if (+num > 9) return num;
  else return `0${num}`;
}

export function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
