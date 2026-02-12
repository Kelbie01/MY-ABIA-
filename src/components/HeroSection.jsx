import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full mt-6 md:mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/a3/5d/09/a35d09fc4b05fdbfedcfb96564cf9a12.jpg)' }}
          className="w-full bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-overlay text-white py-20 md:py-40 rounded-sm flex flex-col items-center text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight shadow-sm">
            Find what Abia has to offer
          </h1>
          <p className="text-base sm:text-xl max-w-3xl mb-6 sm:mb-8 opacity-95 drop-shadow-md">
            Search for businesses, services, and government resources across Abia State.
            Connect with local enterprises and essential contacts in seconds.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#search">
              <button className="bg-white text-gray-900 px-6 py-3 sm:px-5 sm:py-4 hover:bg-black hover:text-white text-base sm:text-lg rounded transition-all duration-200 transform hover:-translate-y-1">
                Search
              </button>
            </a>
            <a href="#browser">
              <button className="border border-white text-white hover:bg-black hover:text-white px-6 py-3 sm:px-5 sm:py-4 text-base sm:text-lg rounded transition-all duration-200 transform hover:-translate-y-1">
                Browse
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
