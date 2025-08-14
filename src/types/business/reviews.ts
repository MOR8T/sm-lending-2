import { StaticImageData } from "next/image";

interface item {
  message: string;
  company: {
    icon: StaticImageData;
    title: string;
    subTitle: string;
  };
}

export interface ReviewsT {
  items: item[];
}
