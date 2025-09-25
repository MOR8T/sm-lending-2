import Image from "next/image";
import services_image from "@/../public/images/bank_services.svg";
import service_icon from "@/../public/icons/bank_service_icon.svg";
import SectionInfo from "@/components/sectionInfo/SectionInfo";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  const data = [
    {
      title: t("title_1"),
    },
    {
      title: t("title_2"),
    },
    {
      title: t("title_3"),
    },
    {
      title: t("title_4"),
    },
    {
      title: t("title_5"),
    },
    {
      title: t("title_6"),
    },
    {
      title: t("title_7"),
    },
    {
      title: t("title_8"),
    },
  ];
  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={t("title")}
        description={t("description")}
        img={services_image}
        textMaxWidth="max-w-[347px]"
        className="md:py-5 py-5"
      />
      <div className="container-lg05 md:mt-[80px] mt-[41px] grid md:grid-cols-2 gap-6">
        {data.map((el) => {
          return (
            <div
              key={el.title}
              className="grid md:grid-cols-[80px_1fr] grid-cols-[60px_1fr] sm:gap-6 gap-4 md:items-center rounded-[8px] bg-[#F5F5F5] sm:p-6 p-5"
            >
              <Image
                src={service_icon}
                alt="service"
                width={80}
                height={80}
                className="md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
              />
              <h3 className="text-[#141414] sm:text-[20px] text-[19px] leading-5 font-semibold">
                {el.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
