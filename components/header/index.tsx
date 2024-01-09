"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isShowMobileHeader, setisShowMobileHeader] = useState(false);

  const links = [
    {
      text: "home",
      to: "/",
    },
    {
      text: "works",
      to: "/works",
    },
    {
      text: "about-me",
      to: "/about-me",
    },
    {
      text: "contacts",
      to: "/contacts",
    },
  ];

  const toggleMenu = () => setisShowMobileHeader((prev) => !prev);

  return (
    <header className="bg-transparent p-4 md:flex md:flex-row md:justify-between">
      <div className="container mx-auto flex justify-between items-center z-40">
        <div className="flex flex-row">
          <Image
            src="/images/logo.svg"
            alt="menu icon"
            width={24}
            height={24}
          />
          <span className="text-white text-lg font-bold ml-2">Pouria</span>
        </div>

        <div>
          <button className="relative md:hidden" onClick={toggleMenu}>
            <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isShowMobileHeader ? "rotate-[42deg]" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-1/2 ml-auto rounded transform transition-all duration-300 ${
                    isShowMobileHeader ? "-translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isShowMobileHeader ? "-rotate-[42deg]" : ""
                  }`}
                ></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <nav
        className={`bg-secondary flex fixed md:relative md:bottom-auto md:left-auto md:right-auto md:top-auto md:p-0 bottom-0 left-0 right-0 top-20 px-6 pb-6 pt-4 transform transition-transform duration-500 ease-in-out  md:translate-x-0 ${
          isShowMobileHeader ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col md:flex-row mr-auto mb-auto">
          {links.map(({ text, to }: { text: string; to: string }) => (
            <Link
              key={text}
              href={to}
              className="mb-8 md:mb-auto md:ml-8 whitespace-nowrap w-auto text-3xl md:text-base text-thirdinary"
            >
              <span className="text-primary">#</span>
              {text}
            </Link>
          ))}
          <select
            className="w-20 bg-transparent text-thirdinary focus:border-none focus:outline-none"
            name="languages"
            id="languages"
          >
            <option className="text-secondary" value="english">
              English
            </option>
            <option className="text-secondary" value="persian">
              فارسی
            </option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
