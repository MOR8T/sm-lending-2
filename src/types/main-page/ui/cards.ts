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
