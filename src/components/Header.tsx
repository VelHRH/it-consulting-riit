import Image from "next/image";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="bg-slate-500 h-16 flex justify-around items-center">
      <Image src="/assets/logo-black.png" alt="Logo" width={120} height={120} />
      <nav className="flex gap-5">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};
