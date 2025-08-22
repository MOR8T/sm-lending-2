"use client";
import img_404 from "@/../public/images/404-page.svg";
import NotFoundButton from "@/ui/main-page/buttons/ButtonFon";
import Image from "next/image";
import "./style.css";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="" style={{ minHeight: "calc(100vh-50px)" }}>
      <div className="container md:grid md:grid-cols-2 flex flex-col-reverse md:gap-4 gap-10 items-center pt-[100px] pb-[32px]">
        <div className="max-w-[441px]">
          <h1 className="md:text-[32px] text-[20px] font-bold text-[#282828]">
            {t("title")}
          </h1>
          <p className="md:text-[22px] text-[16px] text-[#A9A9A9] mt-3 mb-6">
            {t("subTitle")}
          </p>
          <NotFoundButton>{t("button")}</NotFoundButton>
        </div>
        <Image src={img_404} alt="404" width={565} height={416} />
      </div>
    </div>
  );
}
