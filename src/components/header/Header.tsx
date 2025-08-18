"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";
import { Link, usePathname } from "@/i18n/navigation";
import { personal_navbar } from "@/constants/main-page/header-const";
import { business_navbar } from "@/constants/business/header-const";
import { navbarsT } from "@/types/business/header";
import { Button } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

function Header() {
  const t = useTranslations("Header");
  const [activeModule, setActiveModule] = useState("1");
  const pathname = usePathname();

  const activeModuleClass = "border-b border-[#3980A0] text-[#3980A0]";

  const navbars: navbarsT = {
    "1": personal_navbar,
    "2": business_navbar,
    "3": [],
  };

  useLayoutEffect(() => {
    if (pathname.includes("/about")) {
      setActiveModule("4");
    } else if (pathname.includes("/business")) {
      setActiveModule("3");
    } else if (pathname.includes("/personal")) {
      setActiveModule("2");
    } else {
      setActiveModule("1");
    }
  }, [pathname]);

  return (
    <div className="md:border-b md:border-b-gray-300 mb-[40px]">
      <div className="container flex justify-between items-center md:pt-0 pt-[16px]">
        <div className="flex gap-8 items-center text-[#595959] text-[16px] leading-[22.4px]">
          <Image
            src={`/images/header_logo.svg`}
            alt=""
            width="45"
            height="40"
            className="pt-[0px]"
          />
          <ul className="md:flex hidden gap-6">
            <li
              className={`pt-[20px] pb-[20px] mb-[-1px] ${
                activeModule === "1" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/"}>{t("main")}</Link>
            </li>
            <li
              className={`pt-[20px] pb-[20px] mb-[-1px] ${
                activeModule === "2" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/personal"}>{t("personal")}</Link>
            </li>
            <li
              className={`pt-[20px] pb-[20px] mb-[-1px] ${
                activeModule === "3" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/business"}>{t("business")}</Link>
            </li>
            <li
              className={`pt-[20px] pb-[20px] mb-[-1px] ${
                activeModule === "4" ? activeModuleClass : ""
              }`}
            >
              <Link href={"/about"}>{t("about_us")}</Link>
            </li>
          </ul>
        </div>
        <div className="md:flex items-center hidden ">
          <button className="cursor-pointer p-[4px_12px] mr-[12px] rounded-[5px] hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.1)]">
            <CiSearch className="text-[#595959] text-[20px]" />
          </button>
          <LocaleSwicherSelect />
        </div>
        <div className="md:hidden flex items-end">
          <Button type="text" className="p-0">
            <GiHamburgerMenu className="text-[24px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
