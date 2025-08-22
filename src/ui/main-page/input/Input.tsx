import React from "react";

interface InputT {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  className = "",
  placeholder = "",
  value,
  onChange = () => {},
}: InputT) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-white rounded-[8px] text-[#595959] md:text-[16px] text-[18px] p-[13px_20px] outline-none ${className}`}
    />
  );
}
