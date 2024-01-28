import { useTranslation } from "../../i18n";
import { Fragment } from "react";
import Contacts from "@/components/contacts";

export default async function ContactsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return (
    <Fragment>
      <Contacts t={t} />
    </Fragment>
  );
}
