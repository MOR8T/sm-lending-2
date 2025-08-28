import { infoTableColumns } from "@/constants/main-page/infoTables";
import { Table } from "antd";
import React from "react";
import "./style.css";
import { InfoTablesT } from "@/types/main-page/ui/types";

export default function InfoTables({ data }: InfoTablesT) {
  return (
    <div className="text-[#282828] grid gap-10 info-table">
      {data.map((tariff) => {
        return (
          <div key={tariff.title}>
            <h2 className="md:text-[24px] text-[20px] md:leading-[29px] leading-5 font-semibold mb-2">
              {tariff.title}
            </h2>
            <div className="grid gap-6">
              {tariff.tables.map((el) => {
                return (
                  <div key={el.description} className="w-full">
                    <p className="text-[16px] leading-[19px] mb-6">
                      {el.description}
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
