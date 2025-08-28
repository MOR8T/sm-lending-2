import Image from "next/image";
import bank_image from "@/../public/images/bank_with_location.svg";

export default function About() {
  return (
    <div className="text-[#595959]">
      <div className="w-full bg-[#DBECF2] md:py-8 py-10">
        <div className="container-2md md:grid md:grid-cols-2 flex flex-col-reverse gap-10">
          <div className="max-w-[347px] md:mx-0 mx-auto flex flex-col justify-center md:items-start items-center md:text-left text-center ">
            <h1 className="text-[#262626] md:text-[32px] text-[20px] font-semibold">
              ҶДММ ТАҚХ “СТАНДАРТ МОЛИЯ”
            </h1>
            <p className="text-[16px] leading-[16px] mt-[12px]">
              Дастрасии аҳолӣ ба ҳисоббаробаркуниҳои ғайринақдӣ ва рушди рақамӣ.
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
