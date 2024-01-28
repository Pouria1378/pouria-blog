import { useTranslation } from "../../i18n";
import { Fragment } from "react";
import Projects from "@/components/projects";

export default async function WorksPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <Fragment>
      <Projects t={t} />
    </Fragment>
  );
}
