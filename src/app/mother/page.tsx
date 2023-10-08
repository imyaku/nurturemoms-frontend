"use client"
import {
  MdHome,
  MdBook,
  MdCalendarMonth,
  MdInsertDriveFile,
  MdShoppingCart,
  MdInfo,
} from "react-icons/md";
import { HiMiniUser} from "react-icons/hi2";
import { BiLogOut } from "react-icons/bi";
import React, { useState, useEffect } from "react";

const MotherDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);



 useEffect(() => {
   // Function to check screen width and toggle sidebar based on it
   const handleResize = () => {
     if (window.innerWidth < 768) {
       setCollapsed(true);
     } else {
       setCollapsed(false);
     }
   };

   // Initial check on component mount
   handleResize();

   // Add event listener for window resize
   window.addEventListener("resize", handleResize);

   // Clean up event listener on component unmount
   return () => {
     window.removeEventListener("resize", handleResize);
   };
 }, []);


  return (
    <body>
      <header className="fixed top-0 right-0 p-2 bg-white w-full flex justify-between items-center shadow-md">
        <div className="flex items-center pl-4">
          <span className="pl-2 text-black font-bold">NurtureMoms</span>
        </div>
        <div className="flex items-center pr-4">
          <span className="pr-5 text-black font-bold">User Mother </span>
          <img
            src="/assets/avatar.jpg"
            className="rounded-full h-12 w-12"
            alt="User Avatar"
          />
        </div>
      </header>

      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 lg:w-64 w-16 overflow-y-auto text-center bg-yellow-200">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-center">
            <img
              src="/assets/nurturemoms_image.png"
              className="rounded-xl h-12 w-12"
              alt="NurtureMoms"
            ></img>
            <span className="pl-2 text-black font-bold">NurtureMoms</span>
          </div>

          <i
            id="toggleSidebar"
            className="bi bi-x cursor-pointer ml-2 lg:hidden"
          ></i>
        </div>
        <div className="my-2 bg-gray-200 h-[1px]"></div>

        <div
          id="homeLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <i className="bi bi-house-door-fill"></i>
          <MdHome size={15} />
          <span className="text-[15px] ml-2 font-bold">Home</span>
        </div>

        <div
          id="appointmentLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <i className="bi bi-bookmark-fill"></i>
          <MdBook size={15} />
          <span className="text-[15px] ml-2 font-bold">Appointment</span>
        </div>

        <div
          id="calendarLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <i className="bi bi-calendar"></i>
          <MdCalendarMonth size={15} />
          <span className="text-[15px] ml-2 font-bold">Calendar</span>
        </div>

        <div
          id="bookmarkLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <i className="bi bi-files"></i>
          <MdInsertDriveFile size={15} />
          <span className="text-[15px] ml-2 font-bold">Files & Media</span>
        </div>

        <div
          id="pregnancyProductsLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <MdShoppingCart size={15} />
          <span className="text-[15px] ml-2 font-bold">Pregnancy Products</span>
        </div>

        <div
          id="informationLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <i className="bi bi-info-circle-fill"></i>
          <MdInfo size={15} />
          <span className="text-[15px] ml-2 font-bold">Information</span>
        </div>

        <div className="my-2 bg-gray-200 h-[1px]"></div>

        <div
          id="chatboxLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <HiMiniUser size={18} />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-2 font-bold">Profile</span>
            <span id="arrow" className="text-sm rotate-180">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>

        <div
          id="chatboxLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        >
          <BiLogOut size={18} />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-2 font-bold">Logout</span>
            <span id="arrow" className="text-sm rotate-180">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>

        <div
          id="logoutLink"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-yellow-300 text-black"
        ></div>
      </div>
    </body>
  );
};

export default MotherDashboard;
