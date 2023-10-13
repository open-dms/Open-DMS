import { Input } from "../ui/input";
import type { InputProps } from "../ui/input";

function InputPrimitive({ type, ...rest }: { type: string }): JSX.Element {
  return (
    <label>
      <Input type="" {...(rest as InputProps)} />
    </label>
  );
}
export default InputPrimitive;
