import { Button, Icon } from "@ui/src/components/contrib";

import Link from "next/link";
import { useTranslation } from "../../src/hooks/useTranslation";
import { Suspense } from "react";
import Loading from "@/src/components/layout/Loading";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
  return [{ lng: "de" }, { lng: "en" }];
}
import Sidebar from "@/src/components/AppSide";

export const dynamicParams = false;

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "common");

  return (
    <div id="page-wrapper" className="flex w-full h-full flex-col md:flex-row">
      {/* @ts-ignore Server Component */}
      <Sidebar language={lng} session={undefined} />
      <div
        id="page-content"
        className="flex w-full md:w-1/2 h-full  my-auto flex-col justify-center items-center"
      >
        <Link href={"/de/home"} passHref>
          <Button className="flex gap-2 flex-row space-y-2 items-center">
            <Icon name="Home" className="cursor-pointer" size={33} />
            <h1>{t("launchAppButtonLabel", { ns: "common" })}</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
}
