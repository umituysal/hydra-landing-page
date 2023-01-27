import React from "react";

function Form() {
  return (
    <div className="container mt-28 rounded-[30px] md:rounded-[80px] md:mx-auto bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E]">
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="pb-4 mb-4 text-2xl font-bold text-white uppercase border-b-2 border-white md:text-4xl">
          join hydra
        </h1>
        <h2 className="mb-16 text-2xl font-light text-center text-white md:text-4xl md:text-start">
          Let’s Build Your VR Experience
        </h2>
        <form className="flex flex-col items-center w-[85%] space-y-8">
          <div className="grid w-full md:grid-cols-2 gap-y-5 md:gap-x-3">
            <input
              className="py-5 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] pl-10 text-sm font-normal !text-white border-2 border-white rounded-full"
              type="text"
              placeholder="First Name "
              required
            />
            <input
              className="py-5 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] pl-10 text-sm font-normal !text-white border-2 border-white rounded-full"
              type="text"
              placeholder="Last Name "
              required
            />
          </div>
          <div className="grid w-full md:grid-cols-2 gap-y-5 md:gap-x-3">
            <input
              className="py-5 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] pl-10 text-sm font-normal !text-white border-2 border-white rounded-full"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="py-5 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] pl-10 text-sm font-normal !text-white border-2 border-white rounded-full"
              type="number"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="w-full">
            <input
              className="py-5 w-full bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] pl-10 text-sm font-normal !text-white border-2 border-white rounded-full"
              type="text"
              placeholder="Subject"
              required
            />
          </div>
          <textarea
            className="pt-6 w-full h-40 bg-gradient-to-r from-[#211E2E] via-[#433D60]  to-[#211E2E] pl-10 text-sm font-normal !text-white border-2 border-white rounded-[30px]"
            placeholder="Tell Us Something..."
          ></textarea>
          <button  className="w-full sm:w-[214px] h-[48px] uppercase text-[#343045] btn text-xs  rounded-full">
            SEND TO HYDRA
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
