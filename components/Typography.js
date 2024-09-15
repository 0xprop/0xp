import Link from 'next/link';

export function Headline({ children }) {
  return <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#221D1D] mb-6 font-roboto leading-tight">{children}</h1>;
}

export function Overview({ children }) {
  return <p className="text-lg sm:text-xl md:text-2xl text-[#636161] mb-8 font-medium max-w-2xl font-inter leading-relaxed">{children}</p>;
}

export function CTAButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="px-6 py-3 bg-white text-[#221D1D] border border-gray-300 rounded-full font-inter font-medium hover:bg-gray-100 transition duration-300">
      {children}
    </button>
  );
}

export const NavLink = ({ href, children, isActive, isDisabled }) => {
  const baseClasses = `
    mx-2 px-3 py-1 rounded-full transition-all duration-300
    font-inter text-sm font-medium leading-[105%] tracking-[-0.09px]
    text-[#221D1D] hover:bg-[#f5f5f5]
  `;
  const activeClasses = "font-semibold";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  const linkClasses = `${baseClasses} ${
    isActive ? activeClasses : isDisabled ? disabledClasses : ''
  }`;

  if (isDisabled) {
    return <span className={linkClasses}>{children}</span>;
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};

export function NavButton({ onClick, children, isHovering, onMouseEnter, onMouseLeave }) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="px-4 py-2 bg-[#221D1D] text-white rounded-full font-inter font-light text-sm 
                 hover:bg-gray-800 transition-colors duration-300 
                 relative overflow-hidden"
    >
      <span className="relative z-10">
        {isHovering ? 'Coming Soon' : children}
      </span>
      <span className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
}

export function FooterText({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

export function FooterLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-gray-500 hover:text-gray-700">
      {children}
    </a>
  );
}
