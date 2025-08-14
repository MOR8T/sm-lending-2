import { useLocale } from "next-intl";
import googlePlay from "@/../public/icons/google_play_black.svg";
import appStore from "@/../public/icons/app_store_black.svg";
import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants/const";
import Link from "next/link";

function Footer() {
  const locale = useLocale();

  return (
    <div className="bg-[rgba(34,34,34,1)] min-h-[653px] py-[80px] mt-[150px]">
      <div className="container text-white md:text-[16px] text-[14px]">
        <div className="xl:px-0 md:px-[60px]">
        <div className="grid lg:grid-cols-[260px_192px_288px] md:grid-cols-[260px_192px] grid-cols-1 md:gap-[150px] gap-8">
          <div className="flex flex-col md:gap-[30px] gap-5">
            <Image
              src={`/images/Logo_${locale}.svg`}
              alt=""
              width="271"
              height="45"
              className="pt-[6px]"
            />
            <p>ш.Душанбе, кучаи Шевченко 113</p>
            <p>Филиал ва нуқтаҳои хизматрасонӣ</p>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div>
              <h3 className="md:text-[24px] text-[20px] leading-[32px]">+44-603-20-20</h3>
              <p>Барои зангҳо дар дохили Тоҷикистон</p>
            </div>
            {/* <div>
              <h3 className="md:text-[24px] text-[20px] leading-[32px]">+992 48 888 1111</h3>
              <p>Барои зангҳо аз хориҷи кишвар</p>
            </div> */}
            <div>
              <h3 className="md:text-[24px] text-[20px] leading-[32px]">+992 44 600 1520</h3>
              <p>
                Телефони боварии Бонки миллии Тоҷикистон барои арзу шикоятҳо
              </p>
            </div>
            <div>
              <h3 className="md:text-[24px] text-[20px] leading-[32px]">info@sm.tj</h3>
              <p>Барои онлайн-муроҷиатҳо</p>
            </div>
          </div>
          <div>
            <div>
              <p>Ҳамёни мобилӣ</p>
              <div className="flex gap-[5px] mt-[10px]">
                <Image
                  src={googlePlay}
                  alt="google_play"
                  width={136}
                  height={40}
                />
                <Image src={appStore} alt="app_store" width={136} height={40} />
              </div>
            </div>
            {/* <div className="mt-[50px]">
              <p>Ҳамёни мобилӣ</p>
              <div className="flex flex-wrap gap-8 mt-[10px]">
                {footerLinks.map((el) => {
                  return (
                    <Link href={el.href} key={el.alt}>
                      <Image src={el.img} alt={el.alt} width={40} height={40} />
                    </Link>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
        <ul className="py-[39px] my-[39px] flex flex-wrap md:gap-13 gap-8 border-y border-[rgba(255,255,255,0.1)]">
          <li>Дар бораи мо</li>
          <li> Суроғаҳо ва реҷаи корӣ</li>
          <li>Ҳуҷҷатҳо ва тарофаҳо</li>
          <li>Ҷойҳои кор</li>
          <li>Робита бо мо</li>
        </ul>
        <ul className="flex md:gap-13 gap-8 flex-wrap justify-between">
          <li>© 2025 ҶДММ ТАҚХ “СТАНДАРТ МОЛИЯ”</li>
          <li> Иҷозатномаи БМТ 000331 аз 08.11.2024</li>
          {/* <li className="max-w-[376] text-right">
            ҶДММ ТАҚХ “СТАНДАРТ МОЛИЯ” узви Хазинаи суғуртаи амонату пасандозҳои Тоҷикистон
            мебошад
          </li> */}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
