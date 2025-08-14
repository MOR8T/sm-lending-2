import { ReactNode } from "react";

export default function BannerButton({
  style,
  className,
  children,
}: {
  className?: string;
  // eslint-disable-next-line
  style: any;
  children: ReactNode;
}) {
  return (
    <button
      className={`text-[18px] p-[16px_32px] rounded-lg cursor-pointer font-bold md:w-auto w-full ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
