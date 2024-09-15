export default function Footer() {
    return (
      <footer className="bg-white py-10 px-4 sm:px-6 lg:px-8"> {/* Ensure background is white */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">&copy; 2023 -2024 0xprop Inc. ⚡️ All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
}