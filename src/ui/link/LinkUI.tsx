import { Link } from "@/i18n/navigation";
import { ReactNode } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function LinkUI({ href, children, className='' }: Props) {
  return (
    <Link
      href={href}
      className={`text-[#315266] text-[14px] leading-[16px] font-600 space-x-[0.32px] flex items-end ${className}`}
    >
      {children}
      <span className="font-[400] ml-[5px]">
        <BiRightArrowAlt />
      </span>
    </Link>
  );
}
