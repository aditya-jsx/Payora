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
                <h1 className="font-bold text-2xl">Recommended</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-6 h-20 w-80 bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
                    <div className="bg-white rounded-4xl p-2">
                        <Image className="w-8" src={Gold_Icon} alt="Gold" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Save in Gold</h1>
                        <p>Upto 3% Off</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 h-20 w-80 bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
                    <div className="bg-white rounded-4xl p-2">
                        <Image className="w-8" src={MoneyBag_Icon} alt="Money Bag" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">SIP and Mutual Fund</h1>
                        <p>Payment Money</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 h-20 w-80 bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
                    <div className="bg-white rounded-4xl p-2">
                        <Image className="w-8" src={Stocks_Icon} alt="Stocks" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Invest in Stocks</h1>
                        <p>With Payora Money</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 h-20 w-80 bg-[#ffffffb1] rounded-lg p-4 cursor-pointer hover:shadow-2xl">
                    <div className="bg-white rounded-4xl p-2">
                        <Image className="w-8" src={Heart_Icon} alt="Heart Icon" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold">Health Insurance</h1>
                        <p>Cover Starting Rs.460/month</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}