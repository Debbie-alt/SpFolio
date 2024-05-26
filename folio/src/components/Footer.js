import React from "react";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black  border-t-[1px]  w-screen p-20  flex justify-center items-center ">
      <div className="flex text-sm  ">
        &copy; 2024 with &nbsp;
        <IoIosHeart className="text-2xl text-pink-800" /> &nbsp; By Funmilayo
      </div>
    </footer>
  );
};

export default Footer;
