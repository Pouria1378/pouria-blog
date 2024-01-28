"use server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = ({ t }: { t: Function }) => {
  return (
    <div className="relative">
      <div className="w-[70px] h-[160px] border-solid border-thirdinary border border-l-0 absolute hidden md:flex md:left-[-80px] lg:left-[-176px] top-32" />
      <div className="w-[90px] h-[160px] bg-bgDots bg-no-repeat absolute hidden md:flex md:right-[-80px] lg:right-[-176px] top-60" />
      <section className="flex flex-col mt-20 mb-14">
        <div className="flex justify-between relative">
          <div className="text-3xl font-medium bg-secondary z-20">
            <span className="text-primary">#</span>
            <span className="px-2">{t("about me")}</span>
          </div>
          <span className="primary-line z-10" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:mr-36">
            <div className="text-thirdinary font-normal">
              <div className="mb-8 mt-6">
                🚀 {t(`Hi there!`)}
                <br />
                👋{" "}
                {t(`I'm Pouria Seifi, a Front-end Developer with three
              years of experience.`)}
              </div>
              <div className="mb-8">
                💼 {t(`Expertise: `)}
                <br />
                {t(`Proficient in HTML5, CSS3,
            JavaScript, and frameworks like React.js, Next.js, and Angular.`)}
              </div>
              <div className="mb-8">
                📚 {t(`Continuous Learner:`)}
                <br />
                {t(`Committed to staying ahead, I embrace new
            technologies to bring the latest innovations to my work.`)}
              </div>
              <div className="mb-8">
                🤝{" "}
                {t(`Open to
            exciting opportunities and collaborations! Let's discuss how I can
            contribute to your projects or connect over the latest tech trends.`)}
              </div>
            </div>
            <div className="flex">
              <Link
                className="flex flex-row border-solid border-primary border mt-4 px-2 py-1"
                href={"#"}
              >
                <span>{t("Read more")}</span>
                <Image
                  src="/images/straitArrowRight.svg"
                  className="ml-2 mt-1"
                  alt="arrow right icon"
                  width={21}
                  height={21}
                />
              </Link>
            </div>
          </div>
          <Image
            src="/images/aboutMeImg.svg"
            alt="about me"
            className="m-auto border-solid border-primary border-b-[1px]"
            width={240}
            height={300}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
