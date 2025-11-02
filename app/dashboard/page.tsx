"use client"

import axios from "axios";
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import SBI_logo from "@/app/assests/sbi-logo.png"
import Image from "next/image";

export default function Dashboard() {

  const BASE_URL = "http://localhost:3000/";
  const [balance, setBalance] = useState<number | null>(null);
  const [account, getAccount] = useState<number | null>(null);

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
            <div className="flex flex-col justify-between gap-4 h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] rounded-2xl p-6">
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
                  {balance !== null ? `Rs. ${balance}` : "Check Balance"}
                </button>
              </div>
            </div>
            <div className="h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] text-white text-xl rounded-2xl p-4">Upi Lite</div>
            <div className="h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] text-white text-xl rounded-2xl p-4">Add Upi Credit Card</div>
            <div className="h-60 w-80 bg-gradient-to-b from-[#002970] via-[#013185] to-[#002970a2] text-white text-xl rounded-2xl p-4">Add Accounts on Upi</div>
          </div>

          <div>
            Recommended
          </div>

          <div className="">
            Payment History
          </div>
        </div>
      </div>
    </>
  )
}