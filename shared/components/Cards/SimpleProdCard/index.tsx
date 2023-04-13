import Link from "next/link";
import Image from "next/image";
import React from "react";

type PropT = {
  isowner?: boolean;
  data: any;
  urlBase: string;
};

export default function SimpleProdCard({ data, isowner, urlBase }: PropT) {
  return (
    <div className="h-56 p-1 md:p-0 lg:p-2  md:h-64 lg:h-72 mb-6 lg:mb-8  w-6/12  lg:w-3/12 xl:w-3/12">
      <Link href={`${urlBase}/products/product/${data?.id}`}>
        <div className="shadow-sm lg:hover:shadow-md lg:transition-all duration-700  ease-in-out delay-75 lg:hover:-translate-y-2 lg:hover:scale-90 bg-white relative overflow-hidden rounded-sm h-56 lg:h-62 md:h-64 xl:h-72 cursor-pointer">
          <div className="h-40  lg:h-32 xl:h-52 bg-gray-300 w-full relative">
            <Image
              src={data?.img}
              alt=""
              width={100}
              height={100}
              className="w-full h-40 md:h-40 lg:h-40 xl:h-56 object-cover backdrop-blur-md"
            />
          </div>
          {!isowner && (
            <div className="w-8 h-8 flex items-center justify-center bg-midugreen absolute right-1 bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-12 rounded-full bg-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V6C7 5.45 7.45 5 8 5H16C16.55 5 17 5.45 17 6V18Z"
                  fill="white"
                />
              </svg>
            </div>
          )}

          <div className="mt-3 p-1 px-2">
            <h4 className="text-xs md:text-base font-light lg:mt-5 xl:mt-2">
              {data?.name}
            </h4>
            <h3 className="font-bold absolute bottom-1">₦{data?.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
