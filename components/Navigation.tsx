"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/uslugi', label: 'Usługi' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-primary-foreground px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-medium"
      >
        Przejdź do głównej treści
      </a>
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <Link 
                href="/" 
                className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl p-2 transition-all duration-300 hover:bg-white/10"
                aria-label="Strona główna Tax Office Marta Mróz"
              >
                <div className="relative">
                  <img 
                    src="https://taxoffice.biz/wp-content/uploads/2025/03/cropped-Tax_office-1.png" 
                    alt="Tax Office Marta Mróz - Biuro rachunkowe w Miliczu"
                    className="h-12 w-auto object-contain group-hover:scale-105 transition-all duration-300 filter drop-shadow-lg"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group ${
                      isActive(item.href) 
                        ? `${isScrolled ? 'text-white bg-primary shadow-lg shadow-primary/25' : 'text-white bg-white/20 backdrop-blur-sm shadow-lg shadow-black/10 border border-white/30'}`
                        : `${isScrolled ? 'text-gray-700 hover:text-primary hover:bg-gray-50/80' : 'text-white hover:text-white hover:bg-white/10 backdrop-blur-sm'}`
                    }`}
                    style={{
                      textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.5)'
                    }}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    )}
                    <div className={`absolute inset-0 rounded-xl ${isScrolled ? 'bg-gradient-to-r from-primary/5 to-secondary/5' : 'bg-gradient-to-r from-white/5 to-white/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden xl:flex items-center gap-6">
              <div className={`flex items-center gap-4 text-sm transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
                style={{
                  textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+48 791 188 166</span>
                </div>
                <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">biuro@taxoffice.biz</span>
                </div>
              </div>
              <div className={`w-px h-6 transition-colors duration-300 ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
              <Button 
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group"
                style={{
                  boxShadow: isScrolled ? undefined : '0 4px 15px rgba(0, 0, 0, 0.2), 0 8px 25px rgba(13, 27, 42, 0.3)'
                }}
              >
                <Link href="/kontakt" className="flex items-center gap-2">
                  <span>Umów konsultację</span>
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-white text-xs font-medium">
                    Bezpłatna
                  </Badge>
                </Link>
              </Button>
            </div>

            {/* Mobile CTA */}
            <div className="hidden md:block lg:hidden">
              <Button 
                asChild
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg"
                style={{
                  boxShadow: isScrolled ? undefined : '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Link href="/kontakt">Konsultacja</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
                className={`relative h-12 w-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-50/80 hover:text-primary' 
                    : 'text-white hover:bg-white/10 hover:text-white'
                }`}
                style={{
                  textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isScrolled ? 'bg-gradient-to-r from-primary/5 to-secondary/5' : 'bg-gradient-to-r from-white/5 to-white/10'
                }`}></div>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div 
              className="md:hidden animate-fade-in-up" 
              id="mobile-menu"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl mt-4 p-6 space-y-4 border border-gray-200/50 shadow-xl">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      isActive(item.href)
                        ? 'text-white bg-primary shadow-lg'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50/80'
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Sygnalista Link */}
                <div className="border-t border-gray-200/50 pt-4">
                  <Link
                    href="/sygnalista"
                    className="block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-red-600 hover:text-red-700 hover:bg-red-50/80"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Panel Sygnalisty
                    </div>
                  </Link>
                </div>
                
                <div className="border-t border-gray-200/50 pt-4 mt-6">
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">+48 791 188 166</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                      <span className="font-medium">biuro@taxoffice.biz</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold py-3 shadow-lg"
                  >
                    <Link href="/kontakt" className="flex items-center justify-center gap-2">
                      <span>Umów konsultację</span>
                      <Badge variant="secondary" className="bg-white/20 text-white text-xs font-medium">
                        Bezpłatna
                      </Badge>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
