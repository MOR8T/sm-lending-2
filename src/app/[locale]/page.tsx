"use client";
import Banner from "@/components/banner/Banner";

export default function HomePage() {
  const items = [
    {
      key: "1",
      onClick: () => {
        console.log("hello");
      },
      title: "Интиқол ба Чин осон шуд",
      description:
        "Ба ҳамёнҳои Alipay ва WeChat бо барномаи Alif бе комиссия пул фиристед",
      textColor: "rgb(255,250,200)",
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
      textColor: "rgb(255,250,200)",
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
      textColor: "rgb(255,250,200)",
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

  return (
    <div>
      <Banner items={items} />
    </div>
  );
}
