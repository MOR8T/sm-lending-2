import Image from "next/image";
import services_image from "@/../public/images/bank_services.svg";
import service_icon from "@/../public/icons/bank_service_icon.svg";

export default function Services() {
  const data = [
    {
      title: "Ҷалби амонат ва пасандозҳои шахсони воқеӣ ва ҳуқуқӣ;",
    },
    {
      title: "Пешниҳоди қарзи хурд ",
    },
    {
      title: "Интиқоли маблағҳои пулӣ",
    },
    {
      title: "Додани кафолат ба мизоҷон",
    },
    {
      title: "Анҷом додани қарордодҳои форвардӣ ва своп",
    },
    {
      title:
        "Хизматрасониҳои амалиёти кассавӣ бо пули миллӣ ва асъорҳои хориҷӣ",
    },
    {
      title: "Амалиёти ҳисоббаробаркунӣ ва мубодилавӣ",
    },
    {
      title: "Барориши кортҳои пардохтии бонкӣ ва амалиёт бо онҳо.",
    },
  ];
  return (
    <div className="text-[#595959]">
      <div className="w-full bg-[#DBECF2] py-5">
        <div className="container-2md md:grid md:grid-cols-2 flex flex-col-reverse ">
          <div className="md:max-w-[347px] md:mx-0 mx-auto flex flex-col justify-center md:items-start items-center md:text-left text-center ">
            <h1 className="text-[#262626] md:text-[32px] text-[20px] font-semibold">
              Хидматхои мо
            </h1>
            <p className="text-[16px] leading-[16px] mt-[12px]">
              Мо доираи васеи маҳсулот ва хидматҳои молиявиро пешниҳод менамоем,
              ки барои қонеъ кардани эҳтиёҷоти ҳам шахсони воқеӣ ва ҳам
              соҳибкорон пешбинӣ шудаанд.
            </p>
          </div>
          <div className="flex md:justify-end justify-center">
            <Image
              src={services_image}
              alt="bank"
              width={343}
              height={280}
              className="md:w-[343px] md:h-[280px] w-[200px] h-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="container-lg05 md:mt-[80px] mt-[41px] grid md:grid-cols-2 gap-6">
        {data.map((el) => {
          return (
            <div
              key={el.title}
              className="grid md:grid-cols-[80px_1fr] grid-cols-[60px_1fr] sm:gap-6 gap-4 md:items-center rounded-[8px] bg-[#F5F5F5] sm:p-6 p-5"
            >
              <Image
                src={service_icon}
                alt="service"
                width={80}
                height={80}
                className="md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
              />
              <h3 className="text-[#141414] sm:text-[20px] text-[19px] leading-5 font-semibold">
                {el.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
