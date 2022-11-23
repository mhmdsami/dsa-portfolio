import Image from "next/image";

const routes = [
  { page: "github", href: "https://github.com/sm-sami" },
  { page: "linkedin", href: "https://www.linkedin.com/in/sm-sami/" },
  { page: "instagram", href: "https://www.instagram.com/sm_sami.ts/" },
];

interface FooterRoute {
  page: string;
  href: string;
}

export default function Footer() {
  return (
    <footer className="text-red flex flex-col items-center gap-y-3 bg-black py-6">
      <div className="text-xl font-bold">find me on</div>
      <ul className="flex gap-4">
        {routes.map(({ page, href }: FooterRoute, index: number) => (
          <li
            key={index}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <a href={href}>
              <Image
                src={`/icons/${page}.svg`}
                alt={page}
                width={32}
                height={32}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-0.5">
        <div>
          crafted with{" "}
          <a href="https://nextjs.org/" className="font-bold hover:underline">
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold hover:underline"
          >
            tailwindcss
          </a>
        </div>
      </div>
    </footer>
  );
}
