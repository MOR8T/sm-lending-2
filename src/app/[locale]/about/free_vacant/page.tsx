import { Empty } from "antd";
import { useTranslations } from "next-intl";

export default function Details() {
  const t = useTranslations("Free_vacant");

  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        {t("title")}
      </h1>
      <div className="grid gap-10">
        <p className="text-[16px] leading-6">
          <Empty description={t("empty")} />
        </p>
      </div>
    </div>
  );
}
