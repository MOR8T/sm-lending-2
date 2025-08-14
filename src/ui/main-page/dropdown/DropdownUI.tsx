import React from "react";
import { Dropdown } from "antd";
import { ItemType } from "antd/es/menu/interface";
import Image from "next/image";
import { DropdownUIT } from "@/types/main-page/ui/types";

function DropdownUI({ text, items }: DropdownUIT) {
  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        arrow
        trigger={["click"]}
      >
        <button
          onClick={() => {}}
          className="text-[#1F2937] text-[15px] leading-[19px] flex items-center gap-[15px] cursor-pointer"
        >
          {text}
          <Image
            src="/images/headerArrowDown.svg"
            alt="arrow down"
            className="w-[11px] h-[16px]"
            width="11"
            height="16"
          />
        </button>
      </Dropdown>
    </div>
  );
}

export default DropdownUI;
