import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  download?: string;
}

export default function Button({ children, href, download }: ButtonProps) {
  return (
    <a
      className="rounded-xl bg-yellow px-4 py-1 font-bold text-black transition-all duration-300 hover:scale-105"
      href={href}
      download={download}
    >
      {children}
    </a>
  );
}
