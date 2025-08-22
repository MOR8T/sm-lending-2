import { ItemsT } from "@/types/main-page/ui/types";
import React from "react";

const activeClass = "border-[#3980A0] text-[#3980A0]";
const disactiveClass = "border-[#8C8C8C] text-[#8C8C8C]";

export default function Items({
  onChange = () => {},
  value,
  items,
  size = "small",
}: ItemsT) {
  const sizeClass = {
    small: "pb-[12px] px-[12px] text-[14px]",
    medium: "pb-[8px] px-[12px] text-[16px]",
  };
  return (
    <ul className="flex">
      {items.map((el) => {
        return (
          <li
            key={el.value}
            className={`${sizeClass[size]} border-b cursor-pointer ${
              el.value === value ? activeClass : disactiveClass
            }`}
            onClick={() => onChange(el.value)}
          >
            {el.label}
          </li>
        );
      })}
    </ul>
  );
}
