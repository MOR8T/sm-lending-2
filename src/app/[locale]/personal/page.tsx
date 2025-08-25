"use client";

import { personal_navbar } from "@/constants/main-page/header-const";
import { redirect } from "@/i18n/navigation";

export default function Personal() {
  redirect({ href: personal_navbar[0]?.href, locale: "tj" });
}
