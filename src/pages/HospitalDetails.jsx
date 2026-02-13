import { Link } from 'react-router-dom';

export default function HospitalDetails() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased flex flex-col min-h-screen overflow-x-hidden transition-colors duration-200">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')",
        }}
        className="relative h-[400px] md:h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16"
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 animate-fade-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
            Abia State University Teaching Hospital
          </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 inline-block">
            <p className="text-lg md:text-xl text-green-200 font-medium">
              Comprehensive healthcare services and emergency care available 24/7
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm md:text-lg font-medium text-white border border-white/30">
              <i className="bi bi-hospital mr-2"></i>Hospital
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm md:text-lg font-medium text-white border border-white/30">
              <i className="bi bi-heart-pulse mr-2"></i>Healthcare
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm md:text-lg font-medium text-white border border-white/30">
              <i className="bi bi-exclamation-circle mr-2"></i>Emergency
            </span>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="animate-fade-up">
              <span className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">Reach us by phone or visit in person</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-xl">
                Our team stands ready to assist you with any questions or concerns about our services and facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Phone</h3>
                  <a
                    className="text-gray-700 dark:text-green-400 text-lg font-semibold hover:text-black dark:hover:text-white cursor-pointer underline underline-offset-4"
                    href="tel:+234-812-453-1100"
                  >
                    +234-812-453-1100
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Address</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
                    34 MCC Rd, Abayi, Aba 45311
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg font-bold">
                  Call Now
                </button>
                <button className="px-6 py-3 border border-black dark:border-white rounded flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-lg font-bold">
                  Get Directions <i className="bi bi-chevron-right text-xs"></i>
                </button>
              </div>
            </div>

            <div className="aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-lg rounded-xl group animate-fade-up" style={{ animationDelay: '200ms' }}>
              <img
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop"
                alt="Medical Services"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center px-4 mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-sm">
              <i className="bi bi-geo-alt-fill text-3xl text-red-600"></i>
            </div>
          </div>
          <span className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase">Location</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 dark:text-white">Find us on the map</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-xl">
            Our facility is centrally located in Aba for easy access. The map below shows our exact position.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 overflow-hidden relative shadow-md rounded-xl border border-gray-300 dark:border-gray-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21555.103406126153!2d7.3399014850617315!3d5.1309400202970545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429b28183a1039%3A0xe2c4147a10dffab7!2sAbia%20State%20University%20Teaching%20Hospital%20(ABSUTH)!5e0!3m2!1sen!2sng!4v1765145294055!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Back to health page */}
      <div className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center">
        <Link to="/health" className="inline-flex items-center text-lg font-bold text-green-600 hover:underline">
          <i className="bi bi-chevron-left mr-2"></i> Back to Health Services
        </Link>
      </div>
    </div>
  );
}
