import Image from "next/image";
import React from "react";
import BRightArrow from "../public/assets/b-right-arrow.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from "@/common/Slider";
function Process() {
  return (
    <div className="container mx-auto ">
      <div className="grid my-16 md:grid-cols-2">
        <div className="">
          <div className="flex flex-col text-2xl md:text-[36px] md:leading-[43.88px] text-center text-white uppercase md:text-start">
            <h1 className="font-bold ">how we build</h1>
            <h2 className="font-light">with hydra vr?</h2>{" "}
          </div>
          <Image
            src={BRightArrow}
            className="hidden md:block md:mt-10 md:ml-4 md:w-40"
            alt=""
          />
        </div>
        <p className="hidden md:block md:text-[16px] text-white font-normal leading-[20px]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <Slider>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              01
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>3D Conception</span>
              <span>& Design</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              02
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>Interaction</span>
              <span>Design</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              03
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>VR World</span>
              <span>User Testing</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              04
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>Hydra VR</span>
              <span>Deploy</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              01
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>3D Conception</span>
              <span>& Design</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              02
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>Interaction</span>
              <span>Design</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              03
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>VR World</span>
              <span>User Testing</span>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="w-[160px] h-[160px]  rounded-full border-[12px] z-50 border-[rgba(14,14,14,0.32)] ">
            <div className="btn w-[136px] h-[136px] rounded-full flex justify-center items-center text-[#343045] font-bold text-6xl">
              04
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRightIcon className="w-[30px] text-[#C0B7E8]" />
            <div className="flex flex-col text-xl font-bold text-white">
              <span>Hydra VR</span>
              <span>Deploy</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Process;
