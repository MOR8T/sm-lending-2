import React from "react";
import Label from "../label/Label";
import { CurrencyInputT } from "@/types/main-page/ui/types";
import { Dropdown } from "antd";
import Image from "next/image";
import arrow_down_icon from "@/../public/icons/arrow_down.svg";

export default function Input({
  value,
  onChange = () => {},
  label = "",
  name = "",
  type = "text",
  currency = "",
  disabled = false,
  items = [],
}: CurrencyInputT) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <Label name={name}>{label}</Label> : null}
      <div className="bg-white rounded-[8px] grid grid-cols-[1fr_auto]">
        <input
          disabled={disabled}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="m-[13px_20px] text-[#595959] text-[16px] outline-none w-full"
        />
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
          <button className="text-[#595959] md:text-[16px] text-[18px] m-[13px_20px] w-[78px] flex items-center gap-3 outline-none">
            {currency}
            <Image src={arrow_down_icon} alt="" width={24} height={24} />
          </button>
        </Dropdown>
      </div>
    </div>
  );
}
