"use server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contacts = ({ t }: { t: Function }) => {
  return (
    <div className="relative">
      <div className="w-[70px] h-[160px] bg-bgDots bg-no-repeat absolute hidden md:flex md:left-[-80px] lg:left-[-176px] top-32" />
      <section className="flex flex-col mt-20 mb-14">
        <div className="flex justify-between relative">
          <div className="text-3xl font-medium bg-secondary z-20">
            <span className="text-primary">#</span>
            <span className="px-2">{t("contacts")}</span>
          </div>
          <span className="primary-line z-10" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-4 md:mt-11">
          <p className="text-thirdinary font-medium max-w-96 mb-4 md:mb-0">
            {t(
              "I’m interested in relocation and remote jobs. However, if you have other request or question, don’t hesitate to contact me."
            )}
          </p>
          <div className="border-solid border-thirdinary border p-4">
            <span className="font-semibold">{t("Message me here")}</span>
            <div className="mt-4 text-thirdinary">
              <Link
                href="https://t.me/pouria_seifi"
                className="flex flex-row items-center"
              >
                <Image
                  src="/images/telegramLogo.svg"
                  className="mr-1"
                  alt="telegram logo"
                  width={32}
                  height={32}
                />
                <span>@pouria_seifi</span>
              </Link>
              <Link
                href="mailto:seifipouria@gmail.com"
                className="flex flex-row items-center mt-2"
              >
                <Image
                  src="/images/emailLogo.svg"
                  className="mr-1"
                  alt="email logo"
                  width={32}
                  height={32}
                />
                <span>seifipouria@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
