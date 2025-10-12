import googlePlay from "@/../public/icons/google_play_black.svg";
import appStore from "@/../public/icons/app_store_black.svg";
import Image from "next/image";
import React from "react";
// import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { footerLinks } from "@/constants/const";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Footer");

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
              <p>{t("address")} </p>
              <TitleWithDesc
                title="info@sm.tj"
                description={`${t("online_service")}`}
              />
            </div>
            <div className="flex flex-col gap-8 max-w-[192px] ">
              <TitleWithDesc
                title="44-603-20-20"
                description={`${t("call_everywhere")}`}
              />{" "}
              <TitleWithDesc
                title="+992 44 600 1520"
                description={`${t("call_number")}`}
              />
            </div>
            <div>
              <div>
                <p>{t("mobile_app")}</p>
                <div className="flex flex-wrap gap-[14px] my-[10px]">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.smart.mobile_banking&hl=ru"
                    target="_blank"
                  >
                    <Image
                      src={googlePlay}
                      alt="google_play"
                      width={128}
                      height={44}
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/tj/app/sm-pay/id6752281265"
                    target="_blank"
                  >
                    <Image
                      src={appStore}
                      alt="app_store"
                      width={128}
                      height={44}
                    />
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <p>{t("social")}</p>
                <div className="flex flex-wrap gap-8 mt-[12px]">
                  {footerLinks.map((el) => {
                    return (
                      <a href={el.href} key={el.alt} target="_blank">
                        <Image
                          src={el.img}
                          alt={el.alt}
                          width={40}
                          height={40}
                        />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-8">
                  <a
                    href="/Тартиби_кор_бо_истеъмолкунандагони_СМ.pdf"
                    download
                    className="underline"
                  >
                    {t("consumer_right")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="md:py-[38px] py-[24px] md:mb-[40px] mb-[24px] md:mt-[60px] mt-[40px] flex flex-wrap md:justify-between md:gap-13 gap-6 border-y border-[rgba(255,255,255,0.1)]">
            <Link href="/">
              <li>{t("main")}</li>
            </Link>
            <Link href="/personal/deposits">
              <li>{t("personal")}</li>
            </Link>
            <Link href="/business/deposits">
              <li>{t("business")}</li>
            </Link>
            <Link href="/about/about">
              <li>{t("about_us")}</li>
            </Link>
            <li>{t("license")}</li>
            <Link href="/about/details">
              <li>{t("details")}</li>
            </Link>
            {/* <li>{t("contact")}</li> */}
            <Link href='/about/free_vacant'>
            <li>{t("free_vacant")}</li>
            </Link>
          </ul>
          <ul className="flex md:gap-13 gap-8 flex-wrap justify-between">
            <li>© 2025</li>
            <li>{t("date")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
