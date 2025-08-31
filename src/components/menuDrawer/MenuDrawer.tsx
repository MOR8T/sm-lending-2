"use client";
import { Drawer } from "antd";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MenuDrawer({ open, onClose }: Props) {
  const t = useTranslations("Header");

  return (
    <Drawer closable={false} open={open} onClose={onClose}>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <Link href="/" onClick={onClose}>
          <Image
            src={`/images/header_logo.svg`}
            alt=""
            width="45"
            height="40"
            className="pt-[0px]"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className=" rounded-full hover:bg-gray-200 transition"
        >
          <IoMdClose className="text-[25px]" />
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-6 py-8 overflow-y-auto">
        <Link
          href="/"
          className="text-[#1F2937] text-xl font-medium"
          onClick={onClose}
        >
          <span className="text-[#1F2937]">{t("main")}</span>
        </Link>
        <Link
          href="/personal/deposits"
          className="text-[#1F2937] text-xl font-medium"
          onClick={onClose}
        >
          <span className="text-[#1F2937]">{t("personal")}</span>
        </Link>
        <Link
          href="/business/deposits"
          className="text-[#1F2937] text-xl font-medium"
          onClick={onClose}
        >
          <span className="text-[#1F2937]">{t("business")}</span>
        </Link>
        <Link
          href="/about/about"
          className="text-[#1F2937] text-xl font-medium"
          onClick={onClose}
        >
          <span className="text-[#1F2937]">{t("about_us")}</span>
        </Link>
        <LocaleSwicherSelect />
      </nav>
    </Drawer>
  );
}
