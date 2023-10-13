import { redirect } from "next/navigation";

export default function Page() {
  /** @note hard-coded forward to german translation / ui by default */
  redirect("/de");
}
