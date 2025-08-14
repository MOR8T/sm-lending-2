import { ItemType } from "antd/es/menu/interface";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface DropdownUIT {
  text: string;
  items: ItemType[];
}

export interface BannerButtonT {
  className?: string;
  // eslint-disable-next-line
  style: any;
  children: ReactNode;
}

export interface oneBannerData {
  key: string;
  onClick: () => void;
  title: string;
  description: string;
  textColor: string;
  button: {
    text: string;
    bgColor: string;
    color: string;
  };
  img: {
    src: string | StaticImageData;
    alt: string;
  };
  bgColor: string;
}

export interface BannerTtype {
  spaceBetween?: number;
  slidesPerView?: number;
  items: oneBannerData[];
}

export interface ServiceCardT {
  img: StaticImageData;
  text: string;
  href: string;
}

export interface serviceItemT extends ServiceCardT {
  key: string;
}

export interface ServiceCardsT {
  translation?: string;
  items: serviceItemT[];
}
