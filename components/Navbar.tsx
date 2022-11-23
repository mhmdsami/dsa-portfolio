import { Button } from "@components";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import Link from "next/link";

export interface NavbarRoute {
  page: string;
  href: string;
  isSamePage?: boolean;
}

const routes = [
  { page: "crosswords", href: "crosswords", isSamePage: true },
  { page: "certifications", href: "certifications", isSamePage: true },
  { page: "blog", href: "https://blog.mhmdsami.xyz" },
  { page: "portfolio", href: "https://mhmdsami.xyz" },
];

const Navbar = () => {
  const [isNavToggled, setNavToggled] = useState<boolean>(false);

  const toggleNav = () => setNavToggled(!isNavToggled);

  const NavbarElements = () => {
    return (
      <>
        {routes.map(({ page, href, isSamePage }: NavbarRoute, index) => (
          <li
            key={index}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            {isSamePage ? (
              <ScrollLink to={href} smooth={true} duration={700}>
                {page}
              </ScrollLink>
            ) : (
              <Link href={href}>{page}</Link>
            )}
          </li>
        ))}
        <Button
          href="/assets/DSA-eLab-Report-022.pdf"
          download="DSA-eLab-Report-022.pdf"
        >
          eLab report
        </Button>
      </>
    );
  };

  return (
    <nav className="my-[10vh] flex justify-between">
      <div className="cursor-pointer text-2xl font-bold text-yellow transition-all duration-300 hover:scale-110">
        <Link href="/">Sami</Link>
      </div>
      <div className="cursor-pointer text-xl">
        <ul className="flex flex-col items-end gap-3 md:hidden">
          <button onClick={toggleNav}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="cursor-pointer text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </button>
          {isNavToggled && <NavbarElements />}
        </ul>
        <ul className="hidden items-center gap-5 md:flex">
          <NavbarElements />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
