import { Slider } from "antd";
import React from "react";
import "./style.css";
import { formatNumber } from "@/utils/main-page/globalFunction";

interface CreditSliderT {
  value: number;
  onChange: (e: number) => void;
  label: string;
  unit: string;
  unit2: string;
  max: number;
  min: number;
  step: number;
}

export default function CreditSlider({
  value,
  onChange = () => {},
  label,
  unit,
  unit2,
  max,
  min,
  step,
}: CreditSliderT) {
  return (
    <div className="grid gap-2 credit-slider">
      <div className="flex justify-between items-center gap-4">
        <p className="text-[16px] leading-6">{label}</p>
        <div className="bg-white p-[12px_20px] md:min-w-[180px] min-w-[150px] rounded-[8px]">
          <p className="text-[20px]">
            {formatNumber(value)}
            <span className="text-[#8C8C8C] text-[16px] ml-[5px]">{unit}</span>
          </p>
        </div>
      </div>
      <Slider
        defaultValue={30}
        disabled={false}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div className="flex justify-between gap-5">
        <p className="text-[#595959] text-[14px]">
          {formatNumber(min)} {unit2}
        </p>
        <p className="text-[#595959] text-[14px] md:block hidden">
          {formatNumber(max / 2)} {unit2}
        </p>
        <p className="text-[#595959] text-[14px]">
          {formatNumber(max)} {unit2}
        </p>
      </div>
    </div>
  );
}
