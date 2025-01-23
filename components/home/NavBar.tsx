"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Trading Plans', href: '/trading-plans' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              InvestFirm
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`
                  px-2 py-2 text-sm font-medium
                  ${isScrolled ? 'text-gray-700' : 'text-white'}
                  hover:text-primary transition-colors
                `}
              >
                {link.title}
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary`}
              >
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? 'text-gray-700' : 'text-white'}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] pt-6">
                <SheetHeader>

                  <SheetTitle></SheetTitle>

                </SheetHeader>
                <div className="mt-6 flex flex-col space-y-3">
                  {
                    navLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="text-base text-gray-700 hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  <Button variant="outline" size="sm" className="w-full mt-2">Sign In</Button>
                  <Button size="sm" className="w-full">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;