import { StaticImageData } from "next/image";

export interface cardsT {
  cards: { title: string; subTitle: string, img: StaticImageData }[];
}
