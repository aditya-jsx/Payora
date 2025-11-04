"use client";

import Logo from "@/app/assests/logo.svg";
import Close from "@/app/assests/close.svg";
import axios from "axios";
import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";

interface PaymentModalProps {
  onClose: () => void;
}

export default function PaymentModal({ onClose }: PaymentModalProps) {

  const toRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
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
        `/api/v1/accounts/transfer`,
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
        className="fixed inset-0 backdrop-blur-md flex flex-col items-center justify-center p-4"
      >
        <div className="relative flex flex-col items-center gap-8 md:gap-10 bg-linear-to-b from-white via-[#002970b8] to-[#002970] px-6 md:px-10 py-10 md:py-16 rounded-2xl w-full max-w-md">
          <Image
            onClick={onClose}
            src={Close}
            className="absolute top-3 right-3 cursor-pointer w-8 md:w-10"
            alt="Close"
          />
          <div className="w-full flex justify-center">
            <Image src={Logo} className="w-36 md:w-50" alt="Payora Logo" />
          </div>
          <div className="flex flex-col items-stretch gap-6 md:gap-8 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
              <h1 className="text-lg font-bold text-white sm:text-black md:text-white flex-shrink-0 w-full sm:w-auto">To: -</h1>
              <input
                type="number"
                placeholder="Eg:- 8"
                className="bg-white p-2 rounded-md w-full"
                ref={toRef}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full">
              <h1 className="text-lg font-bold text-white sm:text-black md:text-white flex-shrink-0">Amount: -</h1>
              <input
                type="number"
                placeholder="Eg:- 1000"
                className="bg-white p-2 rounded-md w-full"
                ref={amountRef}
              />
            </div>
          </div>
          <div>
            <button
              onClick={transfer}
              className="w-full px-6 py-2 bg-white text-black rounded-lg cursor-pointer font-semibold hover:bg-[#002970] hover:text-white border-2 border-white transition duration-300"
            >
              Send Money
            </button>
          </div>
        </div>
      </div>
    </>
  );
}