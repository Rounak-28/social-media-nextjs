import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-12 px-3 flex justify-between items-center bg-white border-b border-gray-300">
      <UserButton />
      <div className="logo text-2xl">X</div>
      <div className="nothing w-10 h-10"></div>
    </div>
  );
};

export default Header;
