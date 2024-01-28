"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";

export const HeaderBase = ({ t, lng }) => {
  const [isShowMobileHeader, setisShowMobileHeader] = useState(false);
  const router = useRouter();

  const links = [
    {
      text: t("home"),
      to: "/",
    },
    {
      text: t("works"),
      to: "/works",
    },
    {
      text: t("about-me"),
      to: "/about-me",
    },
    {
      text: t("contacts"),
      to: "/contacts",
    },
  ];

  const toggleMenu = () => setisShowMobileHeader((prev) => !prev);

  const changeLng = (event) => {
    router.push(`/${event.target.value}`);
  };

  return (
    <header className="md:container z-50 bg-secondary sticky top-0 pt-2 md:pt-5 md:pb-2 md:flex md:flex-row md:justify-between">

      <nav
        className={`bg-secondary flex fixed md:relative md:bottom-auto md:left-auto md:right-auto md:top-auto md:p-0 bottom-0 left-0 right-0 top-14 px-6 pb-6 pt-4 transform transition-transform duration-500 ease-in-out  md:translate-x-0 ${isShowMobileHeader ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col-reverse md:flex-row m-auto mb-auto z-50">
          {languages.filter(l => l !== lng).map((lng) => (
            <Link key={lng} href={`/${lng}`}>
              {lng === "fa" ? "فارسی" : "English"}
            </Link>
          ))}
          {links.map(({ text, to }) => (
            <Link
              key={text}
              href={to}
              className="mb-8 md:mb-auto md:mr-4 md:ml-4 whitespace-nowrap w-auto text-3xl md:text-base text-thirdinary"
            >
              <span className="text-primary">#</span>
              {text}
            </Link>
          ))}
        </div>
      </nav>

      <div className="flex justify-between items-center z-40">
        <div className="flex flex-row">
          <Image
            src="/images/logo.svg"
            alt="menu icon"
            width={24}
            height={24}
          />
          <span className="text-white text-lg font-bold ml-2 mr-2">Pouria</span>
        </div>

        <div>
          <button className="relative md:hidden" onClick={toggleMenu}>
            <div className="relative flex overflow-hidden items-center justify-end md:justify-center w-[50px] h-[50px] transform transition-all duration-200">
              <div className="flex flex-col justify-between w-8 h-5 transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isShowMobileHeader ? "rotate-[42deg]" : ""
                    }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-1/2 ml-auto rounded transform transition-all duration-300 ${isShowMobileHeader ? "-translate-x-10" : ""
                    }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isShowMobileHeader ? "-rotate-[42deg]" : ""
                    }`}
                ></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
