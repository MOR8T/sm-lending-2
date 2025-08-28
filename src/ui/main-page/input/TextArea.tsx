import React from "react";

interface TextAreaT {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export default function TextArea({
  className = "",
  placeholder = "",
  value,
  onChange = () => {},
  rows = 2,
}: TextAreaT) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full bg-white rounded-[8px] text-[#595959] md:text-[16px] text-[18px] p-[13px_20px] outline-none ${className}`}
    />
  );
}
