import Link from "next/link";
import React from "react";

export default function CreateAccount() {
  return (
    <main className=" min-h-[60vh] w-11/12 lg:w-5/12 m-auto mt-2 lg:mt-16 bg-white py-8 px-4 lg:px-16 rounded-lg pb-10 mb-10">
      <div>
        <Link href="/">
          <img src="./logo.svg" alt="" className=" w-6/12lg:w-2/12" />
        </Link>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-storllyblack">Sign up</h2>
          <p className="mt-1 text-slate-500 font-light">
            Create your account on Storlly
          </p>

          <form className="mt-12">
            <div className="flex flex-col mb-8">
              <label className="mb-1 text-storllyblack">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="p-2 py-3 border border-slate-300 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col mb-8">
              <label className="mb-1 text-storllyblack">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="p-2 py-3 border border-slate-300 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 text-storllyblack">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="p-2 py-3 border border-slate-300 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col mt-8">
              <label className="mb-1 text-storllyblack">Account type</label>
              <select className="p-2 py-3 border border-slate-300 rounded-md outline-none">
                <option>Merchant</option>
                <option>Creator</option>
                <option>Business</option>
              </select>
            </div>

            <div className="w-full mt-12">
              <button className="w-full py-3 px-8 bg-gradient-to-r from-[#A96AE9] to-primary text-white rounded-md">
                Create account
              </button>
            </div>
          </form>

          {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
          <div className="mt-10 flex items-center gap-2">
            <div className="w-6/12 h-[0.2px] bg-gray-600"></div>
            Or
            <div className="w-6/12 h-[0.2px] bg-gray-600"></div>
          </div>
        </div>
        <button className="w-full mt-10 py-3 px-8 border border-slate-600  text-slate-600 rounded-md flex items-center justify-center gap-4">
          <img src="./icons/google.svg" alt="" />
          Continue with Google
        </button>
        <p className="mt-12 font-light">
          Alreadyhavean account?{" "}
          <Link href="/login">
            <span className=" text-primary">Login</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
