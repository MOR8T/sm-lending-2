import { BannerButtonT } from "@/types/main-page/ui/types";

export default function BannerButton({
  style,
  className,
  children,
}: BannerButtonT) {
  return (
    <button
      className={`text-[18px] p-[16px_32px] rounded-lg cursor-pointer font-bold md:w-auto w-full ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
