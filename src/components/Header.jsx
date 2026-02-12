import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50 shadow-lg transition-colors duration-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">

          <div className="flex-shrink-0 md:mr-3">
            <Link to="/" className="text-3xl font-bold italic text-gray-900 dark:text-white flex items-center">
              <span className="mr-2 text-green-600"><i className="bi bi-ubuntu"></i></span>My Abia
            </Link>
          </div>

          <div className="hidden lg:flex items-center flex-1 justify-center max-w-lg mx-auto ">
            <div className="relative w-full">
              <input
                id="desktop-search-input"
                type="search"
                placeholder="Search attractions, history, or location..."
                className="w-full lg:w-56 xl:w-96 pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div className="hidden lg:flex space-x-6 items-center text-lg text-gray-700 dark:text-gray-200 font-bold whitespace-nowrap">
            <Link to="/government" className="hover:text-black dark:hover:text-white">Government</Link>
            <Link to="/announcements" className="hover:text-black dark:hover:text-white">Announcements</Link>
            <Link to="/emergency" className="hover:text-black dark:hover:text-white">Emergency</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-black dark:hover:text-white text-lg transition-colors duration-300" aria-haspopup="true">
                Categories <i className="bi bi-chevron-down text-sm text-black dark:text-white"></i>
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10 border border-gray-100 dark:border-gray-700">
                <Link to="/business" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 first:rounded-t-lg text-lg font-bold transition-colors duration-300 hover:text-black dark:hover:text-white">Business</Link>
                <Link to="/health" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg font-bold transition-colors duration-300 hover:text-black dark:hover:text-white">Health Services</Link>
                <Link to="/education" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg font-bold transition-colors duration-300 hover:text-black dark:hover:text-white">Education</Link>
                <Link to="/restaurants" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg font-bold transition-colors duration-300 hover:text-black dark:hover:text-white">Restaurants</Link>
                <Link to="/markets" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 text-lg font-bold transition-colors duration-300 hover:text-black dark:hover:text-white">Markets</Link>
                <Link to="/tourism" className="block px-6 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 last:rounded-b-lg text-lg font-bold transition-colors duration-300 hover:text-black dark:hover:text-white">Tourism</Link>
              </div>
            </div>

            <Link to="/about" className="hover:text-black dark:hover:text-white">About</Link>
            <Link to="/admin" className="hover:text-black dark:hover:text-white">Admin</Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-yellow-400' : 'bi-moon-fill text-gray-600'} text-xl`}></i>
            </button>

            <div className="hidden lg:flex md:ml-3 items-center space-x-4 flex-shrink-0">
              <Link to="/login" className="text-lg border border-gray-300 dark:border-gray-600 px-5 py-2 rounded hover:bg-green-600 hover:text-white dark:hover:bg-green-600 transition whitespace-nowrap">
                Sign in
              </Link>
              <Link to="/add-business" className="text-lg bg-black text-white px-5 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition whitespace-nowrap">
                Add
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-yellow-400' : 'bi-moon-fill text-gray-600'} text-xl`}></i>
            </button>
            <button
              id="mobile-menu-btn"
              className="text-gray-700 dark:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="bi bi-list text-3xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-300 dark:border-gray-700 ml-5 bg-white dark:bg-gray-900`}>
          <div className="px-4 py-4 space-y-3">
            <div className="mb-4 relative">
              <input id="mobile-search-input" type="search" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
              <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            <Link to="/government" className="block text-lg text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">Government</Link>
            <Link to="/about" className="block text-lg text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">About</Link>

            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="w-full flex justify-between items-center text-lg text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white focus:outline-none"
              >
                Categories
                <i className={`bi bi-chevron-down text-sm transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`}></i>
              </button>

              <div className={`${isCategoriesOpen ? 'block' : 'hidden'} pl-4 mt-2 space-y-2 border-l-2 border-gray-100 dark:border-gray-700`}>
                <Link to="/business" className="block text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-1">Business</Link>
                <Link to="/health" className="block text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-1">Health Services</Link>
                <Link to="/education" className="block text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-1">Education</Link>
                <Link to="/restaurants" className="block text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-1">Restaurants</Link>
                <Link to="/markets" className="block text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-1">Markets</Link>
                <Link to="/tourism" className="block text-base text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-1">Tourism</Link>
              </div>
            </div>

            <Link to="/announcements" className="block text-lg text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">Announcements</Link>
            <Link to="/admin" className="block text-lg text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">Admin</Link>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-3">
              <Link to="/login" className="block text-center text-lg border border-gray-300 dark:border-gray-600 px-4 py-2 rounded w-full hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white">Sign in</Link>
              <Link to="/add-business" className="block text-center text-lg bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800 dark:hover:bg-gray-700">Add</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
