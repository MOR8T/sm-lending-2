"use client"
import Banner from "@/components/banner/Banner";
import { bannerBusiness, businessCards1, businessCards2 } from "@/constants/business/const";
import ServicesSection from "@/ui/business/ServicesSection";
import СardsRow from "@/ui/business/СardsRow";
import { useTranslations } from "use-intl";

export default function Business() {
  const t = useTranslations("ServicesSection")
  return (
    <div>
      <Banner items={bannerBusiness} />
      <СardsRow cards={businessCards1} />
      <ServicesSection cards={businessCards2} title={t("title")} />
    </div>
  );
}
