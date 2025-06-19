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

          {/* Header Actions */}
          {/* <div className="flex items-center space-x-6">
            <Link href="/contact">
              <button className="bg-[#57C8FF] text-black px-6 py-2 rounded-full text-sm hover:bg-[#4BB5E7] transition-colors duration-200">
                Contact Us
              </button>
            </Link>

            <a
              href="#"
              aria-label="Visit our LinkedIn"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <div className="flex items-center space-x-2 text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M12 3a9 9 0 110 18 9 9 0 010-18z" />
              </svg>
              <span className="text-sm font-medium">ENG</span>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
