"use client";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { mainPCards } from "@/constants/main-page/cards";
import MainPCards from "@/ui/main-page/cards/MainPCards";
import CurrencyRate from "@/ui/main-page/currency-rate/CurrencyRate";
// import { useTranslations } from "next-intl";

export default function HomePage() {
  // const t = useTranslations("HomePage");

  return (
    <div className="container">
      <SectionTitle>Популярные продукты</SectionTitle>
      <MainPCards cards={mainPCards} />
      <SectionTitle>Курс валют</SectionTitle>
      <CurrencyRate />

      <SectionTitle>Расчитать кредит</SectionTitle>
      <SectionTitle>Новости</SectionTitle>
    </div>
  );
}
