import { Icon } from "@ui/src/components/contrib";
import Link from "next/link";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./AppThemeToggle"), {
  ssr: false,
});

export default async function AppSideFooter({ t }: { t: any }) {
  const discordLink = process.env.NEXT_PUBLIC_DISCORD_INVITE ?? "/de";
  const githubLink = process.env.NEXT_PUBLIC_GITHUB_INVITE ?? "/de";
  return (
    <footer className="w-full text-xs flex items-center justify-between pt-12 select-none ">
      <div className="flex items-center justify-start gap-2 mr-2">
        <Link
          target="_blank"
          href={githubLink}
          title={t("frontFooterButtonTitleGithub", { ns: "common" })}
        >
          <div className="flex flex-row gap-2 items-center px-3 py-2.5 rounded-md border bg-black/60 border-white/60 hover:border-white/100 hover:bg-black hover:shadow-slate-950 hover:shadow-2xl  block-inline">
            <Icon name="Github" size={18} className="text-white" />{" "}
            {t("frontFooterButtonLabelGithub", { ns: "common" })}
          </div>
        </Link>
        <Link
          target="_blank"
          href={discordLink}
          title={t("frontFooterButtonTitleDiscord", { ns: "common" })}
        >
          <div className="flex flex-row gap-2 items-center px-3 py-2.5 rounded-md border bg-black/60 border-white/60 hover:border-white/100 hover:bg-black hover:shadow-slate-950 hover:shadow-2xl block-inline">
            <Icon name="MessageSquarePlus" size={18} className="text-white" />{" "}
            {t("frontFooterButtonLabelDiscord", { ns: "common" })}
          </div>
        </Link>
      </div>
      <ThemeToggle />
    </footer>
  );
}
