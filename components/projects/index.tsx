"use server";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ t }: { t: Function }) => {
  const projectsData = [
    {
      name: t("Peaky"),
      skills: [t("React"), t("Next"), t("Axios"), t("Express"), t("Mongo DB")],
      description: t("For convenient coordination of meetings"),
      link: "/peaky",
    },
    {
      name: t("Pinterest Crawler"),
      skills: [
        t("React"),
        t("Express"),
        t("SeleniumWebdriver"),
        t("Express"),
        t("Mongo DB"),
      ],
      description: t("crawl a user page and save all images"),
      link: "/pinterestCrawler",
    },
    {
      name: t("Multilingual Multi Theme"),
      skills: [t("React"), t("Type Script"), t("I18next"), t("Emotion js")],
      description: t("This a test multilingual and multi theme project"),
      link: "/mmt",
    },
  ];

  const ProjectCard = ({
    name,
    skills,
    description,
    link = "",
  }: {
    name: string;
    skills: string[];
    description: string;
    link: string;
  }) => (
    <div
      key={name}
      className="border-solid border-thirdinary border flex flex-col"
    >
      <div className="min-h-52 w-full bg-bgProjects bg-cover flex items-center justify-center font-bold text-l">
        {name.toUpperCase()}
      </div>
      <div className="border-solid border-thirdinary border border-l-0 border-r-0 flex flex-wrap py-2">
        {skills.map((skill: string) => (
          <span className="text-thirdinary font-normal mx-2" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-col justify-between p-2 h-full">
        <div>
          <h3 className="text-2xl my-2">{name}</h3>
          <span className="text-thirdinary leading-4">{description}</span>
        </div>
        <div className="flex">
          <Link
            className="flex flex-row border-solid border-primary border mt-4 px-2 py-1"
            href={link}
          >
            <span>{t("Live")}</span>
            <Image
              src="/images/twoWayBtn.svg"
              className="ml-2 mt-1"
              alt="arrow right icon"
              width={21}
              height={21}
            />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div className="w-[70px] h-[160px] border-solid border-thirdinary border border-r-0 absolute hidden md:flex md:right-[-80px] lg:right-[-176px] top-60" />
      <section className="flex flex-col mt-20 mb-14">
        <div className="flex justify-between relative">
          <div className="text-3xl font-medium bg-secondary z-20">
            <span className="text-primary">#</span>
            <span className="px-2">{t("projects")}</span>
          </div>
          <span className="primary-line z-10" />
          <Link
            href="#"
            className="flex flex-row items-center bg-secondary z-20"
          >
            <span>{t("view all")}</span>
            <Image
              src="/images/arrowRight.svg"
              className="ml-2 mt-1"
              alt="arrow right icon"
              width={21}
              height={21}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
          {projectsData.map(
            ({
              name,
              skills,
              description,
              link = "",
            }: {
              name: string;
              skills: string[];
              description: string;
              link: string;
            }) => (
              <ProjectCard
                key={name}
                name={name}
                skills={skills}
                description={description}
                link={link}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
