"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="h-1 " />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <Link href="/">
              <Image
                src="/assets/Screenshot_1.png"
                alt="Supreme Group Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
