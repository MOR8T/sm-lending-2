import { ReactNode } from "react";
import "./style.css";

export default function ButtonFon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`not-found-button text-white p-[16px_32px] md:w-auto w-full rounded-[12px] text-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
