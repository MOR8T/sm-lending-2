import Image from "next/image";
import operator_img from "@/../public/images/operator.svg";

export default function HelpSectionInfo() {
  return (
    <div className="container">
      <div className="bg-[#F5F5F5] rounded-3xl grid md:grid-cols-[auto_1fr] md:gap-5">
        <div className="md:p-10 p-5">
          <Image
            src={operator_img}
            alt="operator"
            width={388}
            height={370}
            className="md:max-w-[388px] md:max-h-[370px] w-full h-full max-w-[279px] max-h-[266px] md:mx-none mx-auto"
          />
        </div>
        <div className="md:p-[40px_40px_40px_0px] p-[0px_24px_24px_24px] text-[#141414] text-[16px] leading-5">
          <h2 className="md:text-[20px] text-[18px] md:leading-6 leading-[22px] font-semibold">
            ҶДММ ТАҚҲ “СТАНДАРТ МОЛИЯ”
          </h2>
          <ul className="mb-[8px] mt-6">
            <li>
              Шаҳодатнома дар бораи бақайдгирии давлатӣ:{" "}
              <span className="font-medium"> №0309053 аз 18.06.2024</span>
            </li>
            <li>
              №0309053 аз 18.06.2024 Иҷозатномаи БМТ:{" "}
              <span className="font-medium">№0000331 </span>
            </li>
            <li>
              Индекс: <span className="font-medium">734025, ҶТ</span>
            </li>
          </ul>
          <ul>
            <li>
              Суроға:{" "}
              <span className="font-medium">
                ш.Душанбе, н.И.Сомонӣ, куч.Шевченко 113
              </span>
            </li>
            <li>
              Маркази тамос:{" "}
              <span className="font-medium"> +992 44 603 20 20 </span>
            </li>
            <li>
              Барои саволҳои умумӣ:{" "}
              <span className="font-medium">
                +992 (44) 603 20 20, 44 603 15 15
              </span>
            </li>
            <li>
              Почтаи электронӣ: <span className="font-medium"> info@sm.tj</span>
            </li>
            <li>
              Сомона: <span className="font-medium"> www.sm.tj</span>
            </li>
            <li>
              Суроғаи ҳуқуқӣ:{" "}
              <span className="font-medium">
                {" "}
                ш.Душанбе, н.И.Сомонӣ, куч.Шевченко 113
              </span>
            </li>
            <li>
              Реҷаи корӣ:{" "}
              <span className="font-medium">аз 08: 00 то 17: 00</span>
            </li>
            <li>
              Рӯзҳои истироҳатӣ:{" "}
              <span className="font-medium">Шанбе,Якшанбе</span>
            </li>
            <li>
              Тел.боварӣ БМТ:{" "}
              <span className="font-medium">
                (44) 600 15 20 ё почтаи электронӣ: ALLOMUSHTARI@NBT.TJ
              </span>
            </li>
          </ul>
          <ul className="mt-[8px]">
            <li>
              Қабули шаҳрвандон:{" "}
              <span className="font-medium">Директори генералӣ</span>
            </li>
            <li>
              Рӯз ва соатҳои қабул:{" "}
              <span className="font-medium">Шанбе аз 09:00 то 11:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
