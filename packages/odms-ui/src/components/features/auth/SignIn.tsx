"use client";

import * as React from "react";

import { Button } from "@ui/src/components/contrib";
import { Label } from "@ui/src/components/ui/label";
import { Input } from "@ui/src/components/ui/input";
import { Icon } from "@ui/src/components/contrib";
import { cn } from "../../../utils";

interface SignInProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignIn({ className, ...props }: SignInProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} variant={"secondary"}>
            {isLoading && (
              <Icon name="Spinner" className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            A One-time-login token will be sent to this email, which will allow
            you to sign-in within the next 15 minutes.
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icon name="Spinner" className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icon name="Github" className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  );
}
