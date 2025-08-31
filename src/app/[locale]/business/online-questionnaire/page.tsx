import bank_image from "@/../public/images/online-questionnaire/1.svg";
import { useTranslations } from "next-intl";
import OnlineQuestionnaireForm from "@/ui/main-page/form/OnlineQuestionnaireForm";
import SectionInfo from "@/components/sectionInfo/SectionInfo";

export default function OnlineQuestionnaire() {
  const t = useTranslations("OnlineQuestionnaire");

  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={t("title")}
        description={t("description")}
        img={bank_image}
      />
      <div className="container-2md md:mt-[60px] mt-[40px]">
        <OnlineQuestionnaireForm />
      </div>
    </div>
  );
}
