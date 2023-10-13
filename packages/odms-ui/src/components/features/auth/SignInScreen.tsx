"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import { cn } from "../../../utils";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Icon } from "@ui/src/components/contrib";

interface SignInScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SignInScreen({
  className,
  ...props
}: SignInScreenProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "onChange", defaultValues: { email: "" } });

  const handleSubmitSignIn = (data: any) => {
    signIn("email", { email: data.email });
  };

  return (
    <div
      {...props}
      className={cn("border-2 border-black grid gap-6", className)}
    >
      <form
        onSubmit={handleSubmit(handleSubmitSignIn)}
        className="flex-col gap-2 flex"
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              className="px-4"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            {errors.email && (
              <span role="alert">{errors.email.message as string}</span>
            )}
          </div>
          <Button disabled={isLoading} variant="outline">
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
        {/* <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div> */}
      </div>
      {/* <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icon name="Spinner" className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icon name="Github" className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button> */}
    </div>
  );
}
