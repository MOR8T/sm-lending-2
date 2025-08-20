import { LabelT } from "@/types/main-page/ui/types";

export default function Label({ children, name = "" }: LabelT) {
  return (
    <label
      htmlFor={name}
      className="md:text-[20px] text-[18px] font-semibold text-[#595959]"
    >
      {children}
    </label>
  );
}
