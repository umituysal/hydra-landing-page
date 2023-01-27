import Image from "next/image";
import React from "react";
import BRightArrow from "../public/assets/b-right-arrow.svg";
import AboutImage from "../public/assets/about-image.jpeg";
import Link from "next/link";
function About() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 my-16 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-4xl text-white uppercase">
            <h1 className="font-bold ">introduction </h1>
            <h2 className="font-light">to hydra vr</h2>{" "}
          </div>
          <Image
            src={BRightArrow}
            className="hidden w-40 mt-10 lg:block"
            alt=""
          />
        </div>
        <p className="hidden lg:block text-[16px] text-white font-normal leading-[20px]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="px-6 max-h-[557px] max-w-[524px] mx-auto">
          <Image
            src={AboutImage}
            alt="About"
            className="rounded-[50px] rounded-tl-[140px] rounded-br-[140px] lg:rounded-[100px] lg:rounded-tl-[240px] lg:rounded-br-[240px]"
          />
        </div>
        <div className="flex flex-col items-center my-auto">
          <h1 className="hidden font-bold text-white uppercase md:text-4xl">
            about
          </h1>
          <h2 className="hidden font-light text-white uppercase md:text-4xl">
            hydra vr
          </h2>
          <p className="font-light  mx-auto w-[85%] text-xs md:text-[16px] leading-[19.5px] text-white my-10">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <Link
            href="/"
            className=" uppercase font-bold text-[#343045] btn text-xs  px-8 py-4  rounded-full"
          >
            LET’S GET IN TOUCH{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
