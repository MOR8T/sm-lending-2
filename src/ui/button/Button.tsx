import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  htmlType?: string;
  children: ReactNode;
  className?: string;
};

export default function Button({
  onClick = () => {},
  htmlType = "button",
  children,
  className = "",
}: Props) {
  return (
    <button
      //   htmlType={htmlType}
      onClick={onClick}
      //   className={`w-[152px] h-[53px] rounded-[30px] bg-[rgba(49,82,102,1)] text-white text-[14px] leading-[16px] font-[500] ${className}`}
      className={`md:w-[152px] md:min-w-[152px] w-auto min-w-[80px] md:h-[53px] h-[44px] md:rounded-[30px] rounded-[22px] bg-[rgba(49,82,102,1)] text-white md:text-[14px] text-[12px] leading-[16px] font-[500] whitespace-nowrap px-[16px] md:px-[20px] ${className}`}
    >
      {children}
    </button>
  );
}
