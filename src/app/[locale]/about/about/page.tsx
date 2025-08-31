"use client";
import bank_image from "@/../public/images/bank_with_location.svg";
import SectionInfo from "@/components/sectionInfo/SectionInfo";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={t("title")}
        description={t("description")}
        img={bank_image}
        textMaxWidth="max-w-[347px]"
      />
      <div className="container-2md md:mt-[60px] mt-[40px]">
        <h2 className="text-[#262626] md:text-[24px] text-[20px] leading-5 mb-6 font-semibold">
          {'Ҳадафҳои "СТАНДАРТ МОЛИЯ"'}
        </h2>
        <div>
          <p className="text-[16px] leading-6">
            ҶДММ ТАҚХ “СТАНДАРТ МОЛИЯ” санаи 8 ноябри соли 2024 Иҷозатномаи
            №000331 Бонки миллии Тоҷикистонро барои анҷом додани амалиёти бонкӣ
            гирифта, фаъолияти худро ҳамчун ташкилоти маблағгузории амонатии
            хурд оғоз кард.
          </p>
          <p className="text-[16px] leading-6">
            Мақсади мо – таъмини дастрасии аҳолӣ ба ҳисоббаробаркуниҳои
            ғайринақдӣ ва анҷом додани ин хизматрасониҳо дар сатҳи байналмилалӣ
            ва рушду равнақ додани ҳисоббаробаркуниҳои ғайринақдӣ ва
            хизматрасонии фосилавӣ,  рақамикунонии соҳаҳои иқтисоди миллӣ, рушди
            сармояи инсонӣ бо роҳи омӯзиши истифодаи равандҳои инноватсиониву
            имкониятҳои технологияҳои рақамӣ, рақамикунонии пурраи
            хизматрасониҳои давлатӣ, ташаккул додани соҳибкории рақамӣ ва рушди
            савдои электронӣ мебошад.
          </p>
          <p className="text-[16px] leading-6">
            Дар ин замина ҷоннок намудани:
          </p>
          <p className="text-[16px] leading-6">
            - хизматрасонии дастрас ба муштариён;
          </p>
          <p className="text-[16px] leading-6">
            - кам кардани ҳиссаи ҳисоббаробаркуниҳои нақдӣ ва афзоиш додани 
            ҳиссаи ҳисоббаробаркуниҳои ғайринақдӣ;
          </p>
          <p className="text-[16px] leading-6">
            - пурра гузаштан ба ҳисоббаробаркуниҳои рақамӣ;
          </p>
          <p className="text-[16px] leading-6">
            - пешниҳоди хизматрасониҳои пардохтӣ;
          </p>
          <p className="text-[16px] leading-6">
            -истифодаи воситаҳои электронии пардохтӣ ва маблағҳои электронӣ;
          </p>
          <p className="text-[16px] leading-6">
            - фароҳам овардани шароити мусоид барои рушди низоми пардохтӣ;
          </p>
          <p className="text-[16px] leading-6">
            - пурра ҷорӣ намудани хизматрасониҳои пардохтӣ тавассути низоми
            пардохтҳо.
          </p>
        </div>
      </div>
    </div>
  );
}
