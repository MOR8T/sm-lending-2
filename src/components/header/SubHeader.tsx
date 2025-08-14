import Link from "next/link";
import React from "react";

function SubHeader({ data }: { data: { href: string; label: string }[] }) {
  return (
    <div className="container">
      <ul className="text-[16px] md:px-[20px] mt-6 pb-6 text-gray-400 font-medium flex gap-6 overflow-x-auto">
        {data.map((el) => {
          return (
            <li
              key={el.label}
              className="hover:text-[#3a6178] font-medium text-nowrap"
            >
              <Link href={el.href} className="">
                {el.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubHeader;
