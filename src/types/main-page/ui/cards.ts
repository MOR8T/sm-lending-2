import { StaticImageData } from "next/image";

export interface OneMainPCardT {
  title: string;
  subTitle: string;
  img: StaticImageData;
  href: string;
}

export interface MainPCardsT {
  cards: OneMainPCardT[];
  translation?: string;
}

export interface OneNewsCardT {
  title: string;
  subTitle: string;
  date: string;
  href: string;
}

export interface NewsCardsT {
  cards: OneNewsCardT[];
}

export interface InfoCardsT {
  data: {
    title: string;
    description: string;
    title1: string;
    subTitle1: string;
    title2: string;
    subTitle2: string;
    title3: string;
    subTitle3: string;
    img?: StaticImageData;
  }[];
  className?: string;
  title: string;
}

export interface MoneyTrasferCardsT {
  data: { img: string; title: string; description: string }[];
  className?: string;
  title: string;
}