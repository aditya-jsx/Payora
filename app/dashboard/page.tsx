"use client"

import axios from "axios";
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import SBI_logo from "@/app/assests/sbi-logo.png"
import Image from "next/image";

import PaymentModal from "../components/paymentModal";

export default function Dashboard() {

  const BASE_URL = "http://localhost:3000/";
  const [balance, setBalance] = useState<number | null>(null);
  const [account, getAccount] = useState<number | null>(null);

  const [showModal, setShowModal] = useState(false);

  async function getAccountNumber(){
    const response = await axios.get(`${BASE_URL}/api/v1/accounts/balance`, {
        withCredentials: true,
    });
    const accountNumber = response.data.accountNumber;
    getAccount(accountNumber);
  }

  useEffect(()=>{
    getAccountNumber();
  }, [])

  async function getBalance(){

    try{
      const response = await axios.get(`${BASE_URL}/api/v1/accounts/balance`, {
        withCredentials: true,
      });
      const balance = response.data.balance;
      setBalance(balance);
    }catch(e){
      if(axios.isAxiosError(e) && e.response){
        alert(e.response.data.msg);
      }else{
        alert("An unexpected error occured, Please try again.")
      }
    }

  }

  return (
    <>
      <Navbar />

      <div className="h-full w-full px-24">
        <div className="flex flex-col mt-4 gap-8">
        <h1 className="text-2xl font-bold">
          Your Accounts
        </h1>
          <div className="flex gap-4">
            <div className="flex flex-col justify-between gap-4 h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6 hover:shadow-2xl">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-white text-xl font-bold">SBI Bank</h1>
                  <p className="text-md text-white">A/c No - {account}</p>
                </div>
                <div className="flex bg-white rounded-4xl items-center justify-center h-10 w-10">
                  <div className="bg-black rounded-4xl flex items-center h-8.5 w-8.5 justify-center">
                    <Image src={SBI_logo} className="w-8 h-8" alt="SBI Logo" />
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <h1 className="text-white text-md font-semibold">
                  Add Money +
                </h1>
              </div>
              <div className="w-full">
                <button
                className="w-full p-1 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white transition duration-300"
                onClick={getBalance}
                >
                  {balance !== null ? `Rs. ${balance}` : "Check Balance"}
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6 hover:shadow-2xl">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-white text-xl font-bold">Pay</h1>
                  <p className="text-md text-white">From A/c No - {account}</p>
                </div>
              </div>
              {/* <div className="pb-4">
                <h1 className="text-white text-md font-semibold">
                  Add Money +
                </h1>
              </div> */}
              <div className="w-full">
                <button
                className="w-full p-1 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white transition duration-300"
                onClick={()=>{setShowModal(true)}}
                >
                  To Account Number
                  {/* {balance !== null ? `Rs. ${balance}` : "Check Balance"} */}
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6 hover:shadow-2xl">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-white text-xl font-bold">SBI Bank</h1>
                  <p className="text-md text-white">A/c No - {account}</p>
                </div>
                <div className="flex bg-white rounded-4xl items-center justify-center h-10 w-10">
                  <div className="bg-black rounded-4xl flex items-center h-8.5 w-8.5 justify-center">
                    <Image src={SBI_logo} className="w-8 h-8" alt="SBI Logo" />
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <h1 className="text-white text-md font-semibold">
                  Add Money +
                </h1>
              </div>
              <div className="w-full">
                <button
                className="w-full p-1 bg-white text-black rounded-lg cursor-pointer font-semibold"
                onClick={getBalance}
                >
                  {/* {balance !== null ? `Rs. ${balance}` : "Check Balance"} */}
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6 hover:shadow-2xl">
              <div className="flex justify-between items-center">
                <div className="">
                  <h1 className="text-white text-xl font-bold">SBI Bank</h1>
                  <p className="text-md text-white">A/c No - {account}</p>
                </div>
                <div className="flex bg-white rounded-4xl items-center justify-center h-10 w-10">
                  <div className="bg-black rounded-4xl flex items-center h-8.5 w-8.5 justify-center">
                    <Image src={SBI_logo} className="w-8 h-8" alt="SBI Logo" />
                  </div>
                </div>
              </div>
              <div className="pb-4">
                <h1 className="text-white text-md font-semibold">
                  Add Money +
                </h1>
              </div>
              <div className="w-full">
                <button
                className="w-full p-1 bg-white text-black rounded-lg cursor-pointer font-semibold"
                onClick={getBalance}
                >
                  {/* {balance !== null ? `Rs. ${balance}` : "Check Balance"} */}
                </button>
              </div>
            </div>
            
          </div>

          <div>
            Recommended
          </div>

          <div className="">
            Payment History
          </div>

          {showModal && <PaymentModal onClose={()=>{setShowModal(false)}} />}
          
        </div>
      </div>
    </>
  )
}