import React from "react";
import Image from "next/image";
import Unreal from "../public/assets/unreal.svg";
import Unity from "../public/assets/unity.svg";
import Oculus from "../public/assets/oculus.svg";
import Vive from "../public/assets/vive.svg";
import DownArrow from "../public/assets/arrow-down.svg";
import Slider from "@/common/Slider";
function TechSection() {
  return (
    <div className="container mx-auto my-20">
      <div className="relative">
        <div className="flex justify-center  bg-no-repeat bg-center items-center flex-col bg-image bg-[#302C42] opacity-25 h-[150px] sm:h-[200px] lg:h-[303px] z-50 rounded-full"></div>
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {" "}
          <h2 className="text-sm font-bold text-white sm:text-xl lg:text-4xl">
            TECHNOLOGIES & HARDWARE
          </h2>
          <h3 className="mt-2 font-light text-white text-md md:text-2xl lg:text-4xl">
            USED BY HYDRA VR.
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center -mt-10">
        <div className="border-[10px] z-50 border-[rgba(14,14,14,0.32)]  w-[80px] h-[80px] rounded-full"></div>
        <Image
          src={DownArrow}
          className="absolute btn w-[60px] rounded-full"
          alt=""
        />{" "}
      </div>
      <div className="my-10">
        <Slider>
          <Image src={Unreal} className="w-40 h-40 mx-4" alt="unreal engine" />
          <Image src={Unity} className="w-40 h-40 mx-4" alt="unity" />
          <Image src={Oculus} className="w-40 h-40 mx-4" alt="oculus" />
          <Image src={Vive} className="w-40 h-40 mx-4" alt="vive" />
          <Image src={Unreal} className="w-40 h-40 mx-4" alt="unreal engine" />
          <Image src={Unity} className="w-40 h-40 mx-4" alt="unity" />
          <Image src={Oculus} className="w-40 h-40 mx-4" alt="oculus" />
          <Image src={Vive} className="w-40 h-40 mx-4" alt="vive" />
        </Slider>
      </div>
    </div>
  );
}

export default TechSection;
