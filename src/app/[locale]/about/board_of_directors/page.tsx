import { useTranslations } from "next-intl";
import default_img from "@/../public/images/default_man_img.svg";
import Image from "next/image";

export default function BoardOfDirectors() {
  const t = useTranslations();
  const data = [
    {
      fullname: "Бобоев Фарҳод Рустамович",
      img: default_img,
    },
    {
      fullname: "Назаров Мирзонаҷот Сафарович",
      img: default_img,
    },
    {
      fullname: "Абдулхақов Одилҷон Нигматуллоевич",
      img: default_img,
    },
    {
      fullname: "Маҳмудов Мурод Қудратович",
      img: default_img,
    },
    {
      fullname: "Мадҷонов Шуҳратҷон Сафиалоевич",
      img: default_img,
    },
  ];

  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] text-center md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        {t("Subheader.about.board_of_directors")}
      </h1>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
        {data.map((el) => {
          return (
            <div key={el.fullname} className="max-w-[265px] text-center">
              <div className="mx-auto">
                <Image
                  src={el.img}
                  alt={el.fullname}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] rounded-[12px] mx-auto"
                />
              </div>
              <h2 className="text-[#282828] md:text-[24px] text-[20px] font-semibold leading-6 md:mt-[24px] mt-[16px]">
                {el.fullname}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
