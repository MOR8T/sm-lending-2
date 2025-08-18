import React from "react";
import { Dropdown } from "antd";
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
          className="text-[#595959] hover:text-[#3980A0] text-[16px] leading-[22.4px] flex items-center gap-[5px] cursor-pointer transition duration-100"
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
