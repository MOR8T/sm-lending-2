import Image from "next/image";
import bank_image from "@/../public/images/tequirements/1.svg";
import OpenAnAccountForm from "@/ui/main-page/form/OpenAnAccountForm";
import { useTranslations } from "next-intl";

export default function Tequirements() {
  const t = useTranslations("Tequirements");

  return (
    <div className="text-[#595959]">
      <div className="w-full bg-[#DBECF2] md:py-8 py-10">
        <div className="container-2md md:grid md:grid-cols-2 flex flex-col-reverse gap-2">
          <div className="max-w-[461px] md:mx-0 mx-auto flex flex-col justify-center md:items-start items-center md:text-left text-center ">
            <h1 className="text-[#262626] md:text-[32px] md:leading-8 text-[20px] leading-5 font-semibold">
              {t("title")}
            </h1>
            <p className="text-[16px] leading-[18px] mt-[12px]">
              {t("description")}
            </p>
          </div>
          <div className="flex md:justify-end justify-center">
            <Image
              src={bank_image}
              alt="bank"
              width={326}
              height={258}
              className="md:w-[326px] md:h-[258px] w-[200px] h-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="container-2md md:mt-[60px] mt-[40px]">
        <h2 className="text-[#262626] md:text-[24px] text-[20px] leading-5 mb-6 font-semibold">
          {t("title2")}
        </h2>
        <div className="text-[16px] leading-6">
          <p>{t("text1")}</p>
          <ul className="list-disc ml-[20px]">
            <li className="font-bold">{t("text2")}</li>
            <li className="font-bold">{t("text3")}</li>
            <li>
              <span className="font-bold">{t("text4")}</span> {t("text5")}
            </li>
            <li>
              <span className="font-bold">{t("text6")}</span> {t("text7")}
            </li>
          </ul>
        </div>
        <OpenAnAccountForm />
      </div>
    </div>
  );
}
