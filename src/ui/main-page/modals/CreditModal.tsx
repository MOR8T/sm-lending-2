"use client";
import { Modal } from "antd";
import React from "react";
import CreditSelect from "../select/CreditSelect";
import "./style.css";
import Input from "../input/Input";
import ButtonFon from "../buttons/ButtonFon";

export default function CreditModal({
  options,
  open,
  setOpen = () => {},
  onFinish = () => {},
}: {
  options: {
    label: string;
    maxMoney: number;
    maxMonth: number;
    precent: number;
  }[];
  open: boolean;
  setOpen: (e: boolean) => void;
  onFinish: () => void;
}) {
  return (
    <Modal
      open={open}
      closable={false}
      width="783px"
      footer={false}
      style={{ padding: "0px" }}
      className="credit-modal"
      onCancel={() => setOpen(false)}
    >
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10">
          <h1 className="text-[#282828] text-[24px] leading-6 font-bold text-center md:col-span-2">
            Оформите заявку и получите кредит
          </h1>
          <CreditSelect
            placeholder=""
            value=""
            items={options.map((el) => ({
              label: el.label,
              key: el.precent,
            }))}
            className="md:col-span-2"
          />
          <Input placeholder="Фамилия*" value="" onChange={() => {}} />
          <Input placeholder="Имя*" value="" onChange={() => {}} />
          <Input placeholder="Отчество" value="" onChange={() => {}} />
          {/* <Input placeholder="Регион*" value="" onChange={() => {}} /> */}
          <CreditSelect
            placeholder="Регион*"
            value=""
            items={options.map((el) => ({
              label: el.label,
              key: el.precent,
            }))}
          />
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 md:col-span-2">
            <Input placeholder="Номер телефона*" value="" onChange={() => {}} />
            <ButtonFon onClick={() => onFinish()}>Оформить онлайн</ButtonFon>
          </div>
        </div>
      </div>
    </Modal>
  );
}
