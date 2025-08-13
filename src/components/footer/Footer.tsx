"use client";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import "@/styles/index.css";
import "@/styles/footer_style.css";
import LocaleSwicherSelect from "../localeSwicherSelect/LocaleSwicherSelect";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <div className="bg-[#F6F7F8] text-[rgba(31,41,55,1)]">
      <div className="py-[32px] md:py-[50px] container">
        <div className="bg-white rounded-[30px] lg:mt-0 mt-[20px]">
          <div>
            <p className="text-[#4B5563] text-[14px] leading-[26px] px-4 py-6 lg:p-[50px_72px] ">
              {t("deposits_insured_text")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-start md:justify-end container md:p-[16px_72px_50px_72px] p-[16px_16px_0px_16px]">
          {/* <p className="text-[14px] leading-[24px]">{t("europe_en")}</p> */}
          <LocaleSwicherSelect />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-0 container px-4 md:px-[72px] mt-4 md:mt-0">
          <div>
            <p className="text-[14px] leading-[19.6px]">{t("company_team")}</p>
            <div className="flex flex-col text-[14px] leading-[21.7px] underline mt-[18px]">
              <Link href="">{t("about_us")}</Link>
              <Link href="">{t("careers")}</Link>
              <Link href="">{t("blog")}</Link>
              <Link href="">{t("partners")}</Link>
              <Link href="">{t("help_centre")}</Link>
            </div>
          </div>
          <div>
            <p className="text-[14px] leading-[19.6px]">{t("products")}</p>
            <div className="flex flex-col text-[14px] leading-[21.7px] underline mt-[18px]">
              <Link href="">{t("instant_bills")}</Link>
              <Link href="">{t("joint_accounts")}</Link>
              <Link href="">{t("large_amount_transfer")}</Link>
              <Link href="">{t("receive_money")}</Link>
            </div>
          </div>
          <div>
            <p className="text-[14px] leading-[19.6px]">{t("resources")}</p>
            <div className="flex flex-col text-[14px] leading-[21.7px] underline mt-[18px]">
              <Link href="">{t("news_blog")}</Link>
              <Link href="">{t("research_privacy_policy")}</Link>
              <Link href="">{t("currency_converter")}</Link>
              <Link href="">{t("invoice_generator")}</Link>
            </div>
          </div>
          <div>
            <p className="text-[14px] leading-[19.6px]">{t("follow_us")}</p>
            <div className="flex gap-[12px] text-[14px] leading-[21.7px] underline mt-[18px]">
              <a target="_blank" href="#">
                <Image
                  src="/images/fc_black.svg"
                  alt="facebook black"
                  className="w-[24px] h-[24px]"
                  width="24"
                  height="24"
                />
              </a>
              <a target="_blank" href="#">
                <Image
                  src="/images/ins_black.svg"
                  alt="instagram black"
                  className="w-[24px] h-[24px]"
                  width="24"
                  height="24"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center md:flex-row md:justify-between px-4 md:p-[50px_72px] gap-6 md:gap-0 mt-8 md:mt-0">
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <h3 className="text-[18px] leading-[27px] mb-2 md:mb-0 text-center md:text-left">
              {t("follow_latest_news")}
            </h3>
            <input
              className="w-full md:w-[394.66px] h-[49px] border-b border-black bg-inherit outline-none px-[10px]"
              placeholder={t("email_address")}
            />
          </div>
          <div className="flex gap-4 md:gap-[] justify-center w-full md:w-auto">
            <a target="_blank" href="#">
              <Image
                src="/images/app_store.svg"
                alt="App Store"
                className="w-[138px] h-[40px]"
                width="138"
                height="40"
              />
            </a>
            <a target="_blank" href="#">
              <Image
                src="/images/google_play.svg"
                alt="Google Play"
                className="w-[138px] h-[40px]"
                width="138"
                height="40"
              />
            </a>
          </div>
        </div>
        <div className="border-t border-[#1F2937] opacity-5 mt-8 md:mt-0"></div>
        <div className="container flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6 md:gap-[100px] px-4 md:p-[33px_72px] mt-8 md:mt-0">
          <div className="flex justify-center md:block w-full md:w-auto">
            <Link href="/">
              <Image
                src={`/images/Logo_${locale}.svg`}
                alt="Standart Moliya"
                className="w-[180px] md:w-[241px] h-[28px] md:h-[33px]"
                width="241"
                height="33"
              />
            </Link>
          </div>
          <div className="text-[14px] leading-[21.7px] underline flex flex-col md:flex-row items-center gap-4 md:gap-[113px] w-full md:w-auto justify-center md:justify-start">
            <Link href="">{t("legal_complaints")}</Link>
            <Link href="">{t("privacy_policy")}</Link>
            <Link href="">{t("cookie_policy")}</Link>
          </div>
        </div>
        <div className="flex justify-center pt-8 pb-8 md:pt-[88px] md:pb-[88px] px-4">
          <p className="text-[14px] laeding-[21.7px] text-center max-w-[742px]">
            {t("reliable_financial_institution")}
          </p>
        </div>
      </div>
    </div>
  );
}
