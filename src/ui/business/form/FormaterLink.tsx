import React from "react";

export function TextWithDollarLinks({ text }: { text: string }) {
  const customLinkRegex = /([^:]+):(https?:\/\/[^\s]+)/g;

  const parseText = (text: string) => {
    const parts = text.split(/([^:]+:https?:\/\/[^\s]+)/g);

    return parts.map((part, index) => {
      const match = part.match(customLinkRegex);
      if (match) {
        const [anchor, url] = part.split(":");
        return (<>
        {anchor.split("(")[0]}
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
            className="text-[#39B980]"
          >
            {anchor.split("(")[1].split(")")[0]}
          </a>
        </>);
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return <p className="text-white text-[14px] leading-[18px] md:w-[240px]">{parseText(text)}</p>;
}
