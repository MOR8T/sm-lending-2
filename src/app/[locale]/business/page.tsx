import { businessCards1 } from "@/constants/business/const";
import СardsRow from "@/ui/business/СardsRow";

export default function Business() {
  return (
    <div>
      <СardsRow cards={businessCards1} />
    </div>
  );
}
