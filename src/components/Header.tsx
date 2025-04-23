import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-primary'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="font-heading font-bold text-2xl text-text">
                YUVA<span className="text-accent">Digital</span> Creators
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-text hover:bg-secondary focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-text hover:text-accent transition-colors">
              Home
            </a>
            <div className="relative">
              <button
                type="button"
                className="group inline-flex items-center text-base font-medium text-text hover:text-accent focus:outline-none transition-colors"
              >
                <span>Products</span>
                <ChevronDown className="ml-1 h-4 w-4 group-hover:text-accent" aria-hidden="true" />
              </button>
            </div>
            <a href="#features" className="text-base font-medium text-text hover:text-accent transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-base font-medium text-text hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-base font-medium text-text hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-text hover:text-accent transition-colors"
            >
              Sign in
            </a>
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute inset-x-0 top-full bg-white shadow-lg`}>
        <div className="pt-2 pb-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-secondary hover:text-accent">
            Home
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-secondary hover:text-accent">
            Products
          </a>
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-secondary hover:text-accent">
            Features
          </a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-secondary hover:text-accent">
            Pricing
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-secondary hover:text-accent">
            Contact
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-secondary">
          <div className="px-5 flex items-center justify-between">
            <a
              href="#"
              className="block text-center px-4 py-2 text-base font-medium text-text hover:text-accent"
            >
              Sign in
            </a>
            <a
              href="#"
              className="block text-center px-4 py-2 rounded-md text-base font-medium text-white bg-accent hover:bg-accent/90"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
