"use server";
import React, { Fragment } from "react";
import Image from "next/image";

const EldersWord = ({ t }: { t: Function }) => {
  return (
    <div className="relative">
      <div className="w-[70px] h-[90px] border-solid border-thirdinary border border-r-0 absolute hidden md:flex md:right-[-80px] lg:right-[-176px] top-24" />
      <div className="container flex">
        <div className="flex flex-col m-auto mt-16 text-2xl">
          <div className="relative">
            <p className="border-solid border-thirdinary border p-8 font-medium">
              {t("The best way to predict the future is to create it")}
            </p>
            <Image
              src="/images/quote.svg"
              className="absolute left-4 top-[-16px] bg-secondary p-2"
              alt="quote icon"
              width={40}
              height={40}
            />
          </div>
          <div className="flex items-end justify-end relative">
            <p className="border-solid border-thirdinary border p-4 border-t-0 font-normal">
              - {t("Peter Drucker")}
            </p>
            <Image
              src="/images/quote.svg"
              className="absolute right-4 top-[-16px] bg-secondary p-2"
              alt="quote icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EldersWord;
