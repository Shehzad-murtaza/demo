"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Find Jobs", path: "/jobs" },
    { name: "Browse Companies", path: "/companies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources", dropdown: true },
    { name: "Contact Us", path: "/contact" },
  ];

  const dropdownLinks = [
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 h-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[65px]">
          {/* Mobile Menu Button (Left) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-gray-900 hover:text-blue-600 transition-all"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Logo (Centered on Mobile) */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/">
              <img src="/home/logo.svg" alt="Logo" className="h-5 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">
            {links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center text-gray-900 font-medium hover:text-blue-600">
                    {link.name} <ChevronDown size={16} className="ml-1" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ${
                      dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {dropdownLinks.map((dropdown) => (
                      <Link
                        key={dropdown.name}
                        href={dropdown.path}
                        className="block px-4 py-3 text-gray-900 hover:bg-gray-100"
                      >
                        {dropdown.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-gray-900 font-medium hover:text-blue-600"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-900 bg-yellow-100 rounded-full hover:bg-yellow-200">
              Login
            </button>
            <button className="px-6 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-900 hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Mobile Navigation Links */}
          <div className="mt-10 space-y-6">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <button
                    className="w-full text-left text-gray-900 font-medium text-lg hover:text-blue-600 flex items-center justify-between"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    {link.name} <ChevronDown size={16} />
                  </button>

                  {/* Mobile Dropdown Menu */}
                  <div className={`mt-2 ml-4 space-y-2 ${mobileDropdownOpen ? "block" : "hidden"}`}>
                    {dropdownLinks.map((dropdown) => (
                      <Link
                        key={dropdown.name}
                        href={dropdown.path}
                        className="block text-gray-900 font-medium text-md hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdown.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block text-gray-900 font-medium text-lg hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full py-2 text-gray-900 bg-yellow-100 rounded-full hover:bg-yellow-200">
              Login
            </button>
            <button className="w-full py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
