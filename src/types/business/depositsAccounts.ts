import { StaticImageData } from "next/image";

export interface DepositsAccountsT {
  title: string;
}
interface content {
  label: string;
  value: string;
}
export interface DepositsAccountT {
  title: string;
  img: StaticImageData;
  contents: content[];
  translation: string;
  calssName?: string;
  button: {
    title: string;
    action: () => void;
  };
  detail?: {
    title: string;
    action: () => void;
  };
}
