import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Routes } from "../routes";

export const Header: FC = () => {
  return (
    <header className="bg-slate-50/90 fixed top-0 left-0 right-0 backdrop-blur-sm z-50 h-[4.75rem] flex justify-around items-center border-b-2 border-slate-200">
      <Image src="/assets/logo-black.png" alt="Logo" width={120} height={120} />
      <nav className="flex gap-6 uppercase text-xl font-semibold">
        {Object.values(Routes).map((route) => (
          <Link
            key={route.url}
            href={route.url}
            className="hover:text-green-500 transition"
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
