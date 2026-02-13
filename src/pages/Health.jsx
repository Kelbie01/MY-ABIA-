import { useState } from 'react';

export default function Health() {
  const [searchQuery, setSearchQuery] = useState('');

  const providers = [
    {
      id: 1,
      name: "Abia State University Teaching Hospital",
      location: "34 MCC Rd, Abayi, Aba 45311",
      icon: "bi-plus-lg",
      featured: false
    },
    {
      id: 2,
      name: "St. Luke's Medical Center",
      location: "Aba, Abia state",
      icon: "bi-plus-lg",
      featured: false
    },
    {
      id: 3,
      name: "Mercy Clinic and Pharmacy",
      location: "Ohafia, Abia state",
      icon: "bi-hospital",
      isCustomIcon: true,
      featured: false
    },
    {
      id: 4,
      name: "Arochukwu Health Center",
      location: "Arochukwu, Abia state",
      icon: "bi-plus-lg",
      featured: false
    },
    {
      id: 5,
      name: "Victory Dental Practice",
      location: "Umuahia, Abia state. Specialized dental care and orthodontics",
      status: "Active",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
      featured: true
    }
  ];

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased overflow-x-hidden transition-colors duration-200">
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000')" }}
        className="py-28 px-4 bg-cover bg-center bg-no-repeat bg-gray-800 bg-blend-overlay border-b border-gray-200 dark:border-gray-800 md:mt-10"
      >
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Health Services
          </h1>
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl font-medium text-green-300 animate-marquee whitespace-nowrap">
              Find trusted healthcare providers and medical facilities across Abia state
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search providers or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <i className="bi bi-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          <button className="px-6 py-3 bg-white text-black font-bold rounded-md shadow hover:bg-gray-200 transition text-lg">
            Browse
          </button>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-lg font-bold text-gray-700 dark:text-gray-400">Browse</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Healthcare providers in Abia</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Select a provider to view full details and contact information</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProviders.filter(p => !p.featured).map((provider) => (
                <div
                  key={provider.id}
                  className="border border-gray-300 dark:border-gray-700 p-8 rounded-sm hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-800 flex flex-col justify-between h-full group animate-fade-up"
                >
                  <div>
                    <div className={`w-10 h-10 border-2 ${provider.isCustomIcon ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'} rounded flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition`}>
                      <i className={`bi ${provider.icon} ${provider.isCustomIcon ? 'text-green-400' : 'text-xl'}`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{provider.name}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{provider.location}</p>
                  </div>
                  <button className="mt-8 flex items-center text-lg font-bold text-gray-900 dark:text-white">
                    View <i className="bi bi-chevron-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </button>
                </div>
              ))}
            </div>

            {/* Featured Provider */}
            {filteredProviders.filter(p => p.featured).map((provider) => (
              <div
                key={provider.id}
                className="lg:col-span-1 border border-gray-200 dark:border-gray-700 shadow-sm rounded-sm flex flex-col h-full group animate-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                <div className="bg-gray-200 dark:bg-gray-800 h-64 w-full flex items-center justify-center overflow-hidden">
                  <img src={provider.img} alt={provider.name} className="group-hover:scale-110 transition duration-500 w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white dark:bg-gray-800">
                  <span className="text-lg font-bold text-green-600 mb-2 block">{provider.status}</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{provider.name}</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{provider.location}</p>
                  <div className="mt-auto flex items-center gap-6">
                    <button className="px-6 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white text-lg font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition">
                      More
                    </button>
                    <button className="flex items-center text-lg font-bold text-gray-900 dark:text-white hover:underline">
                      View <i className="bi bi-chevron-right ml-2 text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProviders.length === 0 && (
            <div className="text-center mt-10 py-10">
              <i className="bi bi-search text-4xl text-gray-300"></i>
              <p className="text-xl text-gray-500 mt-2">No providers found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
