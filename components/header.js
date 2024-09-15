import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white bg-opacity-80 sticky top-0 z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-decoration-none">
              <span className={`font-montserrat font-black text-2xl text-nav-text transition-all duration-300 ${isScrolled ? 'text-lg' : ''}`}>
                Øxprop
              </span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Link href="/" className="font-inter font-medium text-nav-text hover:bg-gray-100 px-3 py-2 transition-colors duration-200 rounded-full">
              Home
            </Link>
            <Link href="/about" className="font-inter font-medium text-nav-text hover:bg-gray-100 px-3 py-2 transition-colors duration-200 rounded-full">
              About
            </Link>
            <Link href="/contact" className="font-inter font-medium text-nav-text hover:bg-gray-100 px-3 py-2 transition-colors duration-200 rounded-full">
              Contact
            </Link>
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`font-inter font-medium text-white bg-[#221D1D] transition-colors duration-200 rounded-full`}
              style={{ width: '120px', height: '40px' }} // Set fixed width and height
            >
              {isHovering ? 'Coming Soon' : 'Launch App'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;