"use client";
import { Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import DropdownUI from "@/ui/dropdown/DropdownUI";
// import { useParams } from "next/navigation";

export default function LocaleSwicherSelect() {
  const locale: string = useLocale();
  const router = useRouter();

  const pathname = usePathname();
  // const params = useParams();

  function onSelectLang(nextLocale: string) {
    router.replace({ pathname }, { locale: nextLocale as Locale });
  }

  const options = [
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
    { value: "tj", label: "Тоҷикӣ" },
  ];

  const items = [
    {
      key: "en",
      label: (
        <button onClick={() => onSelectLang("en")} className="cursor-pointer">
          English
        </button>
      ),
    },
    {
      key: "ru",
      label: (
        <button onClick={() => onSelectLang("ru")} className="cursor-pointer">
          Русский
        </button>
      ),
    },
    {
      key: "tj",
      label: (
        <button onClick={() => onSelectLang("tj")} className="cursor-pointer">
          Тоҷикӣ
        </button>
      ),
    },
  ];

  return (
    <div>
      <DropdownUI
        text={options.find((el) => el.value === locale)?.label || ""}
        items={items}
      />
      {/* <select
         value={locale}
         onChange={(e) => onSelectLang(e.target.value)}
         className="text-[#1F2937] text-[15px] leading-[19px] bg-transparent border-none rounded p-1 cursor-pointer"
       >
         {options.map((el) => (
           <option key={el.value} value={el.value}>
             {el.label}
           </option>
         ))}
       </select> */}
    </div>
  );
}
