import WelcomeSection from "@/components/welcomeSection";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);
  return <WelcomeSection t={t} />;
}
