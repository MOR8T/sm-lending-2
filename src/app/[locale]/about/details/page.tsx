import { useTranslations } from "next-intl";
import Image from "next/image";
import eu_flag from "@/../public/icons/currency/eu.svg";
import rub_flag from "@/../public/icons/currency/rub.svg";
import tjk_flag from "@/../public/icons/currency/tjk.svg";
import usd_flag from "@/../public/icons/currency/usd.svg";

export default function Details() {
  const t = useTranslations();
  const data = [
    {
      title: "Бонки миллии Тоҷикистон",
      data: [
        {
          img: eu_flag,
          title: "EURO",
          code: "20602978718161",
        },
        {
          img: usd_flag,
          title: "USD",
          code: "20602840118161",
        },
        {
          img: tjk_flag,
          title: "SOMONI",
          code: "20402972118161",
        },
        {
          img: rub_flag,
          title: "RUB",
          code: "20602810818161",
        },
      ],
    },
    {
      title: 'ҶСК "Алифбонк"',
      data: [
        {
          img: tjk_flag,
          title: "SOMONI",
          code: "20602972400082684201",
        },
        {
          img: rub_flag,
          title: "RUB",
          code: "20604810900082684201",
        },
        {
          img: usd_flag,
          title: "USD",
          code: "20604840200082684201",
        },
        {
          img: eu_flag,
          title: "EURO",
          code: "20206978800082684201",
        },
      ],
    },
    {
      title: 'ҶСП "Бонки байналмиллалии Тоҷикистон"',
      data: [
        {
          img: tjk_flag,
          title: "SOMONI",
          code: "22202972400046640001",
        },
        {
          img: rub_flag,
          title: "RUB",
          code: "22204810500466400001",
        },
        {
          img: usd_flag,
          title: "USD",
          code: "22204840800466400001",
        },
        {
          img: eu_flag,
          title: "EURO",
          code: "22204978400466400001",
        },
      ],
    },
  ];

  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        {t("Subheader.about.details")}
      </h1>
      <div className="grid gap-10">
        {data.map((el) => {
          return (
            <div key={el.title} className="">
              <h2 className="text-[#282828] md:text-[20px] text-[18px] font-semibold md:leading-6 leading-[22px] md:mt-[24px] mb-[16px]">
                {el.title}
              </h2>
              <div className="mt-[16px] grid md:grid-cols-2 gap-4">
                {el.data.map((item) => {
                  return (
                    <div key={item.code}>
                      <div className="grid grid-cols-[32px_1fr] gap-4 md:p-6 p-4 rounded-[16px] bg-[#F5F5F5]">
                        <Image
                          src={item.img}
                          alt="flag"
                          width={32}
                          height={32}
                          className="w-[32px] h-[32px]"
                        />
                        <div>
                          <p className="text-[#595959] md:text-[20px] text-[18px] md:leading-6 leading-[22px]">
                            {item.title}
                          </p>
                          <p className="text-[#282828] md:text-[20px] text-[18px] font-semibold md:leading-6 leading-[22px]">
                            {item.code}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
