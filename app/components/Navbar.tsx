"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F9F9FC]">
      <div className="max-w-[1320px] mx-auto py-5 flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/LOGO.png" alt="logo" width={121} height={26} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-6">
          <li className="text-[14px] text-black font-poppins hover:text-[#5E3BEE] duration-300">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-[14px] text-black font-poppins hover:text-[#5E3BEE] duration-300">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="text-[14px] text-black font-poppins hover:text-[#5E3BEE] duration-300">
            <Link href="/service">SERVICES</Link>
          </li>
          <li className="text-[14px] text-black font-poppins hover:text-[#5E3BEE] duration-300">
            <Link href="/work">WORKS</Link>
          </li>
        </ul>

        {/* Hire Me Button (Desktop Only) */}
        <button className="hidden md:flex bg-[#5E3BEE] py-2 px-4 rounded-[24px] text-[14px] text-white items-center gap-x-1 hover:bg-violet-500 duration-300">
          HIRE ME <MdOutlineMail />
        </button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
  className={`md:hidden bg-white shadow-md px-5 py-4 space-y-4 text-center
  transition-all duration-500 overflow-hidden
  ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
>
  <Link
    href="/"
    onClick={() => setOpen(false)}
    className="block text-[16px] font-poppins"
  >
    HOME
  </Link>

  <Link
    href="/about"
    onClick={() => setOpen(false)}
    className="block text-[16px] font-poppins"
  >
    ABOUT US
  </Link>

  <Link
    href="/service"
    onClick={() => setOpen(false)}
    className="block text-[16px] font-poppins"
  >
    SERVICES
  </Link>

  <Link
    href="/work"
    onClick={() => setOpen(false)}
    className="block text-[16px] font-poppins"
  >
    WORKS
  </Link>

  {/* Center Button */}
  <div className="flex justify-center">
    <button className="px-4 bg-[#5E3BEE] py-2 rounded-[24px] text-[14px] text-white flex items-center justify-center gap-x-1 hover:bg-violet-500 duration-300">
      HIRE ME <MdOutlineMail />
    </button>
  </div>
</div>

    </div>
  );
};

export default Navbar;
