
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "BMI Calculator", path: "/bmi-calculator" },
    { name: "Nutrition", path: "/nutrition" },
    { name: "Exercises", path: "/exercises" },
  ];

  const navItemStyles = (isActive: boolean) => cn(
    "relative px-3 py-2 text-sm font-medium transition-colors",
    "hover:text-primary",
    isActive 
      ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
      : "text-foreground/80"
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <span className="text-2xl font-bold text-gradient">FitLife</span>
        </NavLink>

        {isMobile ? (
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => navItemStyles(isActive)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slide-down">
            <nav className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => navItemStyles(isActive)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
