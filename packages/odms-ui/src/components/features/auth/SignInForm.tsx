import { Button } from "@ui/src/components/contrib";
import { cn } from "../../../utils";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function SignInForm({ props }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "" } });

  const handleSubmitSignIn = (data: any) => {
    signIn("email", { email: data.email });
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitSignIn)}
      className={cn(
        "flex flex-col justify-start items-start gap-4",
        props?.className
      )}
      {...props}
    >
      <div className="flex flex-col  gap-1 w-full">
        <label htmlFor="email" className="text-xxs font-semibold">
          Your Email
        </label>
        <input
          id="email"
          autoFocus={true}
          className="px-2 py-2 h-12 border rounded-md outline-black"
          placeholder="jane.doe@odms.app"
          {...register("email", {
            required: "A valid Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
        />
      </div>
      {errors && errors.email && (
        <span role="alert" className="text-xs text-red-500">
          {errors.email.message as string}
        </span>
      )}
      <Button
        className="grow-0  items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-4 py-2"
        variant={"ghost"}
        type="submit"
      >
        Sign in with Email
      </Button>
    </form>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const csrfToken = await getCsrfToken(context);
//   return {
//     props: { csrfToken },
//   };
// }
