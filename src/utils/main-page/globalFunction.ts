export function addZero(num: string | number) {
  if (+num > 9) return num;
  else return `0${num}`;
}
