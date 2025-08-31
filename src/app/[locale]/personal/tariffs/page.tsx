import { infoTableData } from "@/constants/main-page/infoTables";
import DownloadFile from "@/ui/main-page/link/DownloadFile";
import InfoTables from "@/ui/main-page/tables/InfoTables";
import { useTranslations } from "next-intl";

export default function Tariffs() {
  const t = useTranslations();

  return (
    <div className="container-2md">
      <h1 className="md:display2 md:my-6 my-4 md:text-[32px] text-[24px] font-semibold">
        {t("Tariffs.title")}
      </h1>
      <InfoTables data={infoTableData} />
      <DownloadFile
        href={`/personal_tariffs_document.pdf`}
        docname={t("Tariffs.title")}
        size="5.38 Mb"
        download="Тарофаи СМ барои Шахсони воқеӣ.pdf"
      />
    </div>
  );
}
