import React from "react";
import Image from "next/image";
import Search from "../../../public/icons/cart.svg";
const Form = () => {
  return (
    <div>
      <div className="bg-white h-56"></div>
      <div className="relative  object-fill justify-center h-[100vh]">
        <div className="absolute bg-red-300 w-full h-1/2">
          <Image
            src="/image/Banner1.jpg" // Provide the path to your image in the public directory
            alt="Description of your image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" bg-white absolute w-full  h-[40vh] top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 lg:w-5/6">
          <div className=" items-center  mt-10 lg:flex lg:justify-between lg:flex-row   mx-10 ">
            {/* <div>
            <input
              className=" w-[40vh] border-2 caret-green-500 outline-green-500 py-3 "
              type="text"
              placeholder="Enter your name"
            />
          </div> */}
            <div className="relative flex">
              <div className=" absolute  pointer-events-none ">
                <Search className="fill-black h-12 w-12" />
              </div>
              <input
                className="  text-black w-[40vh] border-2 caret-green-500 outline-gray-900 py-3 pl-12 "
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <input
                className="  w-[40vh] border-2 caret-green-500   outline-green-500 py-3"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                className="  w-[40vh] border-2 caret-green-500  outline-green-500   py-3"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className=" mx-10 flex justify-center ">
            <textarea
              className=" mt-8  w-full outline-green-500  border-2 h-[20vh] "
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

{
  /* <div className="relative w-full h-[50vh]">
      <Image
        src="/Images/Banner1.jpg" // Provide the path to your image in the public directory
        alt="Description of your image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  h-[50%] p-4 rounded-md bg-green-700">
        <div className="flex gap-6 bg-red-400">
          <div>
            <input
              className="bg-blue-300 w-full"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              className="bg-blue-300 w-full"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              className="bg-blue-300 w-full"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <textarea className="w-full" placeholder="Enter your message"></textarea>
        </div>
      </div>
    </div> */
}
