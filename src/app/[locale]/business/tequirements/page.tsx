"use client";
import bank_image from "@/../public/images/tequirements/1.svg";
import OpenAnAccountForm from "@/ui/main-page/form/OpenAnAccountForm";
import { useTranslations } from "next-intl";
import SectionInfo from "@/components/sectionInfo/SectionInfo";

export default function Tequirements() {
  const t = useTranslations("TequirementsBusiness");

  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={t("title")}
        description={t("description")}
        img={bank_image}
      />
      <div className="container-2md md:mt-[60px] mt-[40px]">
        <h2 className="text-[#262626] md:text-[24px] text-[20px] leading-5 mb-6 font-semibold">
          {t("title2")}
        </h2>
        <div className="text-[16px] leading-6">
          <p>Ҳуҷҷатҳо барои кушодани суратҳисоби бонкӣ барои шахсони ҳуқуқӣ:</p>
          <p>Нусхаи ҳуҷҷатҳое, ки аз ҷониби мақомоти андоз дода мешаванд</p>
          <ul className="list-disc ml-[20px]">
            <li>Шаҳодатнома дар бораи бақайдгирии давлатӣ, </li>
            <li>
              Иқтибос аз Феҳристи ягонаи давлатии шахси ҳуқуқӣ, Гувоҳнома дар
              бораи додани рақами мушаххаси андозсупоранда.
            </li>
          </ul>
          <p>
            Дар ҳолате, ки агар суратҳисоби бонкӣ барои филиал ё намояндагӣ
            кушода шавад
          </p>
          <ul className="list-disc ml-[20px]">
            <li>
              тибқи ваколатномаи саридораи муштарӣ, ки ба номи роҳбари онҳо
              навишта шудааст;
            </li>
            <li>
              варақа бо намунаи имзо ва нақши муҳр дар ду нусха якҷоя бо
              шиносномаҳои шахсони дорои ҳуқуқи имзои якум ва дуюм агар пешбинӣ
              шуда бошад ва дигар ҳуҷҷатҳо тибқи талаботи Дастурамали №171 Бонки
              миллии Тоҷикистон.
            </li>
          </ul>
        </div>
        <OpenAnAccountForm />
      </div>
    </div>
  );
}
