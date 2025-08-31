import { depositsData } from "@/constants/business/deposits";
import InfoCards from "@/ui/main-page/cards/InfoCards";

export default function Deposits() {
  return (
    <div className="container">
      <InfoCards data={depositsData} title="Амонатҳо" />
    </div>
  );
}
