import businessCardsImg1 from "@/../public/icons/businessCardsImg1.svg";
import businessCardsImg2 from "@/../public/icons/businessCardsImg2.svg";
import businessCardsImg3 from "@/../public/icons/businessCardsImg3.svg";
import ServicesSectionImg1 from "@/../public/icons/ServicesSectionImg1.svg";
import ServicesSectionImg2 from "@/../public/icons/ServicesSectionImg2.svg";
import ServicesSectionImg3 from "@/../public/icons/ServicesSectionImg3.svg";
import ServicesSectionImg4 from "@/../public/icons/ServicesSectionImg4.svg";
import { stylesServicesSectionT } from "@/types/business/cards";

export const businessCards1 = [
  {
    title: "title1",
    subTitle: "subTitle1",
    img: businessCardsImg1,
  },
  {
    title: "title2",
    subTitle: "subTitle2",
    img: businessCardsImg2,
  },
  {
    title: "title3",
    subTitle: "subTitle3",
    img: businessCardsImg3,
  },
];

export const stylesServicesSection: stylesServicesSectionT = {
  0: {
    div: "col-start-1 col-end-2 row-start-1 row-end-2 bg-[#F7F8F9]",
    h1: "",
    h2: "",
    img: "",
  },
  1: {
    div: "col-start-2 col-end-4 row-start-1 row-end-2 bg-[#F4F8FB]",
    h1: "w-[220px]",
    h2: "w-[291px]",
    img: "right-0 !w-[393px]",
  },
  2: {
    div: "col-start-3 col-end-4 row-start-2 row-end-3 bg-[#F7F8F9]",
    h1: "",
    h2: "",
    img: "",
  },
  3: {
    div: "col-start-1 col-end-3 row-start-2 row-end-3 bg-[#DAE6F8]",
    h1: "w-[209px]",
    h2: "w-[278px]",
    img: "right-0 !w-[393px]",
  },
};
export const businessCards2 = [
  {
    title: `Облегчим работу \n бухгалтера`,
    subTitle: `Ваш бухгалтер начислит зарплату без \nлишних бумаг и усилий`,
    img: ServicesSectionImg1,
  },
  {
    title: `Работайте с любого \n устройства`,
    subTitle: `Пользуйтесь интернет-банкингом в \nлюбом браузере даже через телефон`,
    img: ServicesSectionImg2,
  },
  {
    title: `Следите с любой точки \n Земли`,
    subTitle: `Управляйте прогрессом вашего \nбизнеса, где бы вы ни находились`,
    img: ServicesSectionImg3,
  },
  {
    title: `Следите с любой точки \n Земли`,
    subTitle: `Управляйте прогрессом вашего \nбизнеса, где бы вы ни находились`,
    img: ServicesSectionImg4,
  },
];
