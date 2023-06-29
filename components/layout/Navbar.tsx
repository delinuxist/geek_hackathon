"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { logo } from "../../public/assets/img";
import { navLinks } from "../../core/shared/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="sticky top-0 bg-software-grey h-14 flex-center">
      <div className="container mx-auto padding-x flex-between">
        {/* Logo */}
        <div>
          <h1>
            <Link href="/">
              <Image
                src={logo}
                alt="turntabl logo"
                height={25}
                className="object-contain"
              />
            </Link>
          </h1>
        </div>
        {/* nav links */}
        <ul className="flex">
          {navLinks.map((link) => {
            return (
              <li
                key={link.title}
                className={`mr-4 last:mr-0 nav-link relative ${
                  link.url === pathName ? "nav-link-selected" : ""
                }`}
              >
                <Link href={link.url}>{link.title}</Link>
                <div className="nav-link-indicator absolute"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
