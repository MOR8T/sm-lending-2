import { Link } from "@/i18n/navigation";
import { InfoNavicationBannerT } from "@/types/main-page/ui/types";
import BorderButton from "@/ui/main-page/buttons/BorderButton";
import Image from "next/image";
import React from "react";

export default function InfoNavigationBanner({
  img,
  href,
  title,
  description,
  linkText,
}: InfoNavicationBannerT) {
  return (
    <div className="container">
      <div
        style={{
          background:
            "radial-gradient(64.95% 172.13% at 52.85% -4.22%, #3980A0 0%, #054E6E 100%)",
        }}
        className="md:min-h-[296px] w-full min-h-auto mx-auto bg-[#F7F8F9] rounded-3xl grid md:grid-cols-[1fr_auto]"
      >
        <div className="md:p-[50px] p-6 flex flex-col justify-between text-white max-w-[582px]">
          <div>
            <h1 className=" md:text-[24px] text-[20px] font-bold">{title}</h1>
            <p className="opacity-80 text-[16px] leading-[24px] mt-[12px]">
              {description}
            </p>
          </div>
          <Link href={href} className="mt-[32px]">
            <BorderButton className="p-[16px_32px] border-none bg-white md:w-auto w-full">
              {linkText}
            </BorderButton>
          </Link>
        </div>
        <div className="flex items-end md:justify-end justify-center">
          <Image
            src={img}
            alt="info"
            width={322}
            height={322}
            className="md:w-[322px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
