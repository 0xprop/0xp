import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Øxprop</h3>
            <p className="text-sm">Revolutionizing real estate investment through blockchain technology.</p>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">How It Works</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Øxprop Inc ⚡️ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;