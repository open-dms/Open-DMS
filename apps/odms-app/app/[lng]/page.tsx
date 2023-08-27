import { useTranslation } from "../../src/hooks/useTranslation";

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "common");
  return (
    <>
      <h1>{t("hello-world", { ns: "common" })}</h1>
    </>
  );
}
