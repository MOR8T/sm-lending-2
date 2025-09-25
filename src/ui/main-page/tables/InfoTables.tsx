"use client";
import { Table } from "antd";
import React from "react";
import "./style.css";
import { InfoTablesT } from "@/types/main-page/ui/types";
import { useTranslations } from "next-intl";

export default function InfoTables({ data }: InfoTablesT) {
  const t = useTranslations();

  const infoTableColumns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
      render: (value: string) => (value !== "" ? t(`${value}`) : ""),
    },
    {
      title: t("personalData.tariffs.list_of_services"),
      dataIndex: "service",
      key: "service",
      render: (value: string) => (value !== "" ? t(`${value}`) : ""),
    },
    {
      title: t("personalData.tariffs.according_contract"),
      dataIndex: "contract",
      key: "contract",
      render: (value: string) => (value !== "" ? t(`${value}`) : ""),
    },
  ];

  return (
    <div className="text-[#282828] grid gap-10 info-table">
      {data.map((tariff) => {
        return (
          <div key={tariff.title}>
            <h2 className="md:text-[24px] text-[20px] md:leading-[29px] leading-5 font-semibold mb-2">
              {t(`${tariff?.title}`)}
            </h2>
            <div className="grid gap-6">
              {tariff.tables.map((el) => {
                return (
                  <div key={el.description} className="w-full">
                    <p className="text-[16px] leading-[19px] mb-6">
                      {t(`${el.description}`)}
                    </p>
                    <div
                      className="overflow-x-auto"
                      style={{ width: "calc(100vw - 48px)" }}
                    >
                      <div className="w-[846px]">
                        <Table
                          columns={infoTableColumns}
                          dataSource={el.dataSource}
                          pagination={false}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
