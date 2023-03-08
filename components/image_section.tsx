import cn from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Container from "./container";

interface ImageSectionProperties {
  image: StaticImageData;
  title: string;
  text: string;
  odd?: boolean;
}

export default function ImageSection({
  text,
  title,
  image,
  odd,
}: ImageSectionProperties) {
  return (
    <Container className={cn("sticky top-0", odd ? "bg-black" : "bg-zinc-900")}>
      <div
        data-aos={!odd ? "fade-left" : "fade-right"}
        className="grid grid-cols-2 py-16"
      >
        {odd ? (
          <>
            <div className="relative flex items-center justify-center">
              <Image className="h-80" src={image} alt={title} />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="mt-4 text-gray-400">{text}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center text-left">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="mt-4 text-gray-400">{text}</p>
            </div>
            <div className="relative flex items-center justify-center">
              <Image className="h-80" src={image} alt={title} />
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
