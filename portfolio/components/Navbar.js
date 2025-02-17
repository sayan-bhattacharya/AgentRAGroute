import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Your Name</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="#consulting" className="hover:text-blue-600">Consulting</Link>
            <Link href="#dialmate" className="hover:text-blue-600">Dialmate</Link>
            <Link href="#contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}