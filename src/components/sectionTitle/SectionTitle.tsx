import { SectionTitleT } from "@/types/main-page/ui/types";

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleT) {
  return (
    <h1
      className={`md:display2 md:my-[38px] my-4 md:text-[32px] text-[24px] font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}
