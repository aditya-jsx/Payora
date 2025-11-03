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
        <div className="flex flex-col items-center gap-8 py-8 bg-[#f5f9ff]">
            <div className="flex items-center justify-between h-145 w-295 rounded-3xl bg-white p-6">
                <div className="flex flex-col w-[45%] pl-16 gap-6">
                    <div className="">
                        <Image src={Logo} className="w-40" alt="logo" />
                    </div>
                    <div className="">
                        <h1 className="text-5xl text-left font-semibold">
                            Pay anyone directly form your <span className="text-blue-500">bank account</span>
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-lg font-semibold">Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank Account. Plus, send & receive money from anyone.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://apps.apple.com/in/app/paytm-secure-upi-payments/id473941634">
                            <Image src={App_store} className="w-30" alt="" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=net.one97.paytm">
                            <Image src={Play_store} className="w-30" alt="" />
                        </a>
                    </div>
                </div>
                <div className="">
                    <Image src={Banner_image} className="w-150" alt="" />
                </div>
            </div>
            <a  href="https://paytm.com/care/customer-care" className="flex justify-between items-center h-16 w-295 rounded-4xl bg-linear-to-b from-[#0085FE] to-[#00C6F0] px-5 py-8.5 hover:scale-102 transition duration-300 cursor-pointer">
                <div className="flex gap-6 items-center">
                    <div className="flex items-center justify-center bg-white w-11 h-11 rounded-4xl">
                        <Image src={Paytm_upi} className="w-10" alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-xl text-white font-semibold">
                            24×7 Trusted customer support to assist and help you in every step of your journey
                        </h1>
                    </div>
                </div>
                <div className="border border-white rounded-4xl p-1 px-4">
                    <button className="flex  gap-1 text-white font-semibold">
                        Learn More
                        <Image src={right} className="w-4 h-6" alt="" />
                    </button>
                </div>
            </a>
        </div>
    </>
  )
}
