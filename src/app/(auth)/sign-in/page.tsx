'use client'
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
import { signin } from "@/app/actions/auth";

export default function SignIn() {
  const[state, action, pending] = useActionState(signin, undefined)
  return (
    <>
      <main className="container flex flex-col h-screen mx-auto justify-center items-center px-5 ">
        <Link href={"/"} className="self-start text-green-500 font-semibold hover:text-green-600  ">Kembali Halaman Utama</Link>
        <form action={action} className="flex flex-col w-6/12 md:w-4/12 gap-y-2 mx-auto justify-center items-center p-10">
        <div className="logo">
            <Image src={"/blog.svg"} width={24} height={24} alt={"myblog logo"} />
        </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="johndoe@mail.com"
              className=" px-2.5 py-2 border-2 rounded-md focus:outline-green-500 focus:outline-1"
            />
          </div>
          {state?.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password ..."
              className=" px-2.5 py-2 border-2 rounded-md focus:outline-green-500 focus:outline-1"
            />
          </div>
          {state?.errors?.password && (
            <p className="text-red-500">{state.errors.password}</p>
          )}
          <button type="submit" disabled={pending} className="font-semibold bg-green-500 px-2.5 py-2.5 rounded-md text-white hover:bg-green-600 w-6/12 mt-2">Sign In</button>
        </form>
        <p>Tidak memiliki account ?, <Link href={"/sign-up"} className="font-semibold  text-green-500 hover:text-green-600">Daftar Sekarang </Link></p>
      </main>
    </>
  );
}
