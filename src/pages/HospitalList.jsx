import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HospitalList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lgaFilter, setLgaFilter] = useState('');
  const [lgas, setLgas] = useState([]);

  const healthFacilities = [
    { id: 1, name: "Federal Medical Centre (FMC)", type: "Federal Hospital", lga: "Umuahia North", address: "Aba Road, Umuahia", phone: "0803-123-4567", verified: true, image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=800" },
    { id: 2, name: "Madonna Hospital", type: "Private Hospital", lga: "Umuahia North", address: "No. 22 School Road", phone: "0802-555-0199", verified: false, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" },
    { id: 3, name: "Police Clinic", type: "Clinic", lga: "Umuahia North", address: "Bende Road, Umuahia", phone: "112", verified: true, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800" },
    { id: 4, name: "Hossana Specialist Hospital", type: "Specialist Clinic", lga: "Umuahia North", address: "Umuwaya Road", phone: "0803-555-1212", verified: false, image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800" },
    { id: 5, name: "Golden Cross Infirmary", type: "Private Hospital", lga: "Umuahia North", address: "Azikiwe Road", phone: "0703-999-8888", verified: false, image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800" },
    { id: 6, name: "Abia State Specialist Hospital", type: "State Hospital", lga: "Umuahia South", address: "Amachara, Umuahia", phone: "0805-999-8877", verified: true, image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800" },
    { id: 10, name: "Abia State University Teaching Hospital", type: "Teaching Hospital", lga: "Aba North", address: "34 MCC Rd, Abayi, Aba", phone: "0803-000-1111", verified: true, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" },
    { id: 11, name: "7th Day Adventist Hospital", type: "Mission Hospital", lga: "Aba North", address: "Old Ogbor Hill", phone: "0806-777-1234", verified: true, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800" },
    { id: 15, name: "General Hospital Aba", type: "General Hospital", lga: "Aba South", address: "Hospital Road, Aba", phone: "0803-GEN-HOSP", verified: true, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" },
    { id: 18, name: "General Hospital Ohafia", type: "General Hospital", lga: "Ohafia", address: "Amaekpu, Ohafia", phone: "N/A", verified: true, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800" },
    { id: 22, name: "General Hospital Bende", type: "General Hospital", lga: "Bende", address: "Bende Town", phone: "N/A", verified: true, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" },
    { id: 36, name: "General Hospital Arochukwu", type: "General Hospital", lga: "Arochukwu", address: "Arochukwu Town", phone: "N/A", verified: true, image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=800" }
  ];

  useEffect(() => {
    const uniqueLgas = [...new Set(healthFacilities.map(f => f.lga))].sort();
    setLgas(uniqueLgas);
  }, []);

  const filteredFacilities = healthFacilities.filter(facility => {
    const matchesSearch =
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLga = lgaFilter === '' || facility.lga === lgaFilter;
    return matchesSearch && matchesLga;
  });

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased min-h-screen flex flex-col transition-colors duration-200">
      <header
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')",
        }}
        className="relative bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-32 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight drop-shadow-md">
            Health Facilities in Abia
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif mb-8 drop-shadow-md opacity-90">
            A comprehensive directory of hospitals, clinics, and primary health centers across all Local Government Areas.
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <section className="bg-white dark:bg-gray-800 sticky top-20 z-40 p-3 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-search text-gray-500 group-focus-within:text-green-600 transition-colors"></i>
              </div>
              <input
                type="text"
                placeholder="Search hospital name, address, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 sm:text-lg font-serif transition-colors shadow-sm text-gray-900 dark:text-white"
              />
            </div>

            <div className="relative md:w-1/3 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-geo-alt text-gray-500 group-focus-within:text-green-600 transition-colors"></i>
              </div>
              <select
                value={lgaFilter}
                onChange={(e) => setLgaFilter(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 sm:text-lg font-serif appearance-none cursor-pointer transition-colors shadow-sm text-gray-900 dark:text-white"
              >
                <option value="">All Locations</option>
                {lgas.map(lga => (
                  <option key={lga} value={lga}>{lga}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Grid */}
      <main className="flex-grow w-full py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col rounded-md overflow-hidden animate-fade-up"
              >
                <div className="h-48 w-full overflow-hidden relative group">
                  <img src={facility.image} alt={facility.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-bold px-2.5 py-1 rounded">
                      {facility.type}
                    </span>
                    {facility.verified && <i className="bi bi-patch-check-fill text-green-600 text-lg"></i>}
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{facility.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <i className="bi bi-geo-alt mr-1"></i> {facility.address}, {facility.lga}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 mt-auto">
                    <i className="bi bi-telephone mr-1"></i> {facility.phone}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to={facility.name.includes('Abia State University') ? '/health/absuth' : '#'}
                      className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-md text-center font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFacilities.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <i className="bi bi-hospital text-5xl mb-4 block"></i>
              <p className="text-xl">No facilities found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <div className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center">
        <Link to="/health" className="inline-flex items-center text-lg font-bold text-green-600 hover:underline">
          <i className="bi bi-chevron-left mr-2"></i> Back to Health Services
        </Link>
      </div>
    </div>
  );
}
