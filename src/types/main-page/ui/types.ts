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
  h1: { width: string; color: string };
  p: { width: string; color: string };
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

export interface InfoNavicationBannerT {
  img: StaticImageData;
  title: string;
  description: string;
  href: string;
  linkText:string;
}

export interface rate {
  nbt: number;
  nominal: number;
  card_sale: null | number;
  wallet_sale: null | number;
  currency_num: string;
  card_purchase: null | number;
  exchange_sale: null | number;
  transfer_sale: null | number;
  nbt_difference: number;
  wallet_purchase: null | number;
  exchange_purchase: null | number;
  transfer_purchase: null | number;
  currency_char_code: string;
  card_sale_difference: number;
  wallet_sale_difference: number;
  card_purchase_difference: number;
  exchange_sale_difference: number;
  transfer_sale_difference: number;
  wallet_purchase_difference: number;
  exchange_purchase_difference: number;
  transfer_purchase_difference: number;
  country_code: string;
  country_flag_url: string;
}

export interface CurrencyRateT {
  date: string;
  base_flag_url: string;
  rates: rate[];
}