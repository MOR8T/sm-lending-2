import { Link } from "@/i18n/navigation";
import { InfoNavicationBannerT } from "@/types/main-page/ui/types";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function InfoNavigationBanner({
  img,
  href,
  title,
  description,
  linkText,
}: InfoNavicationBannerT) {
  return (
    <div className="px-5">
      <div className="xl:max-w-[968px] max-w-[728px] xl:min-h-[368px] md:min-h-[334px] w-full min-h-auto mx-auto p-auto bg-[#F7F8F9] rounded-3xl grid md:grid-cols-2">
        <div className="md:p-[56px] p-5 flex flex-col justify-between">
          <div>
            <h1 className="xl:text-[35px] md:text-[28px] text-[18px] xl:leading-[42px] md:leading-[35px] leading-[24px] font-bold">
              {title}
            </h1>
            <p className="text-[16px] leading-[20px] mt-[17px]">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="text-[16px] leading-[20px] text-[#3980A0] hover:text-[#0791BB] md:flex gap-2 items-center hidden"
          >
            {linkText}
            <span className="">
              <FaArrowRightLong className="text-[18px]" />
            </span>
          </Link>
        </div>
        <div className="md:p-0 p-[0px_20px_20px_20px]">
          <Image
            src={img}
            alt="info"
            width={300}
            height={300}
            className="w-full md:max-w-auto md:m-auto xl:max-w-[448px] max-w-[320px] h-auto my-auto"
          />
          <div className="pl-[20px] md:hidden">
            <Link
              href={href}
              className="text-[16px] leading-[20px] text-[#3980A0] hover:text-[#0791BB]"
            >
              <FaArrowRightLong className="text-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
