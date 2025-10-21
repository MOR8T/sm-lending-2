import businessCardsImg1 from "@/../public/icons/homePageMap.png";
import businessCardsImg2 from "@/../public/icons/homePageStudy.png";
import businessCardsImg3 from "@/../public/icons/homePageCard.png";
// import ServicesSectionImg1 from "@/../public/icons/ServicesSectionImg1.svg";
// import ServicesSectionImg2 from "@/../public/icons/ServicesSectionImg2.svg";
// import ServicesSectionImg3 from "@/../public/icons/ServicesSectionImg3.svg";
// import ServicesSectionImg4 from "@/../public/icons/ServicesSectionImg4.svg";
// import { stylesServicesSectionT } from "@/types/business/cards";

import money from "@/../public/icons/servise/money.svg";
import faq from "@/../public/icons/servise/faq.svg";
import location from "@/../public/icons/servise/location.svg";
import basket from "@/../public/icons/servise/basket.svg";
import sell from "@/../public/icons/servise/sell.svg";
import documents from "@/../public/icons/servise/documents.svg";

import bannerImg from "@/../public/images/banners/cash_banner.svg";

export const items = [
  {
    key: "1",
    onClick: () => {
      console.log("hello");
    },
    title: "Интиқол ба Чин осон шуд",
    description:
      "Ба ҳамёнҳои Alipay ва WeChat бо барномаи Alif бе комиссия пул фиристед",
    h1: {
      color: "rgb(255,250,200)",
      width: "370px",
    },
    p: {
      color: "rgb(255,250,200)",
      width: "370px",
    },
    button: {
      text: "Муфассал",
      bgColor: "rgb(255,221,136)",
      color: "rgb(0,106,104)",
    },
    img: {
      src: "/images/banners/zero_procent.png",
      alt: "",
    },
    bgColor: "rgb(0,106,104)",
  },
  {
    key: "2",
    onClick: () => {
      console.log("hello");
    },
    title: "Интиқол ба Чин осон шуд",
    description:
      "Ба ҳамёнҳои Alipay ва WeChat бо барномаи Alif бе комиссия пул фиристед",
    h1: {
      color: "rgb(255,250,200)",
      width: "370px",
    },
    p: {
      color: "rgb(255,250,200)",
      width: "370px",
    },
    button: {
      text: "Муфассал",
      bgColor: "rgb(255,221,136)",
      color: "rgb(0,106,104)",
    },
    img: {
      src: "/images/banners/zero_procent.png",
      alt: "",
    },
    bgColor: "rgb(0,106,104)",
  },
  {
    key: "3",
    onClick: () => {
      console.log("hello");
    },
    title: "Интиқол ба Чин осон шуд",
    description:
      "Ба ҳамёнҳои Alipay ва WeChat бо барномаи Alif бе комиссия пул фиристед",
    h1: {
      color: "rgb(255,250,200)",
      width: "370px",
    },
    p: {
      color: "rgb(255,250,200)",
      width: "370px",
    },
    button: {
      text: "Муфассал",
      bgColor: "rgb(255,221,136)",
      color: "rgb(0,0,0)",
    },
    img: {
      src: "/images/banners/zero_procent.png",
      alt: "",
    },
    bgColor: "rgb(0,0,0)",
  },
];

export const homePageBanner = [
  {
    title: "HomePage.banner.title1",
    subTitle: "HomePage.banner.subTitle1",
    href: "/",
    img: bannerImg,
    isImage: true,
  },
  {
    title: "HomePage.banner.title2",
    subTitle: "HomePage.banner.subTitle2",
    href: "",
    video: "/videos/rus.webm",
    isImage: false,
  },
  {
    title: "HomePage.banner.title3",
    subTitle: "HomePage.banner.subTitle3",
    href: "",
    video: "/videos/Hamyemi_mobili_SM.webm",
    isImage: false,
  },
  // {
  //   title: "HomePage.banner.title3",
  //   subTitle: "HomePage.banner.subTitle3",
  //   href: "",
  //   isImage:false,
  //   video: '/videos/стандарт.mp4',
  // },
  // {
  //   title: "HomePage.banner.title4",
  //   subTitle: "HomePage.banner.subTitle4",
  //   href: "/",
  //   img: bannerImg,
  // },
];

