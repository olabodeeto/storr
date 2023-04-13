import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const Router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    Router.push("/usertag");
  };

  return (
    <main className=" min-h-[60vh] w-11/12 lg:w-5/12 m-auto mt-2 lg:mt-16 bg-white py-8 px-4 lg:px-16 rounded-lg pb-10 mb-10">
      <div>
        <Link href="/">
          <img src="./logo.svg" alt="" className=" w-6/12lg:w-2/12" />
        </Link>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-storllyblack">Log in</h2>
          <p className="mt-1 text-slate-500 font-light">
            Welcome back to Storlly
          </p>

          <form onSubmit={handleLogin} className="mt-12">
            <div className="flex flex-col mb-8">
              <label className="mb-1 text-storllyblack">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="p-2 py-3 border border-slate-300 rounded-md outline-none"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 text-storllyblack">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="p-2 py-3 border border-slate-300 rounded-md outline-none"
                required
              />
            </div>
            <p className="text-right mt-4">
              <span className="text-sm cursor-pointer">Forgot password</span>
            </p>
            <div className="w-full mt-6">
              <button className="w-full py-3 px-8 bg-gradient-to-r from-[#A96AE9] to-primary text-white rounded-md">
                Login
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
          New to Storlly?{" "}
          <Link href="/createaccount">
            <span className=" text-primary">Get started</span>
          </Link>
        </p>
      </div>
    </main>
  );
}
