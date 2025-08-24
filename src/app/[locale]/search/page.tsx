"use client";
import CustomPagination from "@/ui/main-page/pagination/CustomPagination";
import { Pagination } from "antd";
import { useTranslations } from "next-intl";
import { CiSearch } from "react-icons/ci";

export default function Deposits() {
  const t = useTranslations();

  const data = [
    {
      title: "Кредитные продукты в SM: Кредит наличными ...",
      subTitle:
        "Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов",
      url: "https://sm.com/individuals/lending/lending_types/",
    },
    {
      title: "Кредитные продукты в SM: Кредит наличными ...",
      subTitle:
        "Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов",
      url: "https://sm.com/individuals/lending/lending_types/",
    },
    {
      title: "Кредитные продукты в SM: Кредит наличными ...",
      subTitle:
        "Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов",
      url: "https://sm.com/individuals/lending/lending_types/",
    },
    {
      title: "Кредитные продукты в SM: Кредит наличными ...",
      subTitle:
        "Не думай, а действуй и воплощай свои планы в реальность! С многоцелевыми потребительскими кредитами от Банка Эсхата Ваши мечты воплощаются в жизнь! Удовлетворение личных потребностей клиентов",
      url: "https://sm.com/individuals/lending/lending_types/",
    },
  ];

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-[13px_20px] rounded-[4px] w-full border border-[#F0F0F0] grid grid-cols-[1fr_auto] gap-4"
      >
        <input
          type="text"
          className="text-[16px] text-[#282828] leading-6 outline-none"
        />
        <button className="cursor-pointer">
          <CiSearch className="text-[24px] text-[#282828]" />
        </button>
      </form>
      <div className="flex justify-between items-end md:my-10 my-5">
        <h1 className="md:text-[32px] text-[20px] leading-8 text-[#323856] font-semibold">
          Результаты поиска “Кредит”
        </h1>
        <p className="text-[#323856] opacity-60 md:block hidden">
          Найдено 300 результатов
        </p>
      </div>
      <div className="grid gap-10">
        {data.map((el, i) => {
          return (
            <div
              key={el.title + i}
              className="rounded-[16px] bg-[#F5F5F5] md:p-[32px_40px] p-6 flex flex-col gap-4"
            >
              <h4 className="text-[20px] text-[#141414] font-medium leadin-5 limitText1To2 max-w-[440px]">
                {el.title}
              </h4>
              <p className="text-[16px] text-[#595959] limitText2To7">
                {el.subTitle}
              </p>
              <a
                href={el.url}
                target="_blank"
                className="text-[16px] text-[#007EFD]"
              >
                {el.url}
              </a>
            </div>
          );
        })}
      </div>
      <CustomPagination className="md:mt-10 mt-5" align='end'/>
    </div>
  );
}
