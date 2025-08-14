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
    div: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 h-[212px] md:h-auto col-start-1 col-end-2 row-start-1 row-end-2 bg-[#F7F8F9]",
    h1: "w-auto",
    h2: "hidden md:grid ",
    img: "md:w-[360px] ",
    imgDiv: "md:w-[360px] w-full h-[136px]",
  },
  1: {
    div: "md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 h-[212px] md:h-auto col-start-2 col-end-3 row-start-1 row-end-2 bg-[#F4F8FB]",
    h1: "md:w-[220px]",
    h2: "md:w-[291px] hidden md:grid",
    img: "",
    imgDiv: "md:right-0 md:!w-[393px] ",
  },
  2: {
    div: "md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 h-[130px] md:h-auto col-start-1 col-end-3 row-start-3 row-end-5 bg-[#F7F8F9]",
    h1: "",
    h2: " hidden md:grid",
    img: "right-0 md:!w-[360px] !w-[154px]",
    imgDiv: "right-0 md:!w-[360px] !w-[154px]",
  },
  3: {
    div: "md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 h-[130px] md:h-auto col-start-1 col-end-3 row-start-2 row-end-2  bg-[#DAE6F8]",
    h1: "md:w-[209px]",
    h2: "md:w-[278px] hidden md:grid",
    img: "right-0 md:!w-[393px] !w-[154px]",
    imgDiv: "right-0 md:!w-[393px] !w-[154px]",
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
