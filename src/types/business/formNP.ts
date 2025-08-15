export interface FromDataT {
  [key: string]: string;
}
interface input {
  label: string;
  key: string;
}
export interface FormNPT {
  translation: string;
  title: string;
  subTitle: string;
  urlREQ: string;
  data?: FromDataT;
  setData: (item: FromDataT) => void;
  inputs: input[];
  buttonSend: {
    title: string,
    action: () => void
  },
  rulesOfUse: string

}
export interface InputFromT {
  keyID: string;
  title: string;
  onChange: (key: string, value: string) => void;
  placeholder?: string;
  value?: string;
  error?: { [key: string]: string };
}
