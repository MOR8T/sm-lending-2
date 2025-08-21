import { ReactNode } from "react";

export default function BorderButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`text-[#3980A0] text-[16px] leading-[20px] border border-[#3980A0] p-[12px_24px] rounded-[12px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
