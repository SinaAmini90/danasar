"use client";
import { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-emerald-950  to-emerald-800 text-white h-16  py-4 px-6 relative z-10">
      <div className="container mx-auto flex flex-row-reverse justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          DANA<span className="text-yellow-200">SAR</span>
        </h1>

        {/* Hamburger Button */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Menu (Desktop) */}
        <ul className="hidden sm:flex flex-row gap-3 vazirmatn">
          <li>
            <NavItem path="/" itemName="خانه" />{" "}
          </li>
          <li>
            <NavItem path="/course" itemName="دوره های آموزشی"></NavItem>
          </li>
          <li>
            <NavItem path="/blog" itemName="مقالات آموزشی"></NavItem>
          </li>
          <li>
            <NavItem path="/contact" itemName="ارتباط با ما"></NavItem>
          </li>
        </ul>
      </div>

      {/* Popup Menu (Mobile) */}
      <div
        className={`sm:hidden fixed h-fit inset-0 text-white -z-10 transition-transform transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`h-fit mt-16 p-6 bg-emerald-800 transition-transform transform duration-700 ease-in-out rounded-b-lg ${
            isMenuOpen ? "translate-x-0" : "translate-x-3/4"
          }`}
        >
          <ul className="flex flex-col gap-4 text-right vazirmatn">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                خانه
              </Link>
            </li>
            <li>
              <Link href="/course" onClick={() => setIsMenuOpen(false)}>
                دوره های آموزشی
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                مقالات آموزشی
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
