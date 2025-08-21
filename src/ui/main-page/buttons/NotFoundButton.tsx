import { ReactNode } from "react";
import "./style.css";

export default function NotFoundButton({ children }: { children: ReactNode }) {
  return (
    <button className="not-found-button text-white p-[16px_32px] md:w-auto w-full rounded-[12px] text-[16px]">
      {children}
    </button>
  );
}
