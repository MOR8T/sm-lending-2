"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";
import { Link, usePathname } from "@/i18n/navigation";
import { personal_navbar } from "@/constants/main-page/header-const";
import SubHeader from "./SubHeader";
import { business_navbar } from "@/constants/business/header-const";
import { navbarsT } from "@/types/business/header";
import { Button } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const t = useTranslations("Header");
  const [activeModule, setActiveModule] = useState("1");
  const locale = useLocale();
  const pathname = usePathname();

  const activeModuleClass = "border-b-[2px] border-[#3a6178]";

  const navbars: navbarsT = {
    "1": personal_navbar,
    "2": business_navbar,
    "3": [],
  };

  useLayoutEffect(() => {
    if (pathname.includes("/business")) {
      setActiveModule("2");
    } else if (pathname.includes("/bank")) {
      setActiveModule("3");
    } else {
      setActiveModule("1");
    }
  }, [pathname]);

  return (
    <div>
      <div className="container flex justify-between md:border-b md:border-b-gray-300 items-center md:pt-0 pt-[16px]">
        <div className="flex gap-8 items-center">
          <Image
            src={`/images/Logo_${locale}.svg`}
            alt=""
            width="271"
            height="45"
            className="pt-[6px]"
          />
          <ul className="md:flex hidden gap-5">
            <li
              className={`pt-[26px] pb-[18px] ${
                activeModule === "1" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/"}>{t("personal")}</Link>
            </li>
            <li
              className={`pt-[26px] pb-[18px] ${
                activeModule === "2" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/business"}>{t("business")}</Link>
            </li>
            <li
              className={`pt-[26px] pb-[18px] ${
                activeModule === "3" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/bank"}>{t("bank")}</Link>
            </li>
          </ul>
        </div>
        <div className="md:block hidden">
          <LocaleSwicherSelect />
        </div>
        <div className="md:hidden flex items-end">
          <Button type="text" className="p-0">
            <GiHamburgerMenu className="text-[24px]" />
          </Button>
        </div>
      </div>
      <SubHeader data={navbars?.[activeModule]} />
    </div>
  );
}

export default Header;
