"use client";

import Logo from "@/app/assests/logo.svg";
import Close from "@/app/assests/close.svg";
import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";

export default function PaymentModal({ onClose }) {
  const BASE_URL = "http://localhost:3000";

  const toRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // const [message, setMessage] = useState<string | null>(null);

  async function transfer() {
    const toValue = toRef.current?.value;
    const amountValue = amountRef.current?.value;

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/accounts/transfer`,
        {
          to: toValue,
          amount: amountValue,
        },
        {
          withCredentials: true,
        }
      );
      if (response) {
        // const msg = "Success";
        // setMessage(msg);
        alert("Transaction Successfull!!");

        if (toRef.current) {
          toRef.current.value = "";
        }
        if (amountRef.current) {
          amountRef.current.value = "";
        }
        onClose();
      }
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
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 backdrop-blur-md flex flex-col items-center justify-center"
      >
        <div className="relative flex flex-col items-center gap-10 bg-linear-to-b from-white via-[#002970b8] to-[#002970] px-10 py-16 rounded-2xl">
          <Image
            onClick={onClose}
            src={Close}
            className="absolute top-2 right-2 cursor-pointer w-10"
            alt=""
          />
          <div className="w-full flex justify-center">
            <Image src={Logo} className="w-50" alt="" />
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-15.5 h-full w-full">
              <h1 className="text-lg font-bold">To: -</h1>
              <input
                type="number"
                placeholder="Eg:- 8"
                className="bg-white p-1 rounded-md"
                ref={toRef}
              />
            </div>
            <div className="flex items-center gap-3 h-full w-full">
              <h1 className="text-lg font-bold">Amount: -</h1>
              <input
                type="number"
                placeholder="Eg:- 1000"
                className="bg-white p-1 rounded-md"
                ref={amountRef}
              />
            </div>
          </div>
          <div>
            <button
              onClick={transfer}
              className="w-full p-2 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white transition duration-300"
            >
              Send Money
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
