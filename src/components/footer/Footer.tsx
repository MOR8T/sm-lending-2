import googlePlay from "@/../public/icons/google_play_black.svg";
import appStore from "@/../public/icons/app_store_black.svg";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
function Footer() {
  const t = useTranslations("Footer");

  const data = [
    // {
    //   title: "Шаҳодатнома дар бораи бақайдгирии давлатӣ:",
    //   description: "№0309053 аз 18.06.с2024",
    // },
    // {
    //   title: "Иҷозатномаи БМТ:",
    //   description: "№0000331",
    // },
    // {
    //   title: "Индекс:",
    //   description: "734025, ҶТ",
    // },
    // {
    //   title: "Маркази тамос:",
    //   description: "+992 44 603 20 20",
    // },
    // {
    //   title: "Барои саволҳои умумӣ:",
    //   description: "+ 992 (44) 603 20 20, 44 603 15 15",
    // },
    // {
    //   title: "Почтаи электронӣ:",
    //   description: "info@sm.tj",
    // },
    // {
    //   title: "Суроғаи ҳуқуқӣ:",
    //   description: "ш.Душанбе, н.И.Сомонӣ, куч.Шевченко 113",
    // },
    {
      title: "Реҷаи корӣ:",
      description: "Душанбе то ҷумъа аз 08:00 то 17:00",
    },
    {
      title: "Шанбе:",
      description: " аз 09:00 то 11:00",
    },
    {
      title: "Рӯзҳои истироҳат:",
      description: "Шанбе, Якшанбе",
    },
    // {
    //   title: "Маркази тамос:",
    //   description: "(44) 603 20 20",
    // },
    // {
    //   title: "Тел. боварии БМТ:",
    //   description: "(44) 600 15 20 ё почтаи электронӣ: ALLOMUSHTARI@NBT.TJ",
    // },
    {
      title: "Қабули шаҳрвандон:",
      description: "",
    },
    {
      title: "Рӯз ва соатҳои қабул:",
      description: "",
    },
    {
      title: "Директори генералӣ:",
      description: "АШУРОВ АКМАЛҶОН НУСРАТОВИЧ",
    },
  ];
  return (
    <div className="bg-[rgba(34,34,34,1)] min-h-[653px] py-[80px] mt-[150px]">
      <div className="container text-white md:text-[15px] text-[14px]">
        <div className="xl:px-0 md:px-[60px]">
          <div className="grid lg:grid-cols-[260px_192px_288px] md:grid-cols-[260px_192px] grid-cols-1 md:gap-[150px] gap-8">
            <div className="flex flex-col md:gap-[30px] gap-5">
              <div className="flex gap-[15px] items-center">
                <Image
                  src={`/images/logo_sm_white.png`}
                  alt=""
                  width="35"
                  height="35"
                  className="pt-[6px]"
                />
                <span className="text-[24px] leading-[35px]">{t("logo")}</span>
              </div>
              <p>Индекс: 734025, ҶТ</p>
              <p>
                Суроғаи ва суроғаи ҳуқуқӣ: ш.Душанбе, н.И.Сомонӣ, куч.Шевченко
                113
              </p>
              <p>
                Шаҳодатнома дар бораи бақайдгирии давлатӣ: №0309053 аз
                18.06.с2024
              </p>
              {/* <p>Филиал ва нуқтаҳои хизматрасонӣ</p> */}
            </div>
            <div className="flex flex-col gap-[30px] ">
              <div>
                <h3 className="md:text-[24px] text-[20px] leading-[32px]">
                  +992 44 603 2020
                </h3>
                <p>Барои зангҳо дар дохили Тоҷикистон</p>
              </div>
              <div>
                <h3 className="md:text-[24px] text-[20px] leading-[32px]">
                  +992 44 603 2020 +992 44 603 1515
                </h3>
                <p>Барои саволҳои умумӣ</p>
              </div>
              {/* <div>
              <h3 className="md:text-[24px] text-[20px] leading-[32px]">+992 48 888 1111</h3>
              <p>Барои зангҳо аз хориҷи кишвар</p>
            </div> */}
              <div>
                <h3 className="md:text-[24px] text-[20px] leading-[32px]">
                  +992 44 600 1520
                </h3>
                <p>
                  Телефони боварии Бонки миллии Тоҷикистон барои арзу шикоятҳо
                </p>
              </div>
              <div>
                <h3 className="md:text-[24px] text-[20px] leading-[32px]">
                  info@sm.tj
                </h3>
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
                  <Image
                    src={appStore}
                    alt="app_store"
                    width={136}
                    height={40}
                  />
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
          <div className="py-[39px] my-[39px] flex flex-wrap md:gap-13 gap-8 border-y border-[rgba(255,255,255,0.1)]">
            {data.map((el) => {
              return (
                <div key={el.title} className="">
                  <h4 className="text-[18px] leading-[22px] mb-[10px]">
                    {el.title}
                  </h4>
                  <p className="text-[16px] leading-[18px]">{el.description}</p>
                </div>
              );
            })}
            {/* <div>Дар бораи мо</div>
            <div> Суроғаҳо ва реҷаи корӣ</div>
            <div>Ҳуҷҷатҳо ва тарофаҳо</div>
            <div>Ҷойҳои кор</div>
            <div>Робита бо мо</div> */}
          </div>
          <ul className="flex md:gap-13 gap-8 flex-wrap justify-between">
            <li>© 2025 ҶДММ ТАҚХ “СТАНДАРТ МОЛИЯ”</li>
            <li> Иҷозатномаи БМТ №0000331 аз 08.11.2024</li>
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
