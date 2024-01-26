"use server";
import React from "react";

const Skills = ({ t }: { t: Function }) => {
  const skills = [
    {
      category: t("Languages"),
      techs: [t("JavaScript"), t("TypeScript")],
    },
    {
      category: t("Frameworks"),
      techs: [t("React"), t("Next"), t("Angular"), t("Node")],
    },
    {
      category: t("Styling and CSS Frameworks"),
      techs: [
        t("HTML"),
        t("CSS"),
        t("SASS"),
        t("LESS"),
        t("Tailwind"),
        t("Ant design"),
        t("Bootstrap"),
      ],
    },
    {
      category: t("State managements"),
      techs: [t("Redux"), t("Context")],
    },
    {
      category: t("Database"),
      techs: [t("Mongo DB")],
    },
  ];
  return (
    <section className="flex flex-col mt-20 mb-14">
      <div className="flex justify-between relative">
        <div className="text-3xl font-medium bg-secondary z-20">
          <span className="text-primary">#</span>
          <span className="px-2">{t("skills")}</span>
        </div>
        <span className="primary-line z-10" />
      </div>
      <div className="md:bg-bgSkills bg-repeat-y md:mt-4">
        <div className="flex flex-wrap flex-row mt-4 md:mt-6 md:ml-52">
          {skills.map(({ category, techs }) => (
            <div className="flex flex-col border-solid border-thirdinary border bg-secondary md:max-w-56 md:m-2 my-2 w-full md:w-auto">
              <span className="font-semibold p-2 border-solid border-thirdinary border-b-[1px]">
                {category}
              </span>
              <div className="flex flex-wrap flex-row">
                {techs.map((tech) => (
                  <span className="text-thirdinary font-normal px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
