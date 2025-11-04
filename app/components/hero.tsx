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
      <div className="flex flex-col bg-[#f5f9ff] items-center justify-center gap-8 pt-4 h-full w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-46">

        <div className="flex justify-center items-center h-full w-full max-w-4xl">
          {/* Ensure paytmTop image is responsive */}
          <Image src={paytmTop} width={1200} height={120} alt="Get UPI Statement in Excel/PDF" className="w-full h-auto object-contain" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-5">

          <div className="flex flex-col bg-white gap-2 w-full lg:w-[74%] h-full rounded-2xl p-5 px-6 shadow-sm">
            <div className="">
              <h1 className="text-xl font-semibold">Recharge and Bill Payments</h1>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 pt-2 gap-3">
              <div className="flex flex-col gap-3 items-center justify-between h-full w-full p-2 md:p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center">
                <Image src={bill_11} className="w-10 h-10 md:w-12 md:h-12 rounded-xl " alt="Pay" />
                <h1 className="pb-4 font-medium text-sm md:text-base">Pay</h1>
              </div>
              <div className="flex flex-col items-center justify-between h-full w-full p-2 md:p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                <Image src={bill_12} className="w-10 h-10 md:w-12 md:h-12 rounded-xl " alt="DTH Recharge" />
                <h1 className="font-medium text-sm md:text-base">DTH Recharge</h1>
              </div>
              <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-2 md:p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                <Image src={bill_13} className="w-10 h-10 md:w-12 md:h-12 rounded-xl " alt="FastTag Recharge" />
                <h1 className="font-medium text-sm md:text-base">FastTag Recharge</h1>
              </div>
              <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-2 md:p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                <Image src={bill_14} className="w-10 h-10 md:w-12 md:h-12 rounded-xl " alt="Electricity Bill" />
                <h1 className="font-medium text-sm md:text-base">Electricity Bill</h1>
              </div>
              <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-2 md:p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                <Image src={bill_15} className="w-10 h-10 md:w-12 md:h-12 rounded-xl " alt="Loan EMI Payment" />
                <h1 className="font-medium text-sm md:text-base">Loan EMI Payment</h1>
              </div>
              <div className="flex flex-col gap-4 items-center justify-between h-full w-full p-2 md:p-6 hover:shadow-xl rounded-xl transition duration-150 cursor-pointer text-center leading-4">
                <Image src={extra} className="w-10 h-10 md:w-12 md:h-12 rounded-xl " alt="View All Products" />
                <h1 className="font-medium text-sm md:text-base">View All Products</h1>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[26%] h-auto lg:h-full rounded-2xl hover:scale-102 transition duration-150 cursor-pointer">
            <Image src={hero_1} className="w-full h-full object-cover rounded-2xl" alt="Spend Summary" />
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full max-w-6xl">
          <Image src={Banner_1} className="h-16 w-full md:w-auto object-contain hover:scale-102 transition duration-150 cursor-pointer" alt="Mobile Recharge Banner" />
          <Image src={Banner_2} className="h-16 w-full md:w-auto object-contain hover:scale-102 transition duration-150 cursor-pointer" alt="Broadband Recharge Banner" />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-5 w-full max-w-6xl pb-8">
          <Image src={Hero_bottom1} className="hover:scale-102 transition duration-150 cursor-pointer rounded-xl w-full md:w-1/3" alt="Swipe Left" />
          <Image src={Hero_bottom2} className="hover:scale-102 transition duration-150 cursor-pointer rounded-xl w-full md:w-1/3" alt="Expense Tracking" />
          <Image src={Hero_bottom3} className="hover:scale-102 transition duration-150 cursor-pointer rounded-xl w-full md:w-1/3" alt="Check Total Balance" />
        </div>

      </div>
    </>
  )
}