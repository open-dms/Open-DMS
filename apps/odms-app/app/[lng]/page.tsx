import { useTranslation } from "../../src/hooks/useTranslation";

/** @note only allow ['de', 'en'] routes */

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{lng: 'de'}, {lng: 'en'}]
}

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "common");
  return (
    <>
      <h1>{t("hello-world", { ns: "common" })}</h1>
    </>
  );
}

