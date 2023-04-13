import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useState, useEffect, Suspense } from "react";
import Preloader from "@/shared/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    //@ts-ignore
    const handleRouteChange = (url, { shallow }) => {
      setisLoading(true);

      setTimeout(() => {
        setisLoading(false);
      }, 800);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      {isLoading && <Preloader />}
      <Suspense fallback={<Preloader />}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
