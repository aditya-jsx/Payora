import Image from "next/image"

import Filter_Icon from "@/app/assests/filter-icon.png"

export default function PaymentHistory() {
  return (
    <>
      <div className="flex flex-col gap-4 h-full w-full py-1">
        <div className="">
          <h1 className="font-bold text-xl md:text-2xl">Payment History</h1>
        </div>

        <div className="flex flex-col h-full w-full gap-4 pb-10">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <input 
              type="text" 
              className="h-10 md:h-8 w-full bg-white rounded-md pl-4 p-5 border" 
              placeholder="Search Your Payment" 
            />
            <div className="flex items-center justify-end gap-2 pr-0 md:pr-6 cursor-pointer">
              <Image src={Filter_Icon} className="w-6 h-5 md:w-7 md:h-6" alt="Filter" />
              <h1 className="text-blue-500 text-lg md:text-xl">Filter</h1>
            </div>
          </div>
          <div className="mt-4 text-gray-600">
            {/* Placeholder for payment history items */}
            <p>No payment history found.</p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}