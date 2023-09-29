import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import React from "react";

const Nav = () => {
  return (
    <header className="padding-x py-8 relative w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center align-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montsract landing-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" height={25} width={25} />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
