"use client";

import { Button, Icon } from "@ui/src/components/contrib";

import { useTheme } from "odms-ui/src/components/layout/ThemeProvider";

export default function AppThemeToggle(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  return theme ? (
    <Button
      variant="default"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      className="cursor-pointer bg-transparent hover:bg-transparent dark:hover:bg-transparent text-xs dark:bg-transparent  rounded-md py-0.5 px-2"
    >
      {theme === "light" ? (
        <Icon name="Moon" className="current" />
      ) : (
        <Icon name="Sun" className="current" />
      )}
    </Button>
  ) : null;
}
