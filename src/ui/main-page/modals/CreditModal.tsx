import { Modal } from "antd";
import React from "react";
import CreditSelect from "../select/CreditSelect";
import "./style.css";
import Input from "../input/Input";
import ButtonFon from "../buttons/ButtonFon";

export default function CreditModal({
  options,
}: {
  option: {
    label: string;
    maxMoneys: number;
    minMoney: number;
    precent: string;
  }[];
}) {
  return (
    <Modal
      open={false}
      closable={false}
      width="783px"
      footer={false}
      style={{ padding: "0px" }}
      className="credit-modal"
    >
      <div className="">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10">
          <h1 className="text-[#282828] text-[24px] leading-6 font-bold text-center col-span-2">
            Оформите заявку и получите кредит
          </h1>
          <CreditSelect
            placeholder=""
            value=""
            items={options}
            className="col-span-2"
          />
          <Input placeholder="Фамилия*" value="" onChange={() => {}} />
          <Input placeholder="Имя*" value="" onChange={() => {}} />
          <Input placeholder="Отчество" value="" onChange={() => {}} />
          {/* <Input placeholder="Регион*" value="" onChange={() => {}} /> */}
          <CreditSelect placeholder="Регион*" value="" items={options} />
          <div className="grid grid-cols-[2fr_1fr] gap-6 col-span-2">
            <Input placeholder="Номер телефона*" value="" onChange={() => {}} />
            <ButtonFon>Оформить онлайн</ButtonFon>
          </div>
        </div>
      </div>
    </Modal>
  );
}
