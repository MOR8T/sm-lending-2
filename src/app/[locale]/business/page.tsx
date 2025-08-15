"use client";
import Banner from "@/components/banner/Banner";
import {
  bannerBusiness,
  businessCards1,
  businessCards2,
  reviews,
} from "@/constants/business/const";
import Consultation from "@/ui/business/consultationOnProduct/Consultation";
import Reviews from "@/ui/business/Reviews";
import ServicesSection from "@/ui/business/ServicesSection";
import СardsRow from "@/ui/business/СardsRow";
import { useTranslations } from "use-intl";

export default function Business() {
  const t = useTranslations("ServicesSection");
  return (
    <div>
      <Banner items={bannerBusiness} />
      <СardsRow cards={businessCards1} />
      <ServicesSection typeStyleBox={1} cards={businessCards2} title={t("title")} />
      <Reviews items={reviews} />
      <ServicesSection typeStyleBox={2} cards={businessCards2} title={t("title")} />
      <Consultation />
    </div>
  );
}
