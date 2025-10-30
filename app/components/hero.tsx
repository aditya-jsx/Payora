
import paytmTop from "../assests/hero-top.png";
import Image from 'next/image'
import hero_1 from "../assests/hero-1.png"
import bill_11 from "../assests/bill_1-1.png"
import bill_12 from "../assests/bill_1-2.jpg"
import bill_13 from "../assests/bill_1-3.png"
import bill_14 from "../assests/bill_1-4.jpg"
import bill_15 from "../assests/bill_1-5.png"
import extra from "../assests/bill_1-6.png"
import Banner_1 from "../assests/hero_banner_1.png"
import Banner_2 from "../assests/hero_banner_2.png"
import Hero_bottom1 from "../assests/hero_bottom_1.png" 
import Hero_bottom2 from "../assests/hero_bottom_2.png"
import Hero_bottom3 from "../assests/hero_bottom_3.png"

export default function Hero() {
  return (
    <>
        <div className="flex flex-col bg-[#f5f9ff] items-center justify-center gap-8 pt-4 h-full w-full px-46">

            <div className="flex justify-center items-center h-full w-full">
                <Image src={paytmTop} width={730} height={730} alt="Get UPI Statement in Excel/PDF" />
            </div>

            <div className="flex items-center justify-center h-[15.5rem] w-full gap-5">

                <div className="flex flex-col bg-white gap-2 w-[74%] h-full rounded-2xl p-5 px-6">
                    <div className="">
                        <h1 className="text-xl font-semibold">Recharge and Bill Payments</h1>
                    </div>

                    <div className="flex pt-2 gap-3">
                        <div className="flex flex-col gap-3 items-center justify-between h-full w-full p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center">
                            <Image src={bill_11} className="w-12 h-12 rounded-xl " alt="Get UPI Statement in Excel/PDF" />
                            <h1 className="pb-4 font-medium">Pay</h1>
                        </div>
                        <div className="flex flex-col items-center justify-between h-full w-full p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                            <Image src={bill_12} className="w-12 h-12 rounded-xl " alt="Get UPI Statement in Excel/PDF" />
                            <h1 className="font-medium">DTH Recharge</h1>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                            <Image src={bill_13} className="w-12 h-12 rounded-xl " alt="Get UPI Statement in Excel/PDF" />
                            <h1 className="font-medium">FastTag Recharge</h1>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                            <Image src={bill_14} className="w-12 h-12 rounded-xl " alt="Get UPI Statement in Excel/PDF" />
                            <h1 className="font-medium">Electricity Bill</h1>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                            <Image src={bill_15} className="w-12 h-12 rounded-xl " alt="Get UPI Statement in Excel/PDF" />
                            <h1 className="font-medium">Loan EMI Payment</h1>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                            <Image src={extra} className="w-12 h-12 rounded-xl " alt="Get UPI Statement in Excel/PDF" />
                            <h1 className="font-medium">View All Products</h1>
                        </div>
                    </div>
                </div>

                {/* <div className="w-[26%] bg-green-300 h-full rounded-xl"></div> */}

                <Image src={hero_1} className="w-[26%] bg-green-300 h-full rounded-2xl hover:scale-102 transition duration-150 cursor-pointer" alt="Get UPI Statement in Excel/PDF" />

            </div>

            <div className="flex gap-5 items-center justify-center">
                <Image src={Banner_1} className="h-16 hover:scale-102 transition duration-150 cursor-pointer" alt="Get UPI Statement in Excel/PDF" />
                <Image src={Banner_2} className="h-16 hover:scale-102 transition duration-150 cursor-pointer" alt="Get UPI Statement in Excel/PDF" />
            </div>

            <div className="flex justify-center gap-5 w-full">
                <Image src={Hero_bottom1} className="hover:scale-102 transition duration-150 cursor-pointer rounded-xl" width={378} alt="Get UPI Statement in Excel/PDF" />
                <Image src={Hero_bottom2} className="hover:scale-102 transition duration-150 cursor-pointer rounded-xl" width={378} alt="Get UPI Statement in Excel/PDF" />
                <Image src={Hero_bottom3} className="hover:scale-102 transition duration-150 cursor-pointer rounded-xl" width={378} alt="Get UPI Statement in Excel/PDF" />
            </div>
            
        </div>
    </>
  )
}