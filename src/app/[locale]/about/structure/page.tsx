import Image from "next/image";
// import structure from "@/../public/images/structure.jpg";
import structure_tj from "@/../public/images/structure_tj.jpg";
import structure_ru from "@/../public/images/structure_ru.jpg";
import structure_en from "@/../public/images/structure_en.jpg";
import { useTranslations } from "next-intl";

export default function Structure() {
  const t = useTranslations();
  const images = { ru: structure_ru, tj: structure_tj, en: structure_en };
  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] md:text-center md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        {t("Subheader.about.org_structure")}
      </h1>
      <div className="md:mt-10 mt-6">
        <Image
          src={images[t("lng") as "ru" | "en" | "tj"]}
          alt="structure"
          width={846}
          height={685}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
