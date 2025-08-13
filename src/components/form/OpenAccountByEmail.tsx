"use client";
import Button from "@/ui/button/Button";

export default function OpenAccountByEmail() {
  function onSubmit() {}

  return (
    <form
      onSubmit={onSubmit}
      className="md:w-[389px] w-[293px] rounded-[30px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.14)] grid grid-cols-[1fr_auto] overflow-hidden"
    >
      <input
        className="px-[15px] bg-inherit outline-none md:w-[237px] w-full text-[rgba(75,85,99,1)] md:text-[14px] text-[12px] lerading-[16.94px]"
        placeholder={"Enter your email"}
      />
      <Button htmlType="submit">Open Account</Button>
    </form>
  );
}
