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

        {/* Hamburger / Close Button */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="flex flex-col justify-center items-center w-7 h-7"
          >
            {/* Top Line */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 bg-white mb-1"
            />
            {/* Middle Line */}
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 bg-white mb-1"
            />
            {/* Bottom Line */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 bg-white"
            />
          </motion.div>
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