export const personalCards1 = [
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

export const personalServiceItems = [
  {
    img: money,
    text: "text1",
    key: "1",
    href: "",
  },
  {
    img: faq,
    text: "text2",
    key: "2",
    href: "",
  },
  {
    img: location,
    text: "text3",
    key: "3",
    href: "",
  },
  {
    img: basket,
    text: "text4",
    key: "4",
    href: "",
  },
  {
    img: sell,
    text: "text5",
    key: "5",
    href: "",
  },
  {
    img: documents,
    text: "text6",
    key: "6",
    href: "",
  },
];

export const depositsAccountContents1 = [
  {
    label: "contents1.label",
    value: "contents1.value",
  },
  {
    label: "contents2.label",
    value: "contents2.value",
  },
  {
    label: "contents3.label",
    value: "contents3.value",
  },
  {
    label: "contents4.label",
    value: "contents4.value",
  },
];

// export const stylesServicesSection: stylesServicesSectionT = {
//   0: {
//     div: "col-start-1 col-end-2 row-start-1 row-end-2 bg-[#F7F8F9]",
//     h1: "",
//     h2: "",
//     img: "",
//   },
//   1: {
//     div: "col-start-2 col-end-4 row-start-1 row-end-2 bg-[#F4F8FB]",
//     h1: "w-[220px]",
//     h2: "w-[291px]",
//     img: "right-0 !w-[393px]",
//   },
//   2: {
//     div: "col-start-3 col-end-4 row-start-2 row-end-3 bg-[#F7F8F9]",
//     h1: "",
//     h2: "",
//     img: "",
//   },
//   3: {
//     div: "col-start-1 col-end-3 row-start-2 row-end-3 bg-[#DAE6F8]",
//     h1: "w-[209px]",
//     h2: "w-[278px]",
//     img: "right-0 !w-[393px]",
//   },
// };

// export const businessCards2 = [
//   {
//     title: `Облегчим работу \n бухгалтера`,
//     subTitle: `Ваш бухгалтер начислит зарплату без \nлишних бумаг и усилий`,
//     img: ServicesSectionImg1,
//   },
//   {
//     title: `Работайте с любого \n устройства`,
//     subTitle: `Пользуйтесь интернет-банкингом в \nлюбом браузере даже через телефон`,
//     img: ServicesSectionImg2,
//   },
//   {
//     title: `Следите с любой точки \n Земли`,
//     subTitle: `Управляйте прогрессом вашего \nбизнеса, где бы вы ни находились`,
//     img: ServicesSectionImg3,
//   },
//   {
//     title: `Следите с любой точки \n Земли`,
//     subTitle: `Управляйте прогрессом вашего \nбизнеса, где бы вы ни находились`,
//     img: ServicesSectionImg4,
//   },
// ];

export const defaultRateTJ = {
  nbt: 1,
  nominal: 1,
  card_sale: 1,
  wallet_sale: 1,
  currency_num: "1",
  card_purchase: 1,
  exchange_sale: 1,
  transfer_sale: 1,
  nbt_difference: 1,
  wallet_purchase: 1,
  exchange_purchase: 1,
  transfer_purchase: 1,
  currency_char_code: "TJS",
  card_sale_difference: 1,
  wallet_sale_difference: 1,
  card_purchase_difference: 1,
  exchange_sale_difference: 1,
  transfer_sale_difference: 1,
  wallet_purchase_difference: 1,
  exchange_purchase_difference: 1,
  transfer_purchase_difference: 1,
  country_code: "TJ",
  country_flag_url:
    "https://ec2-18-156-46-26.eu-central-1.compute.amazonaws.com/currency_rate/flags/tj.png",
};
