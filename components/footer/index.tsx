"use server";
import Image from "next/image";
import React from "react";

const Footer = ({ t }: { t: Function }) => {
  return (
    <footer className="flex flex-col mt-20 mb-10 border-solid border-thirdinary border-t-[1px]">
      <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              src="/images/logo.svg"
              alt="menu icon"
              width={16}
              height={16}
            />
            <span className="text-white text-lg md:text-2xl font-bold ml-2 mr-2">
              Pouria
            </span>
          </div>
          <span>{t("Front-end (React & Angular) developer")}</span>
        </div>
        <div className="min-w-28 mt-4 md:mt-0">
          <span className="font-medium text-lg md:text-2xl">{t("Media")}</span>
          <div className="flex flex-row mt-1">
            <a
              href="https://github.com/Pouria1378"
              className="flex flex-row items-center mt-2"
              target="_blank"
            >
              <Image
                src="/images/githubLogo.svg"
                className="mr-1"
                alt="github logo"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pouria-seifi/"
              className="flex flex-row items-center mt-2"
              target="_blank"
            >
              <Image
                src="/images/linkedinLogo.svg"
                className="mr-1"
                alt="linkedin logo"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
      <span className="m-auto font-normal text-thirdinary mt-8 md:mt-16">
        © Copyright {new Date().getFullYear()}. Made by Pouria
      </span>
    </footer>
  );
};

export default Footer;
