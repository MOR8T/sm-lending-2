import React from "react";
interface ShowInfoT {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}
export default function ShowInfo({
  label,
  value,
  className = "",
  labelClassName = "",
  valueClassName = "",
}: ShowInfoT) {
  return (
    <div className={` ${className}`}>
      <p
        className={`md:text-[16px] text-[14px] text-[#8C8C8C] md:leading-6 leading-[14px] ${labelClassName}`}
      >
        {label}
      </p>
      <h4
        className={`md:text-[20px] text-[16px] md:leading-5 leading-4 font-bold ${valueClassName}`}
      >
        {value}
      </h4>
    </div>
  );
}
