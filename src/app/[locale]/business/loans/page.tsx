import Image from "next/image";
import services_image from "@/../public/images/business_loan.svg";
import service_icon from "@/../public/icons/bank_service_icon.svg";
import SectionInfo from "@/components/sectionInfo/SectionInfo";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import CalculateCredit from "@/ui/main-page/calculateCredit/CalculateCredit";

export default function Loans() {
  const t = useTranslations();
  const data = [
    {
      title: "Мақсад",
      description: "Бисёрмақсаднок",
    },
    {
      title: "Муҳлат",
      description: "то 24 моҳ",
    },
    {
      title: "Давраи имтиёз",
      description: "то 3 моҳ",
    },
    {
      title: "Ҳаҷм",
      description: "то 500 000 сомонӣ",
    },
    {
      title: "Фоизи солона",
      description: "30% ба шахсони ҳуқуқӣ",
    },
    {
      title: "Таъминот",
      description: "Маснуоти заргарии истифоданашуда",
    },
    {
      title: "Ҳуҷҷатҳои зарурӣ",
      description: (
        <>
          <p>- ташхиси маснуоти заргарӣ;</p>
          <p>- ҳуҷҷатҳои таъсисёбӣ;</p>
          <p>- маълумотнома аз мақомоти андоз оид ба надоштани қарз</p>
        </>
      ),
    },
  ];
  return (
    <div className="text-[#595959]">
      <SectionInfo
        title={'Кредит "Заррини аҷоиб"'}
        description={
          "Многоцелевой кредит, предоставляемый под залог ювелирных изделий"
        }
        img={services_image}
        // textMaxWidth="max-w-[347px]"
        className="md:py-5 py-5"
      />
      <div className="container md:mt-[80px] mt-[41px] grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {data.map((el) => {
          return (
            <div
              key={el.title}
              className="grid md:grid-cols-[80px_1fr] grid-cols-[60px_1fr] sm:gap-6 gap-4 md:items-center rounded-[8px] sm:p-6 p-5"
            >
              <Image
                src={service_icon}
                alt="service"
                width={80}
                height={80}
                className="md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
              />
              <div>
                <h3 className="text-[#141414] sm:text-[24px] text-[19px] leading-6 font-semibold">
                  {el.title}
                </h3>
                <div className="text-[#282828] text-[16px] leading-6 mt-2">
                  {el.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <SectionTitle className="container my-0 md:my-0">
        {t("HomePage.calculateCredit")}
      </SectionTitle>
      <CalculateCredit isPersonal={false} />
    </div>
  );
}
