import { Modal, QRCode } from "antd";
import React from "react";
import "./style.css";
import ButtonFon from "../buttons/ButtonFon";
import { useTranslations } from "next-intl";

export default function FastVarivifationModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) {
  const t = useTranslations();
  return (
    <Modal
      open={open}
      closable={false}
      width="500px"
      footer={false}
      style={{ padding: "0px" }}
      className="credit-modal"
      onCancel={() => setOpen(false)}
    >
      <div className="flex flex-col">
        <h1 className="text-[#282828] text-center text-[24px] leading-6 font-bold mb-[16px]">
          Санҷиши зуд гузаред
        </h1>
        <p className="text-[#595959] text-center text-[16px] leading-[20px]">
          Шумо ба қадами оянда бомуваффақият гузаштед. Лутфан дастурҳои
          саҳифаро, ки дар смартфони шумо кушода мешавад, барои зеркашии
          ҳуҷҷатҳо иҷро кунед. Пас аз бомуваффақият гузаштан аз санҷиш, менеҷери
          мо дар давоми 15 дақиқа бо шумо тамос мегирад
        </p>
        <div className="p-10 flex justify-center">
          <QRCode
            type="svg"
            value="https://sm.tj"
            className="w-full h-full"
            size={320}
            rootClassName="md:max-w-[320px] max-w-[200px] md:max-h-[320px] max-h-[200] mx-auto"
          />
        </div>
        <ButtonFon onClick={() => setOpen(false)}>
          {t("buttons.toMainPage")}
        </ButtonFon>
      </div>
    </Modal>
  );
}
