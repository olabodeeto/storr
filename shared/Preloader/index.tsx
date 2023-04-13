import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";
import SquareLoader from "react-spinners/SquareLoader";

export default function Preloader() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="w-full h-[100vh] absolute z-50 bg-[#ebeaef] top-0">
      <div className="w-full h-[100vh] flex justify-center items-center">
        {/* <SquareLoader color="#36d7b7" /> */}
        {/* <CircleLoader color="#434ff3" /> */}
        <RingLoader color="#434ff3" />
      </div>
    </div>
  );
}
