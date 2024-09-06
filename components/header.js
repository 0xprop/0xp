import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-decoration-none">
              <span className="font-montserrat font-black text-2xl text-nav-text">Øxprop</span>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;