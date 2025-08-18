"use client";
import { Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import DropdownUI from "@/ui/main-page/dropdown/DropdownUI";

export default function LocaleSwicherSelect() {
  const locale: string = useLocale();
  const router = useRouter();

  const pathname = usePathname();

  function onSelectLang(nextLocale: string) {
    router.replace({ pathname }, { locale: nextLocale as Locale });
  }

  const options = [
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
    { value: "tj", label: "Тоҷикӣ" },
  ];

  const btnClass =
    "text-[#595959] hover:text-[#3980A0] cursor-pointer transition duration-100";

  const items = [
    {
      key: "en",
      label: (
        <button onClick={() => onSelectLang("en")} className={btnClass}>
          English
        </button>
      ),
    },
    {
      key: "ru",
      label: (
        <button onClick={() => onSelectLang("ru")} className={btnClass}>
          Русский
        </button>
      ),
    },
    {
      key: "tj",
      label: (
        <button onClick={() => onSelectLang("tj")} className={btnClass}>
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
    </div>
  );
}
