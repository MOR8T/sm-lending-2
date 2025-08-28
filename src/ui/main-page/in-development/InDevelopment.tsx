"use client";
import img_404 from "@/../public/images/short_logo.svg";
import NotFoundButton from "@/ui/main-page/buttons/ButtonFon";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function InDevelopment() {
  const t = useTranslations();
  return (
    <div
      className="pt-[80px] pb-[32px]"
      style={{ minHeight: "calc(100vh-50px)" }}
    >
      <div className="container-lg md:grid md:grid-cols-2 flex flex-col-reverse md:gap-4 gap-10 items-center">
        <div className="max-w-[441px]">
          <h1 className="md:text-[40px] text-[20px] font-bold text-[#282828] mb-8">
            {t("InDevelopment.title")}
          </h1>
          <NotFoundButton>Перейти на главную</NotFoundButton>
        </div>
        <div className="flex md:justify-end md:max-w-0 max-w-[200px]">
          <Image src={img_404} alt="404" width={400} height={416} />
        </div>
      </div>
    </div>
  );
}
