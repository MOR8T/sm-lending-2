"use client";
import { Modal } from "antd";
import React from "react";
import CreditSelect from "../select/CreditSelect";
import "./style.css";
import Input from "../input/Input";
import ButtonFon from "../buttons/ButtonFon";
import { useTranslations } from "next-intl";
import { regions2 } from "@/constants/const";

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
    id: number;
  }[];
  open: boolean;
  setOpen: (e: boolean) => void;
  onFinish: () => void;
}) {
  const t = useTranslations();
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
            {t("CalculateCredit.applyOnlineTitle")}
          </h1>
          <CreditSelect
            placeholder=""
            value=""
            items={options.map((el) => ({
              label: el.label,
              key: el.id,
            }))}
            className="md:col-span-2"
          />
          <Input
            placeholder={t("CalculateCredit.lastname") + "*"}
            value=""
            onChange={() => {}}
          />
          <Input
            placeholder={t("CalculateCredit.fistname") + "*"}
            value=""
            onChange={() => {}}
          />
          <Input
            placeholder={t("CalculateCredit.middlename")}
            value=""
            onChange={() => {}}
          />
          <CreditSelect
            placeholder={t("CalculateCredit.region") + "*"}
            value=""
            items={regions2.map((el) => ({
              label: el.label,
              key: el.value,
            }))}
          />
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 md:col-span-2">
            <Input
              placeholder={t("CalculateCredit.phoneNumber") + "*"}
              value=""
              onChange={() => {}}
            />
            <ButtonFon onClick={() => onFinish()}>
              {t("CalculateCredit.applyOnline")}
            </ButtonFon>
          </div>
        </div>
      </div>
    </Modal>
  );
}
