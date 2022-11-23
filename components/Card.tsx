import { Fade } from "react-awesome-reveal";
import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  children: React.ReactNode;
}
export default function Card({ image, name, children }: CardProps) {
  return (
    <Fade triggerOnce={true} className="hover:z-20">
      <div className="mt-4 mb-7 rounded-md bg-black p-5 md:rounded-xl">
        <div className="flex flex-col gap-3">
          {children}
          <div className="z-10 duration-300 hover:scale-125">
            <Image
              src={image}
              width={2880}
              height={1410}
              alt={name}
              className="rounded-sm md:rounded-md"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
