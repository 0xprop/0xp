import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navStyle = {
    display: 'inline-block',
    borderRadius: '50px',
    padding: '9px 16px',
    backgroundColor: 'transparent',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '105%',
    letterSpacing: '-0.09px',
    color: '#221d1d',
    transition: 'background-color 0.15s ease',
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-2">
            <Link href="/" style={navStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              <span className="block">Home</span>
            </Link>
            <Link href="/about" style={navStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              <span className="block">About</span>
            </Link>
            <Link href="/contact" style={navStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              <span className="block">Contact</span>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-nav-text hover:text-blue-600">
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