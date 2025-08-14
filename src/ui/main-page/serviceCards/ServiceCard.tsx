import { Link } from "@/i18n/navigation";
import { ServiceCardT } from "@/types/main-page/ui/types";
import Image from "next/image";
import React from "react";

export default function ServiceCard({ img, text, href }: ServiceCardT) {
  return (
    <Link href={href}>
      <div className="md:pb-[27px] pb-[27px] md:pt-0 pt-[27px] md:w-[168px] w-full h-[214px] bg-[#F7F8F9] hover:bg-[#3980A0] hover:text-white rounded-[20px] flex md:flex-col flex-col-reverse justify-between transition duration-150">
        <Image
          src={img}
          alt={text}
          width={168}
          height={120}
          className="w-full h-auto max-h-[112px]"
        />
        <div className="px-[20px]">
          <p className="text-[15px] leading-5 ">{text}</p>
        </div>
      </div>
    </Link>
  );
}
