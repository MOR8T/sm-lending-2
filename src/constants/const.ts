import tg_icon from "@/../public/icons/footer/tg_black.svg";
import fb_icon from "@/../public/icons/footer/fb_black.svg";
import link_icon from "@/../public/icons/footer/Link_black.svg";
// import ok_icon from "@/../public/icons/footer/ok_black.svg";
import inst_icon from "@/../public/icons/footer/inst_black.svg";
// import youtube_icon from "@/../public/icons/footer/youtube_black.svg";
// import vk_icon from "@/../public/icons/footer/vk_black.svg";
// import tik_tok_icon from "@/../public/icons/footer/Tik_tok_black.svg";

export const footerLinks = [
  {
    href: "#",
    img: tg_icon,
    alt: "tg_icon",
  },
  {
    href: "#",
    img: fb_icon,
    alt: "fb_icon",
  },
  {
    href: "#",
    img: inst_icon,
    alt: "inst_icon",
  },
  {
    href: "#",
    img: link_icon,
    alt: "link_icon",
  },
  // {
  //   href: "#",
  //   img: ok_icon,
  //   alt: "ok_icon",
  // },
  // {
  //   href: "#",
  //   img: youtube_icon,
  //   alt: "youtube_icon",
  // },
  // {
  //   href: "#",
  //   img: vk_icon,
  //   alt: "vk_icon",
  // },
  // {
  //   href: "#",
  //   img: tik_tok_icon,
  //   alt: "tik_tok_icon",
  // },
];

export const regions = [
  {
    label: "Горно-Бадахшанская автономная область",
    value: 1,
    children: [
      { label: "Хорог", value: 101 },
      { label: "Ванчский район", value: 102 },
      { label: "Дарвазский район", value: 103 },
      { label: "Ишкашимский район", value: 104 },
      { label: "Мургабский район", value: 105 },
      { label: "Рошткалинский район", value: 106 },
      { label: "Рушанский район", value: 107 },
      { label: "Шугнанский район", value: 108 },
    ],
  },
  {
    label: "Согдийская область",
    value: 2,
    children: [
      { label: "Худжанд", value: 201 },
      { label: "Истаравшан", value: 202 },
      { label: "Исфара", value: 203 },
      { label: "Канибадам", value: 204 },
      { label: "Пенджикент", value: 205 },
      { label: "Айнинский район", value: 206 },
      { label: "Аштский район", value: 207 },
      { label: "Гафуровский район", value: 208 },
      { label: "Деваштичский район", value: 209 },
      { label: "Зафарабадский район", value: 210 },
      { label: "Матчинский район", value: 211 },
      { label: "Спитаменский район", value: 212 },
      { label: "Джаббар-Расуловский район", value: 213 },
      { label: "Шахристанский район", value: 214 },
    ],
  },
  {
    label: "Хатлонская область",
    value: 3,
    children: [
      { label: "Бохтар", value: 301 },
      { label: "Куляб", value: 302 },
      { label: "Нурек", value: 303 },
      { label: "Левакант", value: 304 },
      { label: "Вахшский район", value: 305 },
      { label: "Восейский район", value: 306 },
      { label: "Дангаринский район", value: 307 },
      { label: "Джалолиддина Балхи район", value: 308 },
      { label: "Кубодиёнский район", value: 309 },
      { label: "Кушониёнский район", value: 310 },
      { label: "Муминабадский район", value: 311 },
      { label: "Пянджский район", value: 312 },
      { label: "Темурмаликский район", value: 313 },
      { label: "Фархорский район", value: 314 },
      { label: "Ховалингский район", value: 315 },
      { label: "Шахритусский район", value: 316 },
      { label: "Яванский район", value: 317 },
    ],
  },
  {
    label: "Районы республиканского подчинения",
    value: 4,
    children: [
      { label: "Вахдат", value: 401 },
      { label: "Гиссар", value: 402 },
      { label: "Рогун", value: 403 },
      { label: "Турсунзаде", value: 404 },
      { label: "Варзобский район", value: 405 },
      { label: "Вахдатский район", value: 406 },
      { label: "Гиссарский район", value: 407 },
      { label: "Лахшский район", value: 408 },
      { label: "Нурабадский район", value: 409 },
      { label: "Раштский район", value: 410 },
      { label: "Рогунский район", value: 411 },
      { label: "Рудакинский район", value: 412 },
      { label: "Таджикабадский район", value: 413 },
      { label: "Турсунзадевский район", value: 414 },
      { label: "Файзабадский район", value: 415 },
      { label: "Шахринавский район", value: 416 },
    ],
  },
  {
    label: "Душанбе",
    value: 5,
    children: [
      { label: "Исмоили Сомони", value: 501 },
      { label: "Сино", value: 502 },
      { label: "Фирдавси", value: 503 },
      { label: "Шохмансур", value: 504 },
    ],
  },
];
