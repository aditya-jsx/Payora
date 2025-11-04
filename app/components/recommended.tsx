import Gold_Icon from "@/app/assests/gold-icon.png"
import Heart_Icon from "@/app/assests/heart-icon.png"
import MoneyBag_Icon from "@/app/assests/money-bag-icon.png"
import Stocks_Icon from "@/app/assests/stocks-icon.png"

import Image from "next/image"


export default function Recommended() {
  return (
    <>
      <div className="flex flex-col justify-between h-full w-full gap-4">
        <div className="">
          <h1 className="font-bold text-xl md:text-2xl">Recommended</h1>
        </div>
        {/* Horizontally scrollable container for mobile, grid for desktop */}
        <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-x-visible items-center gap-4 pb-4 no-scrollbar">
          <div className="flex items-center gap-4 h-20 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
            <div className="bg-white rounded-full p-2 flex-shrink-0">
              <Image className="w-8" src={Gold_Icon} alt="Gold" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-sm md:text-base">Save in Gold</h1>
              <p className="text-sm">Upto 3% Off</p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-20 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
            <div className="bg-white rounded-full p-2 flex-shrink-0">
              <Image className="w-8" src={MoneyBag_Icon} alt="Money Bag" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-sm md:text-base">SIP and Mutual Fund</h1>
              <p className="text-sm">Payment Money</p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-20 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
            <div className="bg-white rounded-full p-2 flex-shrink-0">
              <Image className="w-8" src={Stocks_Icon} alt="Stocks" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-sm md:text-base">Invest in Stocks</h1>
              <p className="text-sm">With Payora Money</p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-20 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
            <div className="bg-white rounded-full p-2 flex-shrink-0">
              <Image className="w-8" src={Heart_Icon} alt="Heart Icon" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-sm md:text-base">Health Insurance</h1>
              <p className="text-sm">Cover Starting Rs.460/month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}