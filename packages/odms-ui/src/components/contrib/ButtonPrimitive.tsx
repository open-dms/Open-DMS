import { Button, type ButtonProps } from "../ui/button";
export { ButtonProps };

export default function ButtonPrimitive({
  children,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Button
      {...rest}
      className={className ?? ""}
      variant={(rest as ButtonProps)?.variant ?? "default"}
    >
      {children}
    </Button>
  );
}
