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
