import Image from "next/image";

import Logo from "@/app/assests/logo.svg"
import Banner_image from "@/app/assests/banner_image.png"
import App_store from "@/app/assests/app_store.png"
import Play_store from "@/app/assests/google_playStore.png"
import Paytm_upi from "@/app/assests/paytm_upi.png"
import right from "@/app/assests/right-icon.png"

export default function Banner() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 py-8 bg-[#f5f9ff] px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl lg:h-145 lg:w-295 rounded-3xl bg-white p-6 shadow-lg">
          <div className="flex flex-col w-full lg:w-[45%] lg:pl-16 gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="">
              <Image src={Logo} className="w-32 md:w-40" alt="logo" />
            </div>
            <div className="">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-left font-semibold">
                Pay anyone directly from your <span className="text-blue-500">bank account</span>
              </h1>
            </div>
            <div className="">
              <p className="text-base md:text-lg font-semibold">Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank Account. Plus, send & receive money from anyone.</p>
            </div>
            <div className="flex gap-4">
              <a href="https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634" target="_blank" rel="noopener noreferrer">
                <Image src={App_store} className="w-28 md:w-30" alt="App Store" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=net.one97.paytm" target="_blank" rel="noopener noreferrer">
                <Image src={Play_store} className="w-28 md:w-30" alt="Google Play Store" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <Image src={Banner_image} className="w-full max-w-md lg:w-150" alt="Payora Banner" />
          </div>
        </div>
        
        <a href="https://paytm.com/care/customer-care" className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl lg:w-295 rounded-2xl lg:rounded-4xl bg-linear-to-b from-[#0085FE] to-[#00C6F0] px-5 py-6 sm:py-8.5 hover:scale-102 transition duration-300 cursor-pointer text-center sm:text-left">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <div className="flex items-center justify-center bg-white w-11 h-11 rounded-full flex-shrink-0">
              <Image src={Paytm_upi} className="w-10" alt="Paytm UPI" />
            </div>
            <div className="">
              <h1 className="text-lg md:text-xl text-white font-semibold">
                24×7 Trusted customer support to assist and help you in every step of your journey
              </h1>
            </div>
          </div>
          <div className="border border-white rounded-4xl p-1 px-4 mt-4 sm:mt-0">
            <button className="flex gap-1 text-white font-semibold items-center">
              Learn More
              <Image src={right} className="w-4 h-6" alt="Arrow Right" />
            </button>
          </div>
        </a>
      </div>
    </>
  )
}