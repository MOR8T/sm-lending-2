import { depositsData } from "@/constants/main-page/deposits";
import InfoCards from "@/ui/main-page/cards/InfoCards";
import React from "react";

export default function Deposits() {
  return (
    <div className="container">
      <InfoCards data={depositsData} title="Амонатҳо" />
    </div>
  );
}
