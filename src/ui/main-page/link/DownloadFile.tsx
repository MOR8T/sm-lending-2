"use client";
import pdf_icon from "@/../public/icons/pdf_file.svg";
import download_icon from "@/../public/icons/download_icon.svg";
import Image from "next/image";

interface DownloadFileT {
  href: string;
  download?: string;
  size: string;
  docname: string;
  className?: string;
}

export default function DownloadFile({
  href,
  download = "file.pdf",
  size,
  docname,
  className = "",
}: DownloadFileT) {
  return (
    <div className={`mt-[30px] ${className}`}>
      <a
        href={href}
        // target="_blank"
        download={download}
        // rel="noopener noreferrer"
      >
        <div className="max-w-[193px] h-[221px] border-[2px] border-[#F0F0F0] rounded-[12px] p-[24px_20px] flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image src={pdf_icon} alt="pdf_file" width={81.52} height={100} />
            <p className="text-[#282828] text-[14px] leading-[17px]">
              {docname}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#54545A] text-[14px] leading-[17px]">{size}</p>
            <Image
              src={download_icon}
              alt="download_file"
              width={24}
              height={24}
            />
          </div>
        </div>
      </a>
    </div>
  );
}
