"use client";
import { ReactNode } from "react";
import "./style.css";

export default function ButtonFon({
  children,
  className = "",
  onClick = () => {},
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer bg-linear-to-b hover:to-0% from-[#3980a0] to-[#054e6e] active:to-[#bbdbe6] transition duration-100 text-white p-[16px_32px] md:w-auto w-full rounded-[12px] text-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
