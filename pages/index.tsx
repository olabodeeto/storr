import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import HeaderComp from "@/src/layouts/Header";
import Wrapper from "@/shared/Wrapper";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Wrapper>
        <HeaderComp />
        <main className="pt-10 bg-white pb-20">
          <div className=" bg-banner-bg h-[100vh] md:h-[60vh] lg:h-[68vh] flex justify-center xl:mt-6">
            <div>
              <h1
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="text-white font-bold text-center text-4xl md:text-6xl lg:text-5xl mt-40 lg:mt-24 xl:text-6xl"
              >
                Bring it online
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="40"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className="text-white font-bold text-center text-4xl md:text-6xl lg:text-5xl xl:text-6xl"
              >
                faster and easier
              </h1>
              <p className="mt-5 tracking-wide font-light text-center w-10/12 text-white md:w-7/12 lg:w-7/12 xl:w-8/12 m-auto lg:text-sm xl:text-base">
                Create and share your your product collection link faster,
                Manage order and connect with buyers{" "}
              </p>

              <div className="flex gap-3 justify-center mt-8">
                <button
                  className="py-3 px-8 bg-gradient-to-r from-[#A96AE9] to-primary text-white rounded-md"
                  onClick={() => Router.push("/createaccount")}
                >
                  Get started
                </button>
                <button className="py-3 px-12 border rounded-md text-white hover:bg-white hover:text-slate-600 transition-all ease-linear delay-200">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <section className=" px-4 xl:px-16 py-20 mt-10 min-h-[60vh] flex flex-col lg:flex-row gap-16">
            <div>
              <img src="./images/img1.svg" alt="" />
            </div>
            <div className="w-full lg:w-6/12">
              <div className="w-full min-h-[20vh] bg-[#F7F7F8] p-2 xl:p-5 xl:mt-20">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="20"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="text-6xl text-storllyblack font-bold"
                >
                  Storlly for
                </h2>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary to-pink-400 xl:mt-2"
                >
                  creators
                </h2>
                <p
                  data-aos="fade-down"
                  data-aos-delay="30"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="mt-8 text-storllyblack font-light"
                >
                  As a writer or graphic designer, you have the option to
                  establish your own Storlly collection and offer your services
                  for sale. This can help you connect with potential clients who
                  may be interested in hiring you for their next significant
                  project
                </p>
              </div>
            </div>
          </section>

          <section className=" px-4 xl:px-16 py-20 mt-10 min-h-[60vh] flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-6/12">
              <div className="w-full min-h-[20vh] bg-[#F7F7F8] p-2 xl:p-5 xl:mt-20">
                <h2
                  data-aos="fade-down"
                  data-aos-delay="30"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="text-6xl text-storllyblack font-bold"
                >
                  Storlly for
                </h2>
                <h2
                  data-aos="fade-down"
                  data-aos-delay="20"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary to-pink-400 xl:mt-2"
                >
                  fashion
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="30"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="mt-8 text-storllyblack font-light"
                >
                  Looking to sell your fashion products? Showcase your items on
                  our platform and receive hassle-free payments. Give someone
                  the opportunity to add something new to their wardrobe. Turn
                  your unwanted items into cash by selling them on Storrly.
                </p>
              </div>
            </div>

            <div>
              <img
                data-aos="fade-up"
                data-aos-delay="30"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src="./images/img2.svg"
                alt=""
              />
            </div>
          </section>

          <section className=" px-4 xl:px-16 py-20 mt-10  min-h-[60vh] flex flex-col lg:flex-row gap-16">
            <div>
              <img
                data-aos="zoom-in-down"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src="./images/img3.svg"
                alt=""
              />
            </div>
            <div className="w-full lg:w-6/12">
              <div className="w-full min-h-[20vh] bg-[#F7F7F8] p-2 xl:p-5 xl:mt-20">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="20"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="text-6xl text-storllyblack font-bold"
                >
                  Storlly for
                </h2>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="20"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary to-pink-400 xl:mt-2"
                >
                  small scale
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="20"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="mt-8 text-storllyblack font-light"
                >
                  No matter your line of work, whether you sell electronics, run
                  a boutique, operate a hair salon, or provide nail services,
                  you can now showcase your business to a vast audience of
                  potential customers and receive effortless payments.
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 xl:px-16 py-20 md:py-5 mt-10 md:min-h-[20vh]  xl:min-h-[65vh] flex justify-center items-center">
            <div className="w-full rounded-2xl bg-[#16191B] justify-center py-32">
              <h2 className="text-4xl xl:text-[2.8rem] font-bold text-white text-center">
                Download the app
              </h2>
              <p className="text-white text-sm lg:text-base w-10/12 m-auto text-center font-light xl:w-5/12 mt-2 xl;mt-5">
                We are currently working to bring Storlly experience to your
                favourite mobile platform.
              </p>
            </div>
          </section>
        </main>
        <footer className="py-10 ">
          <ul className="flex gap-5 justify-center text-sm mt-10">
            <li>POLICY</li>
            <li>BLOG</li>
            <li>SUPPORT</li>
            <li>FAQ</li>
          </ul>
          <div className="flex gap-8 justify-center mt-6">
            <img src="./icons/facebook.svg" alt="" />
            <img src="./icons/instagram.svg" alt="" />
            <img src="./icons/twitter.svg" alt="" />
          </div>
          <p className="text-center text-xs mt-20">© 2023 Storlly</p>
        </footer>
      </Wrapper>
    </>
  );
}
