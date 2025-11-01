"use client"

import Image from "next/image";
import Logo from "@/app/assests/logo.svg"
import { useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signin() {
  const BASE_URL = "http://localhost:3000";

  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signin(){

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try{
      await axios.post(`${BASE_URL}/api/v1/signin`, {
        username,
        password
      })
      router.push('/dashboard')
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
      <div className="h-screen w-full flex items-center justify-center">
                  <div className="flex h-140 w-180 p-4 bg-[#002970] rounded-2xl">
                      <div className="flex flex-col items-center justify-center w-[40%] h-full bg-white rounded-l-2xl gap-10">
                        <Image src={Logo} className="w-48" alt="" />
                        <h1 className="text-3xl font-semibold">SignIn</h1>
                      </div>
      
                      <div className="flex flex-col h-full w-[60%]  bg-[#002970] rounded-r-2xl px-16 py-36 gap-4">
                        <div className="flex flex-col">
                          <h1 className="text-white text-md font-semibold">Username : -</h1>
                          <input ref={usernameRef} type="text" className="bg-white p-1 rounded-md" />
                        </div>
                        <div className="flex flex-col ">
                          <h1 className="text-white text-md font-semibold">Password : -</h1>
                          <input ref={passwordRef} type="password" className="bg-white p-1 rounded-md" />
                        </div>
                        <div className="h-full">
                          <button
                          onClick={signin} 
                          className="bg-white text-lg font-semibold rounded-lg p-2 hover:cursor-pointer hover:bg-[#002970] hover:text-white border-1 hover:border-white transition duration-300"> 
                            SignUp
                          </button>
                        </div>
                      </div>
                  </div>
              </div>
    </>
  )
}