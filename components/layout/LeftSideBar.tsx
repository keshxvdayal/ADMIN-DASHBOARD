"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/logo.png";
import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-black shadow-xl max-lg:hidden text-slate-100">
      <Image src={logo} alt="logo" width={150} height={70} />

      <div className="flex flex-col gap-12 text-slate-100">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium text-slate-100 hover:text-slate-400 hover:cursor-pointer ${
              pathname === link.url ? "text-blue-1" : "text-grey-1"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
