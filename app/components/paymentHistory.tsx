import Image from "next/image"

import Filter_Icon from "@/app/assests/filter-icon.png"

export default function PaymentHistory() {
  return (
    <>
      <div className="flex flex-col gap-4 h-full w-full py-1">
        <div className="">
          <h1 className="font-bold text-2xl">Payment History</h1>
        </div>

        <div className="flex flex-col h-full w-full gap-2 pb-10">
          <div className="flex justify-between gap-22">
            <input type="text" className="h-8 w-full bg-white rounded-md pl-4 p-5 border" placeholder="Search Your Payment" />
            <div className="flex items-center gap-2 pr-6 cursor-pointer">
              <Image src={Filter_Icon} className="w-7 h-6" alt="Filter" />
              <h1 className="text-blue-500 text-xl">Filter</h1>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
