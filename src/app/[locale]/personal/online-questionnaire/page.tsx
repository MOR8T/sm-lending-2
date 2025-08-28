import Image from "next/image";
import bank_image from "@/../public/images/online-questionnaire/1.svg";
import { useTranslations } from "next-intl";

export default function OnlineQuestionnaire() {
  const t = useTranslations("OnlineQuestionnaire");

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
      <div className="container-2md md:mt-[60px] mt-[40px]"></div>
    </div>
  );
}
