"use client";

import axios from "axios";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import SBI_logo from "@/app/assests/sbi-logo.png";
import upi from "@/app/assests/upi.svg";
import Image from "next/image";

import PaymentModal from "../components/paymentModal";
import Recommended from "../components/recommended";
import PaymentHistory from "../components/paymentHistory";

export default function Dashboard() {
  const BASE_URL = "http://localhost:3000/";
  const [balance, setBalance] = useState<number | null>(null);
  const [account, getAccount] = useState<number | null>(null);

  const [showModal, setShowModal] = useState(false);

  async function getAccountNumber() {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/accounts/balance`, {
        withCredentials: true,
      });
      const accountNumber = response.data.accountNumber;
      getAccount(accountNumber);
    } catch (e) {
      console.error("Failed to get account number", e);
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data.msg);
      } else {
        alert("An unexpected error occurred while fetching account number.");
      }
    }
  }

  useEffect(() => {
    getAccountNumber();
  }, []);

  async function getBalance() {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/accounts/balance`, {
        withCredentials: true,
      });
      const balance = response.data.balance;
      setBalance(balance);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        alert(e.response.data.msg);
      } else {
        alert("An unexpected error occured, Please try again.");
      }
    }
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-300 to-blue-100">
        <Navbar />
        <div className="h-full w-full px-4 sm:px-8 md:px-16 lg:px-24 py-4">
          <div className="flex flex-col mt-4 gap-8">
            <h1 className="text-xl md:text-2xl font-bold">Your Accounts</h1>
            <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-x-visible gap-4 pb-4 no-scrollbar">
              {/* SBI Bank Card */}
              <div className="flex flex-col justify-between gap-4 h-60 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6 hover:shadow-2xl">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className="text-white text-lg md:text-xl font-bold">SBI Bank</h1>
                    <p className="text-sm md:text-md text-white">A/c No - {account || '...'}</p>
                  </div>
                  <div className="flex bg-white rounded-full items-center justify-center h-10 w-10 flex-shrink-0">
                    <div className="bg-black rounded-full flex items-center h-8.5 w-8.5 justify-center">
                      <Image
                        src={SBI_logo}
                        className="w-8 h-8"
                        alt="SBI Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-4">
                  <h1 className="text-white text-md font-semibold cursor-pointer">
                    Add Money +
                  </h1>
                </div>
                <div className="w-full">
                  <button
                    className="w-full p-2 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white transition duration-300"
                    onClick={getBalance}
                  >
                    {balance !== null ? `Rs. ${balance}` : "Check Balance"}
                  </button>
                </div>
              </div>

              {/* Pay Card */}
              <div className="flex flex-col justify-between gap-4 h-60 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6 hover:shadow-2xl">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className="text-white text-lg md:text-xl font-bold">Pay</h1>
                    <p className="text-sm md:text-md text-white">
                      From A/c No - {account || '...'}
                    </p>
                  </div>
                </div>
                <div className="w-full mt-auto">
                  <button
                    className="w-full p-2 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white transition duration-300"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    To Account Number
                  </button>
                </div>
              </div>

              {/* UPI Lite Card */}
              <div className="flex flex-col justify-between gap-4 h-60 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-gradient-to-b from-[#002970d7] via-[#187aae] to-[#1f73daa2] rounded-2xl p-6 hover:shadow-2xl">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className="text-white text-lg md:text-xl font-bold">UPI Lite</h1>
                  </div>
                  <div className="flex bg-white rounded-full items-center justify-center h-10 w-10 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <h1 className="text-white text-md font-semibold">
                    PIN-less & Super fast payments
                  </h1>
                  <button className="w-full p-2 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white transition duration-300">
                    Activate
                  </button>
                </div>
              </div>

              {/* Add Accounts Card */}
              <div className="flex flex-col justify-center items-center gap-4 h-60 w-72 sm:w-80 flex-shrink-0 lg:w-full bg-transparent border-2 border-dashed border-gray-600 rounded-2xl p-6 hover:shadow-2xl cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center bg-blue-400 rounded-full h-8 w-8">
                    <svg
                      className="w-6 h-6 text-white"
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
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                  </div>
                  <div className="px-4">
                    <h1 className="text-lg md:text-xl text-center font-semibold">Add Accounts on UPI</h1>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-.955a1 1 0 0 1 .458-.84l7-4.52a1 1 0 0 1 1.084 0l7 4.52a1 1 0 0 1 .458.84V9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Z"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center justify-center bg-white rounded-full">
                    <Image src={upi} className="w-10" alt="UPI" />
                  </div>
                </div>
              </div>
            </div>

            <Recommended />

            <PaymentHistory />

            {showModal && (
              <PaymentModal
                onClose={() => {
                  setShowModal(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}