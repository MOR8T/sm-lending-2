import { useTranslations } from "next-intl";
import Image from "next/image";
import default_img from "@/../public/images/default_man_img.svg";

export default function Management() {
  const t = useTranslations();
  const data = [
    {
      fullname: "Муовини директори генералӣ",
      jobtitle: "",
      img: default_img,
    },
    {
      fullname: "Ашуров Акмалҷон Нусратович",
      jobtitle: "Директори генералӣ",
      img: default_img,
    },
    {
      fullname: "Шарипова Гулнора Холбоевна",
      jobtitle: "Сармуҳосиб",
      img: default_img,
    },
  ];
  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] text-center md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        {t("Subheader.about.management")}
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
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
              <h2 className="text-[#282828] md:text-[24px] text-[20px] font-semibold leading-6 md:mt-[24px] mt-[16px] mb-[12px]">
                {el.fullname}
              </h2>
              <p className="text-[14px] text-[#54545A] mb-[10px]">
                {el.jobtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
