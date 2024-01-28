import { useTranslation } from "../../i18n";
import { Fragment } from "react";
import AboutMe from "@/components/aboutMe";

export default async function AboutMePage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <Fragment>
      <AboutMe t={t} />
    </Fragment>
  );
}
