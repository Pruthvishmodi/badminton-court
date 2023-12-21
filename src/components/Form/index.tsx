import React from "react";
import Image from "next/image";
import Search from "../../../public/icons/name.svg";
const Form = () => {
  return (
    <div className="h-[100vh] relative  ">
      <div className=" justify-center h-[50%]">
        <div className="relative  w-full h-full">
          <Image
            src="/image/formimg.jpg" // Provide the path to your image in the public directory
            alt="Description of your image"
            layout="fill"
            objectFit="cointain"
          />
          <div className=" absolute w-full  h-auto top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:w-5/6">
            <div className=" flex  w-full justify-center ">
              <div>
                <div className="  text-xl lg:text-3xl font-bold font-oregano text-center p-2  text-white">
                  Free consulatation
                </div>
                <div className="lg:text-lg text-sm text-white p-4  text-center ">
                  Get ready to elevate your fitness game! Its time to focus on
                  your health at the badminton club.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50%]">
        <div className="w-full lg:px-container absolute top-[75%] lg:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="bg-white rounded-lg lg:p-4">
            <div className="lg:mt-10 lg:flex gap-10">
              <div className="relative flex w-full">
                <div className=" absolute  pointer-events-none ">
                  <Search className="fill-green-500 h-6 w-6 m-3" />
                </div>
                <input
                  className="  text-[#2acd35] w-full border-2 caret-green-500 outline-green-500 py-3 pl-12 "
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="relative flex w-full">
                <div className=" absolute  pointer-events-none ">
                  <Search className="fill-green-500 h-6 w-6 m-3" />
                </div>
                <input
                  className="  text-[#2acd35] w-full border-2 caret-green-500 outline-green-500 py-3 pl-12 "
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="relative flex w-full">
                <div className=" absolute  pointer-events-none ">
                  <Search className="fill-green-500 h-6 w-6 m-3" />
                </div>
                <input
                  className="  text-[#2acd35] w-full border-2 caret-green-500 outline-green-500 py-3 pl-12 "
                  type="tel"
                  placeholder="Enter your phone"
                />
              </div>
            </div>

            <div className=" flex flex-col justify-center relative">
              <div className=" absolute  pointer-events-none top-9 m-3">
                <Search className="fill-green-500 h-6 w-6" />
              </div>
              <textarea
                rows={5}
                className="  text-[#2acd35] lg:mt-8  mt-2 w-full outline-green-500 border-2     caret-green-500 py-3 pl-12 "
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-center mt-1">
              <button className="text-sm border-4 rounded-3xl  lg:p-3 p-2  bg-[#2acd35]   hover:bg-slate-600 text-white font-bold border-white text-center">
                send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

// <div className="h-auto">
//   <div className="bg-white h-56"></div>
//   <div className="relative  mb-10  justify-center h-[100vh]">
// <div className="absolute bg-red-300 w-full h-full">
//   <Image
//     src="/image/formimg.jpg" // Provide the path to your image in the public directory
//     alt="Description of your image"
//     layout="fill"
//     objectFit="cover"
//   />
// </div>

// <div className=" absolute w-full  h-auto top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:w-5/6">
//   <div className=" flex  w-full justify-center ">
//     <div>
//       <div className="text-6xl font-bold font-oregano text-center p-2  text-white">
//         Free consulatation
//       </div>
//       <div className="text-xl  text-white p-4  text-center ">
//         "Get ready to elevate your fitness game! It's time to focus on
//         your health at the badminton club, and a special guest will be
//         joining us soon."
//       </div>
//     </div>
//   </div>
// </div>
// <div className=" bg-white absolute w-full  h-auto top-[90vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 lg:w-5/6">
//   <div className="  mt-10 flex gap-20 mx-10 ">
//     <div className="relative flex w-full">
//       <div className=" absolute  pointer-events-none ">
//         <Search className="fill-black h-6 w-6 m-3" />
//       </div>
//       <input
//         className="  text-black w-full border-2 caret-green-500 outline-gray-900 py-3 pl-12 "
//         type="text"
//         placeholder="Enter your name"
//       />
//     </div>

//     <div className="relative flex w-full">
//       <div className=" absolute  pointer-events-none ">
//         <Search className="fill-black h-6 w-6 m-3" />
//       </div>
//       <input
//         className="  text-black w-full border-2 caret-green-500 outline-gray-900 py-3 pl-12 "
//         type="email"
//         placeholder="Enter your email"
//       />
//     </div>
//     <div className="relative flex w-full">
//       <div className=" absolute  pointer-events-none ">
//         <Search className="fill-black h-6 w-6 m-3" />
//       </div>
//       <input
//         className="  text-black w-full border-2 caret-green-500 outline-gray-900 py-3 pl-12 "
//         type="tel"
//         placeholder="Enter your phone"
//       />
//     </div>
//   </div>

//   <div className=" mx-10 flex justify-center mb-10">
//     <textarea
//       rows={10}
//       className=" mt-8  w-full outline-green-500  border-2  "
//       placeholder="Enter your message"
//     ></textarea>
//   </div>
// </div>
//   </div>
// </div>
