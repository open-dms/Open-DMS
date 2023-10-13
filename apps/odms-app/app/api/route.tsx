import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

async function getTheme(): Promise<string | undefined> {
  const cookieStore = cookies();
  const theme = cookieStore.get("odms.theme");
  return new Promise((resolve) => resolve(theme?.value ?? undefined));
}

async function setTheme(newVal: string) {
  console.log("newVal", newVal);
  //  const cookieStore = cookies();
  //   const theme = cookieStore.get("odms.theme");
  //   console.log("nowVal",theme?.value)
  //   return new Promise((resolve) => {
  //     if (!theme) {
  //       cookieStore.set("odms.theme", "light");
  //     } else if (theme?.value && theme.value === "system") {
  //         cookieStore.set("odms.theme", "light");
  //     } else if (theme?.value && theme.value === "dark") {
  //       cookieStore.set("odms.theme", "light");
  //     } else if (theme?.value && theme.value === "light") {
  //         cookieStore.set("odms.theme", "dark");
  //     }
  //     console.log("theme changed to", cookieStore.get("odms.theme"));

  //     return resolve(cookieStore.get("odms.theme")?.value);
  //   });
  return "light";
}

export async function GET(
  request: NextRequest,
  { params }: { params: { mode: "light" | "dark" } }
) {
  return NextResponse.json({
    theme: "dark",
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { mode: "light" | "dark" } }
) {
  const post = await request.json(); // res now contains body
  const theme = await setTheme(post?.theme ?? "system");
  const now = await getTheme();

  return NextResponse.json({
    theme: "dark",
  });
}
