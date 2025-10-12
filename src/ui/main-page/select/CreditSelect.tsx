import { Dropdown } from "antd";
import React from "react";
import arrow_down_icon from "@/../public/icons/arrow_down.svg";
import Image from "next/image";
import Label from "../label/Label";
import { CreditSelectT } from "@/types/main-page/ui/types";

export default function CreditSelect({
  value,
  label,
  items,
  className = "",
  placeholder = "---",
}: CreditSelectT) {
  return (
    <div className={className}>
      {label ? <Label>{label}</Label> : null}
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        trigger={["click"]}
        className="max-h-[100px]"
      >
        <button className="w-full bg-white rounded-[8px] text-[#595959] md:text-[16px] text-[18px] p-[13px_20px] flex items-center justify-between gap-3 outline-none">
          {value || (
            <span className="text-[#595959] opacity-50">{placeholder}</span>
          )}
          <Image src={arrow_down_icon} alt="" width={24} height={24} />
        </button>
      </Dropdown>
    </div>
  );
}
