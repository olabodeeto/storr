import React from "react";
import Wrapper from "@/shared/Wrapper";
import UserHeaderComp from "@/src/layouts/UserHeader";
import SimpleProdCard from "@/shared/components/Cards/SimpleProdCard";
import { productsData } from "@/shared/products";

export default function Index() {
  const products = productsData.map((obj, index) => (
    <SimpleProdCard key={index} data={obj} isowner={true} urlBase="usertag" />
  ));
  return (
    <Wrapper>
      <UserHeaderComp />
      <main className="bg-white pb-20 min-h-[90vh]">
        <div className="w-full relative">
          <div className="overflow-hidden h-[40vh] border-2  bg-white w-full mt-[3.6rem] lg:mt-[3.8rem]">
            <img
              src="./images/userbanner.png"
              alt=""
              className="object-cover h-[40vh] lg:h-auto"
            />
          </div>
          <div className="absolute z-10 top-1 text-white w-full">
            <h2 className="text-center mt-24 lg:mt-32 text-3xl font-bold lg:text-4xl">
              Element Store
            </h2>
          </div>
        </div>
        <div className="p-3 mt-4 flex items-center gap-8 border-b border-slate-200 lg:gap-12">
          <div className="flex items-center gap-1 cursor-pointer">
            <svg
              width="26"
              height="26"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 19.8333V8.16667C3.5 7.525 3.72867 6.9755 4.186 6.51817C4.64334 6.06083 5.19245 5.83256 5.83334 5.83333H22.1667C22.8083 5.83333 23.3578 6.062 23.8152 6.51933C24.2725 6.97667 24.5008 7.52578 24.5 8.16667V19.8333C24.5 20.475 24.2713 21.0245 23.814 21.4818C23.3567 21.9392 22.8076 22.1674 22.1667 22.1667H5.83334C5.19167 22.1667 4.64217 21.938 4.18484 21.4807C3.7275 21.0233 3.49922 20.4742 3.5 19.8333ZM5.83334 10.5H8.16667V8.16667H5.83334V10.5ZM10.5 10.5H22.1667V8.16667H10.5V10.5ZM10.5 15.1667H22.1667V12.8333H10.5V15.1667ZM10.5 19.8333H22.1667V17.5H10.5V19.8333ZM5.83334 19.8333H8.16667V17.5H5.83334V19.8333ZM5.83334 15.1667H8.16667V12.8333H5.83334V15.1667Z"
                fill="black"
              />
            </svg>

            <h4 className="text-sm">Products</h4>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_181_50)">
                <path
                  d="M3.28125 4.59375C3.1072 4.59375 2.94028 4.52461 2.81721 4.40154C2.69414 4.27847 2.625 4.11155 2.625 3.9375C2.625 3.76345 2.69414 3.59653 2.81721 3.47346C2.94028 3.35039 3.1072 3.28125 3.28125 3.28125H17.7188C17.8928 3.28125 18.0597 3.35039 18.1828 3.47346C18.3059 3.59653 18.375 3.76345 18.375 3.9375C18.375 4.11155 18.3059 4.27847 18.1828 4.40154C18.0597 4.52461 17.8928 4.59375 17.7188 4.59375H3.28125ZM5.90625 1.96875C5.7322 1.96875 5.56528 1.89961 5.44221 1.77654C5.31914 1.65347 5.25 1.48655 5.25 1.3125C5.25 1.13845 5.31914 0.971532 5.44221 0.848461C5.56528 0.72539 5.7322 0.65625 5.90625 0.65625H15.0938C15.2678 0.65625 15.4347 0.72539 15.5578 0.848461C15.6809 0.971532 15.75 1.13845 15.75 1.3125C15.75 1.48655 15.6809 1.65347 15.5578 1.77654C15.4347 1.89961 15.2678 1.96875 15.0938 1.96875H5.90625ZM0 17.0625C0 17.5846 0.207421 18.0854 0.576634 18.4546C0.945846 18.8238 1.44661 19.0312 1.96875 19.0312H19.0312C19.5534 19.0312 20.0542 18.8238 20.4234 18.4546C20.7926 18.0854 21 17.5846 21 17.0625V7.875C21 7.35286 20.7926 6.8521 20.4234 6.48288C20.0542 6.11367 19.5534 5.90625 19.0312 5.90625H1.96875C1.44661 5.90625 0.945846 6.11367 0.576634 6.48288C0.207421 6.8521 0 7.35286 0 7.875L0 17.0625ZM1.96875 17.7188C1.7947 17.7188 1.62778 17.6496 1.50471 17.5265C1.38164 17.4035 1.3125 17.2365 1.3125 17.0625V7.875C1.3125 7.70095 1.38164 7.53403 1.50471 7.41096C1.62778 7.28789 1.7947 7.21875 1.96875 7.21875H19.0312C19.2053 7.21875 19.3722 7.28789 19.4953 7.41096C19.6184 7.53403 19.6875 7.70095 19.6875 7.875V17.0625C19.6875 17.2365 19.6184 17.4035 19.4953 17.5265C19.3722 17.6496 19.2053 17.7188 19.0312 17.7188H1.96875Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_181_50">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h4 className="text-sm">Collection</h4>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.25 12.2483C19.2246 15.2355 19.0593 16.8822 17.9725 17.9681C16.6915 19.25 14.6283 19.25 10.5026 19.25C6.37613 19.25 4.31375 19.25 3.03187 17.9681C1.75 16.6862 1.75 14.6239 1.75 10.4974C1.75 6.37175 1.75 4.3085 3.03187 3.0275C4.11775 1.94075 5.7645 1.77537 8.75175 1.75"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.25 6.125H12.25C10.6593 6.125 9.70113 6.9055 9.345 7.2625C9.23563 7.37363 9.1805 7.42875 9.17875 7.42875C9.17875 7.4305 9.12363 7.48563 9.0125 7.595C8.6555 7.95113 7.875 8.90925 7.875 10.5V13.125M19.25 6.125L14.875 1.75M19.25 6.125L14.875 10.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h4 className="text-sm">Share</h4>
          </div>
        </div>

        <section className="border border-slate-200 w-full lg:w-10/12 xl:w-11/12 m-auto min-h-[20rem] mb-20 mt-12 md:mt-14 lg:mt-8">
          <div className="flex flex-wrap">{...products}</div>
        </section>
      </main>
    </Wrapper>
  );
}
