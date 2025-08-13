"use client";
import DropdownUI from "@/ui/dropdown/DropdownUI";
import { Drawer } from "antd";
import { ItemType } from "antd/es/menu/interface";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  productsItems: ItemType[];
  featuresItems: ItemType[];
  companyItems: ItemType[];
  locale: string;
};

export default function MenuDrawer({
  open,
  onClose,
  productsItems,
  featuresItems,
  companyItems,
  locale,
}: Props) {
  const t = useTranslations("Header");

  return (
    <Drawer closable={false} open={open} onClose={onClose}>
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <Link href="/" onClick={onClose}>
          <Image
            src={`/images/Logo_${locale}.svg`}
            alt="Standart Moliya"
            className="w-[180px] h-[28px]"
            width="180"
            height="28"
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
          {t("home")}
        </Link>
        <DropdownUI text={t("personal.personal")} items={productsItems} />
        <DropdownUI text={t("corporate.corporate")} items={featuresItems} />
        <DropdownUI text={t("about.about")} items={companyItems} />
        <LocaleSwicherSelect />
      </nav>
    </Drawer>
  );
}
