export default function Management() {
  return (
    <div className="container-2md text-[#262626]">
      <h1 className="text-[#262626] text-center md:text-[32px] text-[20px] font-semibold md:mt-[60px] mt-8 md:mb-10 mb-6 ">
        Руководство
      </h1>
      <div className="flex justify-center">
        <div className="bg-[#F5F5F5] rounded-[12px] border border-[#3980A0] py-[24px] px-[12px] md:w-[294px] w-[327px] md:h-[133px] h-[123px] flex flex-col items-center justify-center text-center">
          <p className="text-[14px] text-[#54545A] mb-[10px]">
            Директори генералӣ
          </p>
          <h2 className="md:text-[24px] text-[20px] leading-6">
            Ашуров Акмалҷон Нусратович
          </h2>
        </div>
      </div>
      <div className="flex md:justify-between justify-center flex-wrap mt-8 gap-8">
        <div className="bg-[#F5F5F5] rounded-[12px] border border-[#3980A0] py-[24px] px-[12px] md:w-[294px] w-[327px] md:h-[133px] h-[123px] flex flex-col items-center justify-center text-center">
          {/* <p className="text-[14px] text-[#54545A] mb-[10px]">
            Муовини директори генералӣ
          </p> */}
          <h2 className="md:text-[24px] text-[20px] leading-6">
            Муовини директори генералӣ
          </h2>
        </div>
        <div className="bg-[#F5F5F5] rounded-[12px] border border-[#3980A0] py-[24px] px-[12px] md:w-[294px] w-[327px] md:h-[133px] h-[123px] flex flex-col items-center justify-center text-center">
          <p className="text-[14px] text-[#54545A] mb-[10px]">Сармуҳосиб</p>
          <h2 className="md:text-[24px] text-[20px] leading-6">
            Шарипова Гулнора Холбоевна
          </h2>
        </div>
      </div>
    </div>
  );
}
