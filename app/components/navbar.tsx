import Link from "next/link";
import Image from "next/image";
import Logo from "../assests/logo.svg";
import Download from "../assests/download.svg";
import SignIn from "../assests/signin.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center h-16 w-full bg-white drop-shadow-xl">
        <div className="">
          <Image src={Logo} className="" alt="logo" />
        </div>

        <div className="flex justify-center items-center">
          <header className="bg-white tracking-wide relative z-50">
            <div className="flex flex-wrap justify-center sm:px-10 px-4 py-3 relative">
              <div
                id="collapseMenu"
                className="max-lg:hidden lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
              >
                <ul className="lg:flex lg:gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:w-2/3 max-lg:min-w-[280px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:overflow-auto z-50">
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-sans font-medium text-[15px] flex items-center"
                    >
                      Recharge & Bills
                      <svg
                        className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m8 10 4 4 4-4"
                        />
                      </svg>
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-14 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Mobile Recharge
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Electricity Bill
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          DTH Recharge
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Municipal Bill
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Water Bill
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Gas & Cylinder
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Loan EMI
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Insurance Premium
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Challan
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-sans font-medium flex text-[15px] block"
                    >
                      Ticket Booking
                      <svg
                        className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m8 10 4 4 4-4"
                        />
                      </svg>
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-16 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Flight Tickets
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Train Tickets
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Bus Tickets
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-sans font-medium flex text-[15px] block"
                    >
                      Payment & Services
                      <svg
                        className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m8 10 4 4 4-4"
                        />
                      </svg>
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-12 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Payments
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Loans & Credit Cards
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Wealth
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-sans font-medium flex text-[15px] block"
                    >
                      Paytm for Business
                      <svg
                        className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m8 10 4 4 4-4"
                        />
                      </svg>
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-12 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Online Payments
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Offline Payments
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Business Software
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Business Lending
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Insurance
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          For Developers - API
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group max-lg:px-3 max-lg:py-3 relative">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-sans font-medium flex text-[15px] block"
                    >
                      Company
                      <svg
                        className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m8 10 4 4 4-4"
                        />
                      </svg>
                    </a>

                    <ul className="flex flex-col absolute gap-5 top-14 max-lg:top-8 -left-20 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl">
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          About
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Sustainability
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                          Latest News
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                            Contant Us
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                            Customer care
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                            Career
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                            CSR
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 hover:fill-blue-700 text-slate-900 font-semibold text-[15px] flex items-center"
                        >
                            Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="toggleOpen" className="flex ml-auto lg:hidden">
                <button className="cursor-pointer">
                  <svg
                    className="w-7 h-7"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </button>
              </div>
            </div>
          </header>
        </div>

        <div className="flex items-center justify-between gap-6 ml-4 cursor-pointer">
          <div className="flex items-center justify-center gap-2">
            <Image src={Download} className="w-3" alt="logo" />
            <h1 className="font-semibold text-sm text-[#002970]">
              Download App
            </h1>
          </div>

          <div className="flex h-full rounded-3xl bg-[#002970] items-center justify-between cursor-pointer px-1 py-1 gap-2">
            <Image src={SignIn} className="w-8" alt="" />
            <h1 className="text-white text-sm font-semibold pr-3">Sign In</h1>
          </div>
        </div>
      </div>
    </>
  );
}
