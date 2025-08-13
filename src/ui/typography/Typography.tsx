import { ReactNode } from "react";

type Props = { type: string; children: ReactNode; className?: string };

export default function Typography({
  type,
  children,
  className = "",
  ...props
}: Props) {
  switch (type) {
    case "title1": {
      return (
        <h1
          className={`lg:text-[62px] lg:leading-[75px] text-[26px] leading-[34px] ${className}`}
        >
          {children}
        </h1>
      );
    }
    case "title2": {
      return (
        <h2
          className={`lg:text-[45px] lg:leading-[59px] text-[24px] leading-[34px] ${className}`}
        >
          {children}
        </h2>
      );
    }
    case "title3": {
      return (
        <h3
          className={`lg:text-[45px] lg:leading-[55px] text-[20px] leading-[34px] ${className}`}
        >
          {children}
        </h3>
      );
    }
    case "title4": {
      return (
        <h4
          className={`lg:text-[18px] lg:leading-[24px] text-[15px] leading-[24px] ${className}`}
        >
          {children}
        </h4>
      );
    }
    case "title5": {
      return (
        <h4
          className={`lg:text-[18px] lg:leading-[24px] text-[15px] leading-[24px] ${className}`}
        >
          {children}
        </h4>
      );
    }
    case "description1": {
      return (
        <h3
          className={`lg:text-[20px] lg:leading-[33.6px] text-[15px] leading-[24px] ${className}`}
        >
          {children}
        </h3>
      );
    }
    default: {
      return (
        <p className={`${className}`} {...props}>
          {children}
        </p>
      );
    }
  }
}
