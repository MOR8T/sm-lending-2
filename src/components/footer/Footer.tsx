// import googlePlay from "@/../public/icons/google_play_black.svg";
// import appStore from "@/../public/icons/app_store_black.svg";
import Image from "next/image";
import React from "react";
// import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerLinks } from "@/constants/const";

function TitleWithDesc({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-[20px] mb-2">{title}</h3>
      <p className="text-[14px]">{description}</p>
    </div>
  );
}

function Footer() {
  // const t = useTranslations("Footer");

  return (
    <div className="bg-[rgba(34,34,34,1)] min-h-[614px] md:p-[80px_0px] p-[24px_0px_29px_0px] mt-[150px]">
      <div className="container-lg text-white text-[14px]">
        <div className="xl:px-0 md:px-[20px]">
          <div className="grid lg:grid-cols-[260px_350px_288px] md:grid-cols-[260px_192px] grid-cols-1 md:gap-[115px] gap-8">
            <div className="flex flex-col md:gap-8 gap-5">
              <div className="">
                <Image
                  src={`/images/footer_logo.svg`}
                  alt=""
                  width="172"
                  height="40"
                  className="pt-[6px]"
                />
              </div>
              <p>ш.Душанбе, кучаи Шевченко 113 </p>
              <TitleWithDesc
                title="info@sm.tj"
                description="Для онлайн-обращений"
              />
            </div>
            <div className="flex flex-col gap-8 max-w-[192px] ">
              <TitleWithDesc
                title="44-603-20-20"
                description="Для звонков из любой точки мира"
              />{" "}
              <TitleWithDesc
                title="+992 44 600 1520"
                description="Телефон доверия Национального банка Таджикистана для жалоб и обращений"
              />
            </div>
            <div>
              {/* <div>
                <p>Ҳамёни мобилӣ</p>
                <div className="flex gap-[5px] mt-[10px]">
                  <Image
                    src={googlePlay}
                    alt="google_play"
                    width={136}
                    height={40}
                  />
                  <Image
                    src={appStore}
                    alt="app_store"
                    width={136}
                    height={40}
                  />
                </div>
              </div> */}
              <div className="">
                <p>Соцмедиа</p>
                <div className="flex flex-wrap gap-8 mt-[12px]">
                  {footerLinks.map((el) => {
                    return (
                      <Link href={el.href} key={el.alt}>
                        <Image
                          src={el.img}
                          alt={el.alt}
                          width={40}
                          height={40}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <ul className="md:py-[38px] py-[24px] md:mb-[40px] mb-[24px] md:mt-[60px] mt-[40px] flex flex-wrap md:justify-between md:gap-13 gap-6 border-y border-[rgba(255,255,255,0.1)]">
            <li>Главная</li>
            <li> Частным лицам</li>
            <li>Юридическим лицам</li>
            <li>О нас</li>
            <li>Лицензия</li>
            <li>Реквизиты</li>
            <li>Контакты</li>
          </ul>
          <ul className="flex md:gap-13 gap-8 flex-wrap justify-between">
            <li>© 2025</li>
            <li>№000331 от 8 ноября 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
