import businessCardsImg1 from "@/../public/icons/businessCardsImg1.svg";
import businessCardsImg2 from "@/../public/icons/businessCardsImg2.svg";
import businessCardsImg3 from "@/../public/icons/businessCardsImg3.svg";
import ServicesSectionImg1 from "@/../public/icons/ServicesSectionImg1.svg";
import ServicesSectionImg2 from "@/../public/icons/ServicesSectionImg2.svg";
import ServicesSectionImg3 from "@/../public/icons/ServicesSectionImg3.svg";
import ServicesSectionImg4 from "@/../public/icons/ServicesSectionImg4.svg";
import bannerBusinessImg from "@/../public/images/bannerBusiness.svg";
import ashan from "@/../public/icons/ashan.svg";
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

export const stylesServicesSection1: stylesServicesSectionT = {
  0: {
    div: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 h-[212px] md:h-auto col-start-1 col-end-2 row-start-1 row-end-2 bg-[#F7F8F9]",
    h1: "w-auto",
    h2: "hidden md:grid ",
    img: "md:w-[360px] ",
    imgDiv: "md:w-[360px] md:h-auto w-full h-[136px]",
  },
  1: {
    div: "md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 h-[212px] md:h-auto col-start-2 col-end-3 row-start-1 row-end-2 bg-[#F4F8FB]",
    h1: "md:w-[220px]",
    h2: "md:w-[291px] hidden md:grid",
    img: "md:h-auto h-[167px]",
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
export const stylesServicesSection2: stylesServicesSectionT = {
  0: {
    div: "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 h-[212px] md:h-auto col-start-1 col-end-3 row-start-1 row-end-2 bg-[#F7F8F9]",
    h1: "w-auto",
    h2: "hidden md:grid ",
    img: " md:h-auto h-[136px]",
    imgDiv: "md:right-0 md:!w-[393px]",
  },
  1: {
    div: "md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 h-[212px] md:h-auto col-start-3 col-end-4 row-start-1 row-end-2 bg-[#F4F8FB]",
    h1: "md:w-[220px]",
    h2: "md:w-[291px] hidden md:grid",
    img: "md:w-[300px]",
    imgDiv: "md:w-[360px] md:h-auto w-full h-[167px]",
  },
  2: {
    div: "md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3 h-[130px] md:h-auto col-start-1 col-end-4 row-start-3 row-end-5 bg-[#F7F8F9]",
    h1: "",
    h2: " hidden md:grid",
    img: "right-0 md:!w-[393px] !w-[154px]",
    imgDiv: "right-0 md:!w-[393px] !w-[154px]",
  },
  3: {
    div: "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 h-[130px] md:h-auto col-start-1 col-end-4 row-start-2 row-end-2  bg-[#DAE6F8]",
    h1: "md:w-[209px]",
    h2: "md:w-[278px] hidden md:grid",
    img: "right-0 md:!w-[300px] !w-[124px]",
    imgDiv: "right-0 md:!w-full !w-[124px]",
  },
};
export const businessCards2 = [
  {
    title: `Кори муҳосибро \n осон мекунем`,
    subTitle: `Муҳосиби шумо маошро бидуни \nкоғазбозӣ ва душворӣ ҳисоб мекунад`,
    img: ServicesSectionImg1,
  },
  {
    title: `Аз ҳар гуна дастгоҳ \n кор кунед`,
    subTitle: `Аз интернет-банкинг дар \nҳар браузер ҳатто бо телефон истифода баред`,
    img: ServicesSectionImg2,
  },
  {
    title: `Аз ҳар гӯшаи ҷаҳон \n пайгирӣ кунед`,
    subTitle: `Пешрафти бизнеси худро новобаста аз ҷойи \nбудубошатон идора намоед`,
    img: ServicesSectionImg3,
  },
  {
    title: `Аз ҳар гӯшаи ҷаҳон \n пайгирӣ кунед`,
    subTitle: `Пешрафти бизнеси худро новобаста аз ҷойи \nбудубошатон идора намоед`,
    img: ServicesSectionImg4,
  },
];

export const bannerBusiness = [
  {
    key: "1",
    onClick: () => {
      console.log("hello");
    },
    title: "Банк, который можно взять с собой",
    description:
      "Alif Business – это современный и удобный интернет-банк для юридических и частных лиц",
    h1: {
      width: "410px",
      color: "#fff",
    },
    p: {
      width: "410px",
      color: "#fff",
    },
    button: {
      text: "Подключить",
      bgColor: "#00AF66",
      color: "#fff",
    },
    img: {
      src: bannerBusinessImg,
      alt: "",
    },
    bgColor: "#363636",
  },
];

export const reviews = [
  {
    message: `Ширкатҳои мо муддати тӯлонӣ ҳамкорӣ доранд ва мо ҳеҷ гоҳ ба кордонии Алиф шубҳа надоштем.
    Алиф яке аз ширкатҳои молиявии пешсафе мебошад, ки барои рушди иқтисодиёти кишвар технологияҳои замонавиро ба роҳ мемонад. Якҷоя мо тавонистем шумораи мизоҷонамонро зиёд карда, хизматрасониҳои худро васеъ намоем.`,
    company: {
      icon: ashan,
      title: "ҶСП «Шивер Тоҷикистон»",
      subTitle: "Ритейлери фаронсавӣ",
    },
  },
  {
    message: `Ширкатҳои мо муддати тӯлонӣ ҳамкорӣ доранд ва мо ҳеҷ гоҳ ба кордонии Алиф шубҳа надоштем.
    Алиф яке аз ширкатҳои молиявии пешсафе мебошад, ки барои рушди иқтисодиёти кишвар технологияҳои замонавиро ба роҳ мемонад. Якҷоя мо тавонистем шумораи мизоҷонамонро зиёд карда, хизматрасониҳои худро васеъ намоем.`,
    company: {
      icon: ashan,
      title: "ҶСП «Шивер Тоҷикистон»",
      subTitle: "Ритейлери фаронсавӣ",
    },
  },
  {
    message: `Ширкатҳои мо муддати тӯлонӣ ҳамкорӣ доранд ва мо ҳеҷ гоҳ ба кордонии Алиф шубҳа надоштем.
    Алиф яке аз ширкатҳои молиявии пешсафе мебошад, ки барои рушди иқтисодиёти кишвар технологияҳои замонавиро ба роҳ мемонад. Якҷоя мо тавонистем шумораи мизоҷонамонро зиёд карда, хизматрасониҳои худро васеъ намоем.`,
    company: {
      icon: ashan,
      title: "ҶСП «Шивер Тоҷикистон»",
      subTitle: "Ритейлери фаронсавӣ",
    },
  },
  {
    message: `Ширкатҳои мо муддати тӯлонӣ ҳамкорӣ доранд ва мо ҳеҷ гоҳ ба кордонии Алиф шубҳа надоштем.
    Алиф яке аз ширкатҳои молиявии пешсафе мебошад, ки барои рушди иқтисодиёти кишвар технологияҳои замонавиро ба роҳ мемонад. Якҷоя мо тавонистем шумораи мизоҷонамонро зиёд карда, хизматрасониҳои худро васеъ намоем.`,
    company: {
      icon: ashan,
      title: "ҶСП «Шивер Тоҷикистон»",
      subTitle: "Ритейлери фаронсавӣ",
    },
  },
];

export const inputsFromConsultation = [
  {
    label: "fullName",
    key: "fullName",
  },
  {
    label: "phone",
    key: "phone",
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

export const depositsAccountContents3 = [
  {
    label: "contents1.label",
    value: "contents1.value",
  },
  {
    label: "contents2.label",
    value: "contents2.value",
  },
];

export const questions = [
  {
    title: "Дар кадом асъорҳо метавонад депозит кушод?",
    description: `
Депозити «Мақсад» дар ду асъор кушода мешавад: доллар ва сомонӣ. Даромад аз депозит байни муштарӣ ва Алиф тақсим мешавад.
    Даромади интизории солона аз депозит:
    — дар сомонӣ то 11%;
    — дар доллар то 5%.

    Депозити «Мӯҳлатнок»:
    Даромади солона:
    — дар сомонӣ то 16%;
    — дар доллар то 7%.

    Даромад ҳар моҳ
    Даромад аз 1 то 10-уми моҳи оянда ҳар моҳ ҳисоб карда мешавад.
    Барои гирифтани маълумоти бештар метавонед дар ин сайт дархост гузоред. Мо бо шумо тамос мегирем ва ба ҳама саволҳо ҷавоб медиҳем.`,
  },
  {
    title: "Ҳадди ақали маблағ барои кушодани депозит чанд аст?",
    description: `
Ҳадди ақали маблағ барои кушодани депозит — 1 сомонӣ.
    `,
  },
  {
    title:
      "Ҳангоми гирифтани пул аз ҳисоби депозит кадом комиссия ситонида мешавад?",
    description: `
Агар депозитро бо нақд пур кунед, пас аз гирифтани пул аз он комиссия вуҷуд надорад, ҳам дар сомонӣ ва ҳам дар доллар.

    Дар ҳолати пур кардани ҳисоби депозит ба тариқи ғайринақдӣ баъзе маҳдудиятҳо вуҷуд доранд. Агар шумо то 30 рӯз пулро дар сомонӣ бардоред, комиссия 0,9% мешавад. Пас аз 30 рӯз пулро бидуни комиссия гирифтан мумкин аст.

    Ҳамин қоидаҳо барои гирифтани пул дар доллар низ амал мекунанд, танҳо муҳлат дигар аст. Агар то 90 рӯз бардоред, комиссия 0,9% аст, пас аз 90 рӯз — 0%.
    `,
  },
  {
    title: "Кадом андоз аз ҳисоби депозитӣ гирифта мешавад?",
    description: `
Мутобиқи талаботи қонунгузории андоз, бонк ҳамчун агенти андоз вазифадор аст, ки 12% андозро аз даромаде, ки бонк пардохт мекунад, нигоҳ дорад (мод. 236 ва 238 НК ҶТ).

    Ҳар моҳ аз даромади ҳисоби депозитӣ 12% андоз нигоҳ дошта мешавад, ва фоидаи соф барои гирифтани нақд ба «Корти миллӣ», Visa ё ҳамёни alif mobi дастрас мегардад. Ҳамчунин даромадро метавонед дар хазинаи бонк бигиред.
    `,
  },
  {
    title: "Чӣ тавр ман метавонам депозит кушоям ва ба куҷо бояд равам?",
    description: `
Агар хоҳед депозитро дар Алиф кушоед, метавонед бо шиноснома ба наздиктарин офиси мо барои бастани шартнома муроҷиат кунед. Суроғаҳо дар инҷо ҳастанд.
    `,
  },
  {
    title: "Оё ба депозитии яхкардашуда даромад ҳисоб карда мешавад?",
    description: `
Вақте ки шумо қарзи фоизиро зери гарави депозит мегиред, ба шумо ҳамчунон ҳар моҳ даромад ҳисоб карда мешавад. Аммо онро баъд аз пардохти қарз гирифтан мумкин аст.
    `,
  },
];
