import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" style={linkStyle}>
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-2">
            <Link href="/" className="nav-menu-button" style={linkStyle}>
              Home
            </Link>
            <Link href="/about" className="nav-menu-button" style={linkStyle}>
              About
            </Link>
            <Link href="/contact" className="nav-menu-button" style={linkStyle}>
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#221D1D] hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}