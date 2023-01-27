"use client";
import React from "react";
import Slick from "react-slick";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
function NextBtn({ onClick }: any) {
  return (
    <button
      aria-hidden="true"
      title="nextBtn"
      className=" text-xs  border-[12px] border-[rgba(14,14,14,0.32)]  rounded-full absolute top-1/2  -translate-y-1/2 outline-none"
      onClick={onClick}
      style={{ right: "-10px" }}
    >
      <ChevronRightIcon
        width={34}
        height={34}
        className="btn text-[#433D60] rounded-full text-sm"
      />
    </button>
  );
}

function PrevBtn({ onClick }: any) {
  return (
    <button
      aria-hidden="true"
      title="prevBtn"
      className="z-50 text-xs border-[12px] border-[rgba(14,14,14,0.32)]  rounded-full absolute top-1/2  -translate-y-1/2"
      onClick={onClick}
      style={{ left: "-10px" }}
    >
      <ChevronLeftIcon
        width={34}
        height={34}
        className="btn text-[#433D60] rounded-full text-sm"
      />
    </button>
  );
}

function Slider({ children }: { children: React.ReactNode }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    outerHeight: 500,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          // arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          // arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };
  return <Slick {...settings}>{children}</Slick>;
}

export default Slider;
