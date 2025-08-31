import { StaticImageData } from "next/image";

export interface SectionInfoT {
  title: string;
  description: string;
  img: StaticImageData;
  className?: string;
  textMaxWidth?: string;
}
