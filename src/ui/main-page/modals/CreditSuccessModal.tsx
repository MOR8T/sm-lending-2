import { Modal } from "antd";
import React from "react";
import "./style.css";
import ButtonFon from "../buttons/ButtonFon";
import Image from "next/image";
import successIcon from "@/../public/icons/success.svg";

export default function CreditSuccessModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) {
  return (
    <Modal
      open={open}
      closable={false}
      width="555px"
      footer={false}
      style={{ padding: "0px" }}
      className="credit-modal"
      onCancel={() => setOpen(false)}
    >
      <div className="flex flex-col gap-6 items-center">
        <Image src={successIcon} alt="success" width={64} height={64} />
        <h1 className="text-[#282828] text-[24px] leading-6 font-bold text-center col-span-2">
          Ваша заявка упешно отправлена
        </h1>
        <ButtonFon onClick={() => setOpen(false)}>Оформить онлайн</ButtonFon>
      </div>
    </Modal>
  );
}
