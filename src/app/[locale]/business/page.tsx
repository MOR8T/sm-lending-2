"use client";
import { business_navbar } from "@/constants/business/header-const";
import { redirect } from "@/i18n/navigation";

export default function Business() {
  redirect({ href: business_navbar[0]?.href, locale: "tj" }); 
}
