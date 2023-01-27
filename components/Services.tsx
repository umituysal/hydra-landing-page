import Image from "next/image";
import React from "react";
import BRightArrow from "../public/assets/b-right-arrow.svg";
import SimulationImage from "../public/assets/simulation.jpeg";
import EducationImage from "../public/assets/education.jpeg";
import SelfCareImage from "../public/assets/self-care.jpeg";
import OutdoorImage from "../public/assets/outdoor.jpeg";
import Link from "next/link";
import Slider from "@/common/Slider";

function Services() {
  return (
    <div className="container mx-auto">
      {" "}
      <div className="grid my-16 md:grid-cols-2">
        <div className="">
          <div className="flex flex-col text-4xl text-center text-white uppercase md:text-start">
            <h1 className="font-bold ">why build</h1>
            <h2 className="font-light">with hydra?</h2>{" "}
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
        <div className="!flex !max-w-[320px]  mx-4 flex-col !justify-center !items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={SimulationImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            simulation
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>

        <div className="!flex  !max-w-[320px]   mx-4 flex-col !justify-center items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={EducationImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            education
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>

        <div className="!flex !max-w-[320px]  mx-4 flex-col !justify-center items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={SelfCareImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            self-care
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>

        <div className="!flex  !max-w-[320px]   mx-4 flex-col !justify-center items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={OutdoorImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            outdoor
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>
        <div className="!flex !max-w-[320px]  mx-4 flex-col !justify-center !items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={SimulationImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            simulation
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>

        <div className="!flex  !max-w-[320px]   mx-4 flex-col !justify-center items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={EducationImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            education
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>

        <div className="!flex !max-w-[320px]  mx-4 flex-col !justify-center items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={SelfCareImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            self-care
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>

        <div className="!flex  !max-w-[320px]   mx-4 flex-col !justify-center items-center p-8 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] rounded-[40px] ">
          <Image
            alt=""
            src={OutdoorImage}
            className="rounded-full border-[12px] border-[rgba(14,14,14,0.32)] drop-shadow(0 4px 4px rgb(192, 183, 232, 0.01));"
          />
          <h3 className="pb-3 my-4 text-2xl font-bold uppercase border-b-2 border-slate-400">
            outdoor
          </h3>

          <p className="w-64 my-1 text-xs font-normal">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <Link
            href="/"
            className="mt-6 uppercase font-bold text-[#343045] btn text-xs  px-10 py-4  rounded-full"
          >
            try it now{" "}
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Services;
