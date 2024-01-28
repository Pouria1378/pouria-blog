import WelcomeSection from "@/components/welcomeSection";
import { useTranslation } from "../i18n";
import { Fragment } from "react";
import EldersWord from "@/components/eldersWord";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import AboutMe from "@/components/aboutMe";
import Contacts from "@/components/contacts";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <Fragment>
      <WelcomeSection t={t} />
      <EldersWord t={t} />
      <Projects t={t} />
      <Skills t={t} />
      <AboutMe t={t} />
      <Contacts t={t} />
    </Fragment>
  );
}
