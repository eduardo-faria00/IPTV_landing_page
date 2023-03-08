import cn from "@/utils/cn";
import React from "react";

interface ButtonProperties {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProperties) {
  return (
    <button
      className={cn(
        "w-full rounded-md bg-indigo-700 px-3 py-2 font-semibold text-white transition-colors hover:bg-indigo-800",
        className
      )}
    >
      {children}
    </button>
  );
}
