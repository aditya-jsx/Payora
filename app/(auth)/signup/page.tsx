"use client"

import Image from "next/image";
import Logo from "@/app/assests/logo.svg"
import { useRef } from "react";
import axios from "axios";
// import { BASE_URL } from "@/app/lib/config";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Signup() {

  const BASE_URL = "http://localhost:3000";

  const router = useRouter();

  const userNameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup(){
    const username = userNameRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const password = passwordRef.current?.value;

    try{
      await axios.post(`${BASE_URL}/api/v1/signup`, {
        username,
        firstName,
        lastName,
        password
      });
      router.push('/signin');
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
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#9a9fa59f]">
        <div className="flex flex-col md:flex-row h-auto md:h-140 w-full max-w-4xl md:w-180 bg-[#002970] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full md:w-[40%] h-full bg-white p-6 md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none gap-6 md:gap-10">
            <Image src={Logo} className="w-48 md:w-48" alt="Payora Logo" />
            {/* <h1 className="text-2xl md:text-3xl font-semibold">SignUp</h1> */}
          </div>

          <div className="flex flex-col w-full md:w-[60%] h-full bg-[#002970] md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none px-6 sm:px-10 md:px-16 py-10 md:py-16 lg:py-24 gap-3 md:border-b-2 md:border-r-2 md:border-t-2 border-white">
            <div className="flex flex-col h-full">
              <h1 className="text-white text-md  font-semibold">Username : -</h1>
              <input ref={userNameRef} type="text" className="bg-white p-2 rounded-md w-full" />
            </div>
            <div className="flex flex-col h-full">
              <h1 className="text-white text-md  font-semibold">First name : -</h1>
              <input ref={firstNameRef} type="text" className="bg-white p-2 rounded-md w-full" />
            </div>
            <div className="flex flex-col h-full">
              <h1 className="text-white text-md  font-semibold">Last name : -</h1>
              <input ref={lastNameRef} type="text" className="bg-white p-2 rounded-md w-full" />
            </div>
            <div className="flex flex-col h-full">
              <h1 className="text-white text-md  font-semibold">Password : -</h1>
              <input ref={passwordRef} type="password" className="bg-white p-2 rounded-md w-full" />
            </div>
            <div className="h-full pt-4">
              <button
                onClick={signup}
                className="w-full sm:w-auto bg-white text-lg font-semibold rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-[#002970] hover:text-white border-2 border-white transition duration-300"
              >
                SignUp
              </button>
            </div>
            <div className="flex flex-col sm:flex-row pt-8 md:pt-16 gap-1 sm:gap-2">
              <Link href="/signin" className="text-white font-semibold hover:text-blue-300 transition duration-300">SignIn,</Link>
              <h1 className="text-white">if already has an account.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}