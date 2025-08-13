import { useTranslations } from "next-intl";
import "@/styles/mobile_banking_style.css";
import Typography from "@/ui/typography/Typography";
import OpenAccountByEmail from "@/components/form/OpenAccountByEmail";
import { Link } from "@/i18n/navigation";
import LinkUI from "@/ui/link/LinkUI";
import { SlRefresh } from "react-icons/sl";
import { list } from "./constants";
import Image from "next/image";

export default function MobileBanking() {
  const t = useTranslations("HomePage"); // for client components
  // const t = await getTranslations("HomePage"); // for ssr components

  return (
    <div>
      <div className="mobile_banking_fon">
        <div className="mobile_banking_blur px-[20px] lg:min-h-[860px] min-h-[650px] h-screen lg:max-h-[968px] max-h-[70px] overflow-hidden">
          <div className="max-w-[1178.8px] w-full mx-auto border-l border-r border-[#1F29370D] ">
            <div className="max-w-[1045px] w-full mx-auto border-l border-r border-[#1F29370D]">
              <div className="flex items-end w-full h-full justify-center ">
                <div className="text-center text-[#1F2937] flex flex-col items-center lg:pt-[118px] pt-[66px]">
                  <Typography type="title1" className="max-w-[592px]">
                    Mobile Banking Always with you
                  </Typography>
                  <Typography
                    type="description1"
                    className="mt-[12px] lg:mb-[29px] mb-[37px] text-[#4B5563]"
                  >
                    Apply in minutes and take your business operations to the
                    next level
                  </Typography>
                  <div className="flex lg:flex-row flex-col items-center gap-[15px] lg:mb-[90px] mb-[38px]">
                    <OpenAccountByEmail />
                    <LinkUI
                      href="/products/cards"
                      className="lg:mt-0 mt-[18px]"
                    >
                      Generate your card
                    </LinkUI>
                  </div>
                  <div className="lg:overflow-x-hidden overflow-x-auto lg:w-[auto] w-[100vw] md:pl-[75px] pl-0">
                    <div className="text-start lg:scale-100 scale-[90rem] bg-[#F6F7F8] rounded-[55px_55px_0px_0px] w-[876px] h-[364px] p-[23px_42px] overflow-hidden">
                      <div className="flex justify-end w-full">
                        <div className="border-t border-r border-b border-[#D7DBE0] rounded-[0px_24px_24px_0px] w-[576px] h-[48px] flex items-center justify-between px-[26px]">
                          <div className="flex gap-[15px]">
                            <div className="w-[76px] h-[27px] border-[#AAABAD] border rounded-[13.5px] grid place-content-center">
                              <p className="text-[11px] leading-[19px]">
                                Dashboard
                              </p>
                            </div>
                            <div className="w-[76px] h-[27px] grid place-content-center">
                              <p className="text-[11px] leading-[19px]">
                                Transactions
                              </p>
                            </div>
                            <div className="w-[76px] h-[27px] grid place-content-center">
                              <p className="text-[11px] leading-[19px]">
                                Cards
                              </p>
                            </div>
                            <div className="w-[76px] h-[27px] grid place-content-center">
                              <p className="text-[11px] leading-[19px]">
                                Settings
                              </p>
                            </div>
                          </div>
                          <div className=" flex items-center gap-[6px]">
                            <div className="w-[23px] h-[23px] bg-[#D9D9D9] rounded-[50%]"></div>
                            <p className="text-[11px] leading-[19px]">
                              Settings
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[16px] leaidng-[19px] mb-[16px] mt-[10px] ml-[23px]">
                          Today’s overview
                        </h5>
                      </div>
                      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[11px]">
                        <div className="bg-[#EFEFEF] rounded-[20px] h-[143px] w-full p-[25px_26px_26px_26px]">
                          <p className="text-[12px] leading-[19px] font-medium">
                            Total balance
                          </p>
                          <p className="text-[24px] laeindg-[19px] font-semibold mt-[14px] mb-[11px]">
                            TJS 11,289.00
                          </p>
                          <p className="text-[10px] leaindg-[19px] text-[#767679] flex items-center gap-[4.33px]">
                            <SlRefresh className="rotate-90 text-[12px]" />
                            Last update: 11 April 2024 02:00 PM
                          </p>
                        </div>
                        <div className="bg-gradient-to-b from-[#EFEFEF] to-[#CBD7DF] rounded-[20px] h-[143px] w-full p-[25px_26px_26px_26px]">
                          <p className="text-[12px] leading-[19px] font-medium">
                            Total income
                          </p>
                          <p className="text-[24px] laeindg-[19px] font-semibold mt-[14px] mb-[11px]">
                            TJS 2,489.00
                          </p>
                          <p className="text-[12px] leaindg-[19px] text-[#315266]">
                            +3,60%
                          </p>
                        </div>
                        <div className="bg-gradient-to-b from-[#EFEFEF] to-[#E3D6D6] rounded-[20px] h-[143px] w-full p-[25px_26px_26px_26px]">
                          <p className="text-[12px] leading-[19px] font-medium">
                            Total Outcome
                          </p>
                          <p className="text-[24px] laeindg-[19px] font-semibold mt-[14px] mb-[11px]">
                            TJS 5,683.00
                          </p>
                          <p className="text-[12px] leaindg-[19px] text-[#315266]">
                            -2,60%
                          </p>
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-[0.3fr_0.7fr_1fr] border-[#D7DCE09C] border rounded-[20px] p-[17px_26px_0px_23px] h-full mt-[20px]">
                        <p className="text-[#D7DCE09C] text-[16px] leading-[19px]">
                          History
                        </p>
                        <div className="flex flex-col items-center">
                          <div className="text-[#D7DCE09C] text-[10px] leading-[19px] w-[83px] h-[18px] grid place-content-center rounded-[5px] border border-[#D7DCE09C]">
                            Average 25 K
                          </div>
                          <div className="border border-[#D7DCE09C] w-[237px] h-[237px] rounded-[50%] mt-[10px] flex justify-center">
                            <div className="bg-[#D7DCE09C] w-[7px] h-[7px] rounded-[3.5px] mt-[-3.5px]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex gap-[20px]">
                            <div className="bg-[#D7DCE09C] w-[22px] h-[22px] rounded-[2px] mt-[16px]"></div>
                            <div>
                              <p className="text-[#D7DCE09C] text-[14px] leaidng-[19px] font-medium">
                                TJS 2.60
                              </p>
                              <div className="flex gap-[100px] my-[10px]">
                                <div className="w-[134px] h-[8.28px] rounded-[5px] bg-[linear-gradient(83.44deg,_rgba(217,_217,_217,_0.19)_7.36%,_#D7DCE09C_53.86%)]"></div>
                                <div className="w-[51px] h-[8.28px] rounded-[5px] bg-[linear-gradient(83.44deg,_rgba(217,217,217,0.19)_7.36%,_#D7DCE09C_53.86%)]"></div>
                              </div>
                              <p className="text-[#D7DCE09C] text-[14px] leaidng-[19px] font-medium">
                                TJS 6.30
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F6F7F8] pb-[38px] lg:overflow-hidden overflow-x-auto">
        <div className="lg:grid lg:grid-cols-3 flex container">
          {list.map((el) => {
            return (
              <div
                key={el.title}
                className="p-[28px_32px] min-w-[257px] border border-[#1F29370D]"
              >
                <Image
                  src={el.icon}
                  alt={el.title}
                  width="40"
                  height="40"
                  className="w-[40px] h-[40px]"
                />
                <Typography
                  type="title4"
                  className="lg:mt-[11.7px] lg::mb-[12.3px] mt-[-5px] mb-[5px]"
                >
                  {el.title}
                </Typography>
                <p className="lg:text-[18px] lg:leading-[26px] text-[13px] leading-[20px] text-[#4B5563]">
                  {el.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
