import Image from "next/image";
import structure from "@/../public/images/structure.jpg";
import { useTranslations } from "next-intl";

export default function Structure() {
  const t = useTranslations();
  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] md:text-center md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        {t("Subheader.about.org_structure")}
      </h1>
      <div className="md:mt-10 mt-6">
        <Image
          src={structure}
          alt="structure"
          width={846}
          height={685}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
