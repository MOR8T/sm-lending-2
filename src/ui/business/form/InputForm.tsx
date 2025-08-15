import { InputFromT } from "@/types/business/formNP";
import React from "react";

export default function InputForm({
  keyID,
  title,
  onChange,
  placeholder,
  value,
  error,
}: InputFromT) {
  return (
    <label className="flex flex-col gap-[4px] mb-[32px]" htmlFor={keyID}>
      <span className="text-white md:text-[16px] md:leading-[20px] text-[14px] leading-[18px]">
        {title}
      </span>
      <input
        className="bg-white mt-0.5 w-full rounded-lg border-none p-0 md:px-[20px] md:py-[22px] py-[16px] text-lg leading-7 text-black placeholder-darkGrey outline-none focus:ring-0"
        id={keyID}
        type="text"
        onChange={(e) => onChange(keyID, e.target.value)}
        placeholder={placeholder}
        value={value}
      />
      <p
        className="text-red-600"
        style={{ display: error?.[keyID] ? "block" : "none" }}
      >
        {error?.[keyID]}
      </p>
    </label>
  );
}
