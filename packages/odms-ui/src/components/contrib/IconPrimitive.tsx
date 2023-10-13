import * as icons from "lucide-react";

import { cn } from "../../utils";

const Icon = ({
  name,
  size,
  className,
}: {
  className?: string | undefined;
  name: string;
  size?: number | 44;
}) => {
  const iconLibrary: Record<string, any> = icons;
  const LucideIcon: any = iconLibrary[name] ?? null;
  return (
    <div
      className={cn(
        `aspect-square text-gray-600 hover:text-gray-800 `,
        className
      )}
    >
      <LucideIcon color={"currentColor"} size={size} />
    </div>
  );
};

export default Icon;
