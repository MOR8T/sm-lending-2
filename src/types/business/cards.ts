import { StaticImageData } from "next/image";

export interface CardsT {
  cards: { title: string; subTitle: string; img: StaticImageData }[];
  translation?: string;
}

export interface ServicesSectionT extends CardsT {
  title: string;
  typeStyleBox: 1 | 2
}

export interface stylesServicesSectionT {
  [key: number]: { div: string; h1: string; h2: string; img: string, imgDiv: string };
}
