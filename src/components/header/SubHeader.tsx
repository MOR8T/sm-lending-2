import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function SubHeader({ data }: { data: { href: string; label: string }[] }) {
  const pathname = usePathname();
  const t = useTranslations("Subheader");

  return (
    <div className="container">
      <ul className="text-[16px] py-3 text-[#595959] font-medium flex gap-6 overflow-x-auto">
        {data.map((el) => {
          return (
            <li
              key={el.label}
              className={`hover:text-[#3980A0] font-medium text-nowrap ${
                pathname.includes(el.href) ? "text-[#3980A0]" : ""
              }`}
            >
              <Link href={el.href} className="">
                {t(el.label)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubHeader;
