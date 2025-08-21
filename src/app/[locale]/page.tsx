"use client";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { mainPCards, newsCards } from "@/constants/main-page/cards";
import MainPCards from "@/ui/main-page/cards/MainPCards";
import NewsCards from "@/ui/main-page/cards/NewsCards";
import CurrencyRate from "@/ui/main-page/currency-rate/CurrencyRate";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("");

  return (
    <div className="container">
      <SectionTitle>{t("HomePage.popularProducts")}</SectionTitle>
      <MainPCards cards={mainPCards} />
      <SectionTitle>{t("HomePage.exchangeRate")}</SectionTitle>
      <CurrencyRate />

      <SectionTitle>{t("HomePage.calculateCredit")}</SectionTitle>
      <SectionTitle>{t("HomePage.news")}</SectionTitle>
      <NewsCards cards={newsCards} />
    </div>
  );
}
