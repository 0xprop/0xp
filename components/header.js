import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLink, NavButton } from './Typography';
import { useRouter } from 'next/router';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm pt-2' : 'pt-8'}`}>
      <div className="site-container">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center">
            <Link href="/" className="text-decoration-none">
              <span className="font-montserrat font-black text-2xl text-nav-text">
                Øxprop
              </span>
            </Link>
          </div>
          <nav className="flex items-center">
            <NavLink href="/" isActive={router.pathname === '/'}>Home</NavLink>
            <NavLink href="#" isDisabled>About</NavLink>
            <NavLink href="#" isDisabled>Contact</NavLink>
            <div className="ml-3">
              <NavButton
                onClick={() => {}}
                isHovering={isHovering}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Launch App
              </NavButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;