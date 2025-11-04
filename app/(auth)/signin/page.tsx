"use client";

import Image from "next/image";
import Logo from "@/app/assests/logo.svg";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Signin() {

  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      await axios.post(`/api/v1/signin`, {
        username,
        password,
      });
      router.push("/dashboard");
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
      <div className="h-screen w-full flex items-center justify-center p-4 bg-[#9a9fa59f]">
        <div className="flex flex-col md:flex-row h-auto md:h-140 w-full max-w-4xl md:w-180 bg-[#002970] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full md:w-[40%] h-full bg-white p-6 md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none gap-6 md:gap-10">
            <Image src={Logo} className="w-48 md:w-48" alt="Payora Logo" />
            {/* <h1 className="text-2xl md:text-3xl font-semibold">SignIn</h1> */}
          </div>

          <div className="flex flex-col h-full w-full md:w-[60%] bg-[#002970] md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none px-6 sm:px-10 md:px-16 py-10 md:py-20 lg:py-36 gap-4 md:border-b-2 md:border-r-2 md:border-t-2 border-white">
            <div className="flex flex-col">
              <h1 className="text-white text-md font-semibold">Username : -</h1>
              <input
                ref={usernameRef}
                type="text"
                className="bg-white p-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-md font-semibold">Password : -</h1>
              <input
                ref={passwordRef}
                type="password"
                className="bg-white p-2 rounded-md w-full"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={signin}
                className="w-full sm:w-auto bg-white text-lg font-semibold rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-[#002970] hover:text-white border-2 border-white transition duration-300"
              >
                SignIn
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mt-auto pt-4">
              <Link
                href="/signup"
                className="text-white font-semibold hover:text-blue-300 transition duration-300"
              >
                SignUp,
              </Link>
              <h1 className="text-white">if you don't have an account</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}