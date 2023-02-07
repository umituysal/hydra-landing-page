"use client";
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import HeroImage from "../public/assets/heroImage.jpeg";
import Envelope from "../public/assets/envelope.svg";
import PhoneVolume from "../public/assets/phone-volume.svg";
import Map from "../public/assets/map.svg";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size";
import Slider from "@/common/Slider";
function Banner() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="container flex flex-col mx-auto lg:flex-row lg:mt-20">
        <div className="flex flex-col items-center justify-center order-last lg:items-start lg:order-none">
          <h1 className="text-center lg:text-start mt-16 text-3xl lg:text-[40px] lg:leading-[50px] text-white capitalize">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]">
              dive
            </span>{" "}
            into the depths <br />
            of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF]">
              {" "}
              virtual reality
            </span>
          </h1>
          <p className="hidden lg:w-[70%] lg:block text-xs lg:text-sm text-white lg:leading-[20px] my-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quisquam cumque perferendis porro eligendi ipsa ab totam ullam
            suscipit consequatur facere consectetur, exercitationem aut ipsam
            magnam explicabo cum molestias aliquid.
          </p>
          <div className="flex items-center my-10 space-x-2 lg:my-0">
            <button className="text-[#343045] mr-5 uppercase text-xs font-bold btn w-[214px] h-12 rounded-full">
              build your world
            </button>
            <ArrowRightIcon className="hidden lg:block h-[35px] w-[50px] lg:h-[45px] lg:w-[60px] text-[#C0B7E8]" />
          </div>
        </div>
        <div className="mx-auto my-auto">
          <Image
            src={HeroImage}
            alt="hero"
            className="border-[16px] sm:mx-4 sm:max-h-[490px] sm:max-w-[426px] border-[rgba(0,0,0,0.13)] rounded-[100px] rounded-bl-[240px]"
          />
        </div>
      </div>

      <div className="container px-10 mx-auto p-12 mt-20 rounded-full bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));">
        {windowWidth < 768 && (
          <Slider>
            <div className="!flex  space-x-2 mx-4 items-center">
              <Image src={Map} className="w-12 h-12" alt="map" />
              <div className="flex flex-col text-white capitalize">
                <h2 className="text-xl">pay us a visit</h2>
                <span className="text-[10px]">
                  Union St, Seattle, WA 98101, United States
                </span>
              </div>
            </div>
            <div className="!flex space-x-2  mx-4 items-center">
              <Image src={PhoneVolume} className="w-12 h-12" alt="phone" />
              <div className="flex flex-col text-white capitalize">
                <h2 className="text-xl">give us a call</h2>
                <span className="text-[10px]">(110) 1111-1010</span>
              </div>
            </div>
            <div className="!flex  space-x-2  mx-4 items-center">
              <Image src={Envelope} className="w-12 h-12" alt="envelop" />
              <div className="flex flex-col text-white capitalize">
                <h2 className="text-xl">send us a message</h2>
                <span className="text-[10px]">Contact@HydraVTech.com</span>
              </div>
            </div>
          </Slider>
        )}

        <div className="hidden md:grid md:grid-cols-3 text-white capitalize divide-x-2 divide-[#C0B7E8]">
          <div className="flex items-center space-x-4">
            <Image src={Map} className="w-10 h-10" alt="" />
            <div className="flex flex-col">
              <h2 className="text-2xl">pay us a visit</h2>
              <span className="text-[12px] lg:text-[14px]">
                Union St, Seattle, WA 98101, United States
              </span>
            </div>
          </div>
          <div className="flex items-center pl-10 space-x-4 ">
            <Image src={PhoneVolume} className="w-10 h-10" alt="" />
            <div className="flex flex-col">
              <h2 className="text-2xl">give us a call</h2>
              <span className="text-[12px] lg:text-[14px]">
                (110) 1111-1010
              </span>
            </div>
          </div>
          <div className="flex items-center pl-10 space-x-4 ">
            <Image src={Envelope} className="w-10 h-10" alt="envelop" />
            <div className="flex flex-col">
              <h2 className="text-2xl">send us a message</h2>
              <span className="text-[12px] lg:text-[14px]">
                Contact@HydraVTech.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
