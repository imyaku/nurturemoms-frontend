
import { useEffect } from 'react'
import { Navbar } from 'flowbite-react'

import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="assets/logo.png"
            className="h-12 mr-4"
            alt="NurtureMoms Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            NurtureMoms
          </span>
        </a>
        <div className="flex md:order-2">
          
      <Link href="/register">
            <button type="button" className="text-white bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none 
            focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
              Get started
            </button>
            </Link>

        </div>
      </div>
    </nav>
  );
}

export default Header