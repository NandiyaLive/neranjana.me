import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkTextProps {
  href: string;
  className?: string;
  text: string;
  external?: boolean;
}

export const LinkText = ({
  href,
  className = "",
  text,
  external = false,
}: LinkTextProps) => {
  const SLOT = external ? "a" : Link;

  return (
    <SLOT
      href={href}
      className={cn(
        "font-medium underline decoration-yellow-500 underline-offset-4 transition-colors hover:text-yellow-500",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {text}
    </SLOT>
  );
};
