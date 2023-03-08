import cn from "@/utils/cn";
import React from "react";

interface ContainerProperties {
  children?: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProperties) {
  return (
    <div className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
