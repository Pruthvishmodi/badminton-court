import React from "react";
import Image from "next/image";
import { Input } from "postcss";
const Form = () => {
  return (
    <div className="">
      <div className="h-56"></div>
      <div className=" h-[50vh] relative w-full ">
        <Image
          src="/Images/Banner1.jpg" // Provide the path to your image in the public directory
          alt="Description of your image"
          fill
        />
      </div>
      <div className="bg-red-950 justify-center items-center w-full">
        <div className="flex  justify-center items-center gap-6 ">
          <div>
            <input  name="name" placeholder="Enter your name" type="name" />
          </div>
          <div>
            <input name="email" placeholder="Enter your email" type="email" />
          </div>
          <div>
            <input name="phone" placeholder="Enter your phone" type="tel" />
          </div>
        </div>
        <div className="  item-center justify-center col-span-full  ">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            About
          </label>
          <div className="mt-2 flex items-center justify-center mx-24">
            <textarea
              id="about"
              name="about"
              rows={9}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
