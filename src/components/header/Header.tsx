"use client";
import { useState } from "react";
import DropdownUI from "@/ui/dropdown/DropdownUI";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";
import MenuDrawer from "../menuDrawer/MenuDrawer";

export default function Header() {
  const t = useTranslations("Header");

  const locale: string = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  function onCloseMenu() {
    setMenuOpen(false);
  }

  const productsItems = [
    {
      key: "1",
      label: (
        <Link href="/products" onClick={onCloseMenu}>
          {t("personal.products")}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/products/cards" onClick={onCloseMenu}>
          {t("personal.products_cards")}
        </Link>
      ),
    },
  ];

  const featuresItems = [
    {
      key: "1",
      label: (
        <Link href="/app" onClick={onCloseMenu}>
          {t("corporate.app")}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/functions" onClick={onCloseMenu}>
          {t("corporate.functions")}
        </Link>
      ),
    },
  ];

  const companyItems = [
    {
      key: "1",
      label: (
        <Link href="/company/contact" onClick={onCloseMenu}>
          {t("about.company_contacts")}
        </Link>
      ),
    },
  ];

  return (
    <div className="bg-[#EBECEE]">
      <div className="hidden h-[56px] bg-[#2A2924] text-[#EBE7E5] text-[14px] leading-[19px] font-medium flex justify-center items-center">
        <p>
          The power of <span className="font-bold">STANDART MOLIYA</span> — now
          for personal accounts
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto h-[64px] bg-[#EBECEE] flex items-center justify-between px-[18px] md:px-[30px]">
        <div>
          <Link href="/">
            <Image
              src={`/images/Logo_${locale}.svg`}
              alt="Standart Moliya"
              className="w-[180px] md:w-[241px] h-[28px] md:h-[33px]"
              width="241"
              height="33"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-[25px]">
          <Link href="/" className="text-[#1F2937] text-[15px] leading-[19px]">
            {t("home")}
          </Link>
          <DropdownUI text={t("personal.personal")} items={productsItems} />
          <DropdownUI text={t("corporate.corporate")} items={featuresItems} />
          <DropdownUI text={t("about.about")} items={companyItems} />
        </div>
        <div className="hidden lg:block">
          <LocaleSwicherSelect />
        </div>
        <button
          className="lg:hidden flex items-center justify-center p-2 ml-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
            <path
              stroke="#1F2937"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <MenuDrawer
        open={menuOpen}
        onClose={onCloseMenu}
        productsItems={productsItems}
        featuresItems={featuresItems}
        companyItems={companyItems}
        locale={locale}
      />
    </div>
  );
}
