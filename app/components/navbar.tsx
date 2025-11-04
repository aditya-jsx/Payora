"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assests/logo.svg";
import Download from "../assests/download.svg";
import SignIn from "../assests/signin.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center h-16 w-full bg-white drop-shadow-xl sm:px-6 lg:px-10">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={Logo} className="w-28 md:w-32" alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center">
          <header className="bg-white tracking-wide relative z-50">
            <div className="flex flex-wrap justify-center sm:px-10 px-4 py-3 relative">
              <div id="collapseMenu">
                <ul className="lg:flex lg:gap-x-4">
                  {/* Recharge & Bills */}
                  <li className="group relative">
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
                    <ul className="flex-col absolute gap-5 top-14 -left-14 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl shadow-lg hidden lg:flex">
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Mobile Recharge
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Electricity Bill
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
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
                  {/* Ticket Booking */}
                  <li className="group relative">
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
                    <ul className="flex-col absolute gap-5 top-14 -left-16 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl shadow-lg hidden lg:flex">
                      {/* ... Dropdown items ... */}
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Flight Tickets
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Train Tickets
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Bus Tickets
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="group relative">
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
                    <ul className="flex-col absolute gap-5 top-14 -left-12 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl shadow-lg hidden lg:flex">
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Payments
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Loans & Credit Cards
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-700 text-slate-900 font-semibold text-[15px]"
                        >
                          Wealth
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="group relative">
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
                    <ul className="flex-col absolute gap-5 top-14 -left-12 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl shadow-lg hidden lg:flex">
                      <li className="">
                        {" "}
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
                  <li className="group relative">
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
                    <ul className="flex-col absolute gap-5 top-14 -left-20 z-50 bg-white max-h-0 overflow-hidden min-w-[230px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 pl-8 group-hover:py-8 transition-all rounded-xl shadow-lg hidden lg:flex">
                      <li className="">
                        {" "}
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
            </div>
          </header>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center justify-center gap-2 cursor-pointer">
            <Image src={Download} className="w-3" alt="download" />
            <h1 className="font-semibold text-sm text-[#002970]">
              Download App
            </h1>
          </div>

          <div className="rounded-3xl bg-[#002970] pr-1 sm:pr-2">
            <Link
              href="/signup"
              className="flex items-center justify-between text-white text-sm font-semibold px-1 py-1 gap-1 sm:gap-2"
            >
              <Image src={SignIn} className="w-6 sm:w-8" alt="Sign In" />
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div id="toggleOpen" className="flex lg:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobileMenu"
          className="lg:hidden absolute top-16 left-0 w-full bg-white z-40 shadow-lg"
          onClick={toggleMenu}
        >
          <ul className="space-y-1 p-4">
            {/* Mobile Nav Links */}
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-gray-100"
              >
                Recharge & Bills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-gray-100"
              >
                Ticket Booking
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-gray-100"
              >
                Payment & Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-gray-100"
              >
                Paytm for Business
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-gray-100"
              >
                Company
              </a>
            </li>
            <li className="sm:hidden">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-gray-100"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
