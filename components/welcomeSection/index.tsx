"use server";
import React from "react";
import Image from "next/image";

const WelcomeSection = ({ t }: { t: Function }) => {
  return (
    <div className="container z-10 flex flex-col md:flex-row justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-semibold ">
          <span>{t("Pouria is a") + " "}</span>
          <span className="text-primary">{t("front-end developer")}</span>
        </h1>
        <p className="text-thirdinary font-normal mt-4 mb-6">
          {t(
            "He crafts responsive websites where technologies meet creativity"
          )}
        </p>
        <div>
          <button className="border border-primary px-4 py-2">
            {t("Contact me")}!!
          </button>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:w-[450px] md:h-[380px]">
        <Image src="/images/welcomeImage.svg" alt="welcome photo" fill />
      </div>
    </div>
  );
};

export default WelcomeSection;
