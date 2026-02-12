export default function EmergencySection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-900 mt-20 transition-colors duration-200">
      <div className="max-w-5xl mx-auto text-center px-4 animate-fade-up">
        <p className="text-lg font-bold text-gray-900 dark:text-gray-200">Emergency</p>
        <h2 className="text-5xl font-bold mt-3 text-gray-900 dark:text-white">Reach help when it matters</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-3">
          Quick access to essential emergency services. Call now for immediate assistance.
        </p>
        <div className="flex flex-wrap justify-center space-x-3 mt-8">
          <button className="border-black dark:border-white p-5 border-t border-b px-4 rounded-md text-lg font-bold hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200">
            Call
          </button>
          <button className="inline-flex items-center text-lg font-bold hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black p-5 rounded-md hover:border border-black dark:border-white transition-colors duration-200">
            Phone
            <span className="ml-1"><i className="bi bi-arrow-right"></i></span>
          </button>
        </div>
        <div className="flex flex-wrap justify-center space-x-8 mt-10 text-lg font-bold text-gray-700 dark:text-gray-300">
          <button className="hover:border-b-2 hover:border-black dark:hover:border-white pb-1">Police</button>
          <button className="hover:border-b-2 hover:border-black dark:hover:border-white pb-1">Fire</button>
          <button className="hover:border-b-2 hover:border-black dark:hover:border-white pb-1">Ambulance</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 px-4">
        <div className="border border-black dark:border-gray-600 grid grid-cols-1 md:grid-cols-2 animate-fade-up bg-white dark:bg-gray-800">
          <div className="w-full flex items-center justify-center h-80 overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img src="/images/Emergency flashing police siren vector illustration By Microvector _ TheHungryJPEG.jpeg" alt="Emergency Police Siren" className="w-full h-full object-cover" />
          </div>
          <div className="p-10 flex flex-col justify-center">
            <p className="text-lg text-gray-900 dark:text-gray-200 font-medium">Police</p>
            <h3 className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">
              Report crimes and emergencies
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-3">
              Contact the police force for security threats and criminal incidents.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="border-black dark:border-white p-5 border-t border-b px-4 p-5 rounded-md text-lg font-bold hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200">
                Call
              </button>
              <button className="inline-flex items-center text-lg font-bold hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black p-5 rounded-md hover:border border-black dark:border-white transition-colors duration-200">
                Phone
                <span className="ml-1"><i className="bi bi-arrow-right"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
