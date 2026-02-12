import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-20 pb-8 border-t border-gray-200 dark:border-gray-800 mt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold italic text-gray-900 dark:text-white">
              <span className="mr-2 text-green-600"><i className="bi bi-ubuntu"></i></span> My Abia
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-lg text-black dark:text-gray-200">
            <Link to="/browser" className="hover:text-gray-600 dark:hover:text-gray-400 nav-link">Browse businesses</Link>
            <Link to="/services" className="hover:text-gray-600 dark:hover:text-gray-400 nav-link">Find services</Link>
            <Link to="/announcements" className="hover:text-gray-600 dark:hover:text-gray-400 nav-link">View announcements</Link>
            <Link to="/emergency" className="hover:text-gray-600 dark:hover:text-gray-400 nav-link">Emergency contacts</Link>
            <Link to="/add-business" className="hover:text-gray-600 dark:hover:text-gray-400 nav-link">Add your business</Link>
          </div>
          <div className="flex gap-4 text-gray-900 dark:text-gray-300 text-xl">
            <a href="#" className="hover:text-blue-600 transition text-blue-500"><i className="bi bi-facebook"></i></a>
            <a href="#" className="hover:text-pink-600 transition"><i className="bi bi-instagram"></i></a>
            <a href="#" className="hover:text-gray-600 dark:hover:text-white transition text-black dark:text-gray-300"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="hover:text-blue-500 transition text-blue-400"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="hover:text-red-500 transition text-red-400"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
        <hr className="border-gray-200 dark:border-gray-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-gray-900 dark:text-gray-400">
          <p>© 2025 My Abia. All rights reserved.</p>
          <div className="flex gap-6 underline decoration-1 underline-offset-4">
            <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-gray-200">Privacy policy</Link>
            <div className="w-px bg-gray-300 dark:bg-gray-700 h-10"></div>
            <Link to="/terms" className="hover:text-gray-600 dark:hover:text-gray-200">Terms of service</Link>
            <div className="w-px bg-gray-300 dark:bg-gray-700 h-10"></div>
            <Link to="/cookies" className="hover:text-gray-600 dark:hover:text-gray-200">Cookie settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
