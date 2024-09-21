'use client'
import React from "react";
import Contact from "./navbarComponent/contact";
import Search from "./navbarComponent/search";

const Navigation = () => {
  return (
    <div className="flex text-center align-middle items-center justify-between py-2 backdrop-blur-sm">
      <Search />
      <Contact />
    </div>
  );
};

export default Navigation;
