import { Pagination } from "antd";
import "./style.css";

interface CustomPaginationT {
  defaultCurrent?: number;
  total?: number;
  className?: string;
  align: "end" | "center" | "start";
}
export default function CustomPagination({
  defaultCurrent = 1,
  total = 50,
  className = "",
  align = "start",
}: CustomPaginationT) {
  return (
    <div className={`custome-pagination ${className}`}>
      <Pagination align={align} defaultCurrent={defaultCurrent} total={total} />
    </div>
  );
}
