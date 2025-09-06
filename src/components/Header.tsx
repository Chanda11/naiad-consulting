"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <h1 className="text-lg font-bold">Naiad Firm Dynamics Consulting</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/services" className="hover:text-gray-200">Services</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-green-800 px-4 pb-3 space-y-2"
          >
            <Link href="/" className="block hover:text-gray-200">Home</Link>
            <Link href="/about" className="block hover:text-gray-200">About</Link>
            <Link href="/services" className="block hover:text-gray-200">Services</Link>
            <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
