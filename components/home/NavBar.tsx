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
    { title: 'Investment Plans', href: '/investments' },
    { title: 'Our Services', href: '/services' },
    { title: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className={`sticky w-full min-h-[20vh] z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation">
        <section className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <h1 className="text-2xl font-bold text-primary">InvestFirm</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <section className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <section className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </section>
          </section>

          {/* Mobile Navigation */}
          <section className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8">
                  <ul className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-lg text-gray-700 hover:text-primary transition-colors"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <section className="pt-4 space-y-4">
                    <Button variant="outline" className="w-full">Sign In</Button>
                    <Button className="w-full">Get Started</Button>
                  </section>
                </nav>
              </SheetContent>
            </Sheet>
          </section>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;