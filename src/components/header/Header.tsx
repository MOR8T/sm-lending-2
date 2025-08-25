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
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import SubHeader from "./SubHeader";
import { about_navbar } from "@/constants/about-us/header-const";
import MenuDrawer from "../menuDrawer/MenuDrawer";

function Header() {
  const t = useTranslations("Header");
  const [activeModule, setActiveModule] = useState("1");
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const activeModuleClass = "border-b border-[#3980A0] text-[#3980A0]";

  const navbars: navbarsT = {
    "2": personal_navbar,
    "3": business_navbar,
    "4": about_navbar,
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
    <div>
      <div className="border-b border-b-gray-300">
        <div className="container flex justify-between items-center md:pt-0 pt-[16px]">
          <div className="flex gap-8 items-center text-[#595959] text-[16px] leading-[22.4px] md:py-0 py-[12px]">
            <Link href="/">
              <Image
                src={`/images/header_logo.svg`}
                alt=""
                width="45"
                height="40"
                className="pt-[0px]"
              />
            </Link>
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
            <Link href="/search">
              <button className="cursor-pointer p-[4px_12px] mr-[12px] rounded-[5px] hover:bg-[rgba(0,0,0,0.05)] active:bg-[rgba(0,0,0,0.1)]">
                <CiSearch className="text-[#595959] text-[20px]" />
              </button>
            </Link>
            <LocaleSwicherSelect />
          </div>
          <div className="md:hidden flex items-end">
            <Button onClick={() => setMenu(true)} type="text" className="p-0">
              <RxHamburgerMenu className="text-[24px] text-[#595959]" />
            </Button>
          </div>
        </div>
      </div>
      {activeModule !== "1" ? (
        <div className="border-b border-b-gray-300">
          <SubHeader data={navbars[activeModule]} />{" "}
        </div>
      ) : (
        <div className="h-10"></div>
      )}
      <MenuDrawer open={menu} onClose={() => setMenu(false)} />
    </div>
  );
}

export default Header;
