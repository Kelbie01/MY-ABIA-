import { useState, useEffect } from 'react';

export default function Tourism() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lgaFilter, setLgaFilter] = useState('');
  const [lgas, setLgas] = useState([]);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const tourismData = [
    {
      id: 1,
      name: "National War Museum",
      type: "Historical Site",
      lga: "Umuahia North",
      address: "Ebonyi Road, Umuahia",
      activity: "History, Military Artifacts",
      verified: true,
      category: "heritage",
      desc: "A solemn reminder of the Nigerian Civil War. It houses the Ojukwu Bunker, armored tanks, and the famous 'Ogbunigwe' bomb fabrication.",
      image: "https://images.unsplash.com/photo-1599596397087-0b1e3678385e?q=80&w=800&auto=format&fit=crop",
      fee: "₦500 (Students: ₦200)",
      bestTime: "10:00 AM - 4:00 PM (Weekdays)",
      access: "Partial wheelchair access",
      tip: "Ask for a guided tour to understand the significance of the Radio Biafra transmitter."
    },
    {
      id: 2,
      name: "Azumini Blue River",
      type: "Nature Reserve",
      lga: "Ukwa East",
      address: "Azumini Town",
      activity: "Boating, Picnics, Sightseeing",
      verified: true,
      category: "nature",
      desc: "Famous for its crystal-clear blue waters that sparkle in the sunlight. The river comes from the Sambreiro River and is surrounded by lush white sands.",
      image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=800&auto=format&fit=crop",
      fee: "Free (Boat rides: ₦1,000)",
      bestTime: "Dry Season (Nov - Mar)",
      access: "Rough terrain, not wheelchair friendly",
      tip: "Bring your own food for a picnic, as there are few vendors nearby."
    },
    {
      id: 3,
      name: "Ojukwu Bunker",
      type: "Historical Site",
      lga: "Umuahia North",
      address: "Okpara Avenue",
      activity: "Civil War History",
      verified: true,
      category: "heritage",
      desc: "The subterranean command post of the Biafran leader. It was camouflaged as a toilet in the garden but led to a sophisticated underground complex.",
      image: "https://images.unsplash.com/photo-1628169213876-068305c48733?q=80&w=800&auto=format&fit=crop",
      fee: "₦500",
      bestTime: "12:00 PM - 3:00 PM",
      access: "Stairs only (Underground)",
      tip: "It gets humid underground; dress lightly."
    },
    {
      id: 4,
      name: "Museum of Colonial History",
      type: "Museum",
      lga: "Aba South",
      address: "Ikot Ekpene Road, Aba",
      activity: "Colonial Artifacts",
      verified: true,
      category: "heritage",
      desc: "Houses artifacts from the British colonial era, including trade agreements, old currency, and photographs of early Aba.",
      image: "https://images.unsplash.com/photo-1565060169112-2580c0587212?q=80&w=800&auto=format&fit=crop",
      fee: "₦200",
      bestTime: "Weekdays 9 AM - 5 PM",
      access: "Accessible",
      tip: "Great place for students researching the Aba Women's Riot of 1929."
    },
    {
      id: 6,
      name: "Long Juju Slave Route",
      type: "Historical Landmark",
      lga: "Arochukwu",
      address: "Arochukwu Kingdom",
      activity: "Cultural History, Tours",
      verified: true,
      category: "heritage",
      desc: "The site of the Ibini Ukpabi oracle. It was a major destination during the slave trade era. Includes the 'River of Blood'.",
      image: "https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=800&auto=format&fit=crop",
      fee: "Negotiable Tour Guide Fee",
      bestTime: "Dry Season",
      access: "Difficult terrain",
      tip: "This is a sacred site. Respect local customs and ask permission before taking photos."
    },
    {
      id: 10,
      name: "Akwete Weaving Center",
      type: "Cultural Center",
      lga: "Ukwa East",
      address: "Akwete Town",
      activity: "Shopping, Cultural Tour",
      verified: true,
      category: "culture",
      desc: "Home of the famous Akwete cloth. Watch local women weave intricate geometric patterns using traditional vertical looms.",
      image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde8b?q=80&w=800&auto=format&fit=crop",
      fee: "Free to watch",
      bestTime: "Daytime",
      access: "Wheelchair accessible",
      tip: "Buy authentic fabric directly from the weavers for the best price and quality."
    }
  ];

  useEffect(() => {
    const uniqueLgas = [...new Set(tourismData.map(item => item.lga))].sort();
    setLgas(uniqueLgas);
  }, []);

  const filteredData = tourismData.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLga = lgaFilter === '' || item.lga === lgaFilter;
    return matchesSearch && matchesLga;
  });

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'heritage': return 'bg-yellow-100 text-yellow-800';
      case 'nature': return 'bg-green-100 text-green-800';
      case 'culture': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
      <header className="relative bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-32 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight drop-shadow-md">
            Tourism & Attractions in Abia
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif mb-8 drop-shadow-md opacity-90">
            Explore the hidden gems of God's Own State. From the crystal clear Azumini River to the historic War Museum.
          </p>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 sticky top-20 p-3 z-40 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-search text-gray-500 group-focus-within:text-cyan-600 transition-colors"></i>
              </div>
              <input
                type="text"
                placeholder="Search for museums, caves, rivers, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:text-lg font-serif transition-colors shadow-sm text-gray-900 dark:text-white"
              />
            </div>

            <div className="relative md:w-1/3 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-geo-alt text-gray-500 group-focus-within:text-cyan-600 transition-colors"></i>
              </div>
              <select
                value={lgaFilter}
                onChange={(e) => setLgaFilter(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:text-lg font-serif appearance-none cursor-pointer transition-colors shadow-sm text-gray-900 dark:text-white"
              >
                <option value="">All Locations</option>
                {lgas.map(lga => (
                  <option key={lga} value={lga}>{lga}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="bi bi-chevron-down text-gray-500"></i>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-lg text-gray-900 dark:text-gray-300 font-serif">
              {filteredData.length === 0 ? 'No attractions found' : `Showing ${filteredData.length} location${filteredData.length === 1 ? '' : 's'}`}
            </p>
            {(searchQuery || lgaFilter) && (
              <button
                onClick={() => { setSearchQuery(''); setLgaFilter(''); }}
                className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline font-serif"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      <main className="flex-grow w-full py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {filteredData.map((place, idx) => (
              <div
                key={place.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between animate-fade-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <span className={`${getBadgeStyles(place.category)} text-lg font-bold px-3 py-1 rounded uppercase tracking-wide font-serif`}>
                      {place.type}
                    </span>
                    {place.verified && (
                      <div className="bg-gray-50 dark:bg-gray-700 p-1.5 rounded-full">
                        <i className="bi bi-star-fill text-cyan-600 text-lg" title="Top Rated"></i>
                      </div>
                    )}
                  </div>

                  <h3
                    onClick={() => setSelectedAttraction(place)}
                    className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight hover:text-cyan-600 transition-colors cursor-pointer hover:underline decoration-cyan-600 underline-offset-4"
                  >
                    {place.name}
                  </h3>

                  <p className="text-lg font-medium text-cyan-600 font-serif mb-4 flex items-center gap-2">
                    <i className="bi bi-camera-fill"></i> {place.activity}
                  </p>

                  <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300 font-serif mt-4">
                    <p className="flex items-start gap-2">
                      <i className="bi bi-geo-alt mt-0.5 text-gray-500"></i>
                      <span>{place.address}, <strong>{place.lga}</strong></span>
                    </p>
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-4 font-serif">
                  <button
                    onClick={() => setSelectedAttraction(place)}
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-md text-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Visitor Guide
                  </button>
                  <button
                    onClick={() => setSelectedAttraction(place)}
                    className="px-3 py-2 border border-gray-500 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-cyan-600 transition-colors"
                    title="Visitor Guide"
                  >
                    <i className="bi bi-info-circle-fill"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-5">
                <i className="bi bi-compass text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">No attractions found</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2 font-serif">Try searching for "Museum", "River", or "Arochukwu".</p>
            </div>
          )}
        </div>
      </main>

      {/* Modal / Visitor Guide */}
      {selectedAttraction && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedAttraction(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative animate-modal-pop font-serif"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 shadow hover:bg-red-50 dark:hover:bg-red-900 text-red-600 z-10 transition"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="h-64 overflow-hidden relative group">
              <img src={selectedAttraction.image} alt={selectedAttraction.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-cyan-600 text-white text-xs px-3 py-1.5 rounded uppercase tracking-wider font-bold shadow-sm">
                {selectedAttraction.type}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{selectedAttraction.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 border-l-4 border-cyan-600 pl-4 text-lg">{selectedAttraction.desc}</p>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-inner">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">Visitor Intelligence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-lg">
                  <div>
                    <p className="text-xs text-cyan-600 font-bold uppercase mb-1"><i className="bi bi-geo-alt-fill mr-1"></i> Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedAttraction.address}, {selectedAttraction.lga}</p>
                  </div>
                  <div>
                    <p className="text-xs text-cyan-600 font-bold uppercase mb-1"><i className="bi bi-cash-stack mr-1"></i> Entry Fee</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedAttraction.fee}</p>
                  </div>
                  <div>
                    <p className="text-xs text-cyan-600 font-bold uppercase mb-1"><i className="bi bi-clock-fill mr-1"></i> Best Time</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedAttraction.bestTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-cyan-600 font-bold uppercase mb-1"><i className="bi bi-universal-access mr-1"></i> Accessibility</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedAttraction.access}</p>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-lg p-4 flex items-start">
                  <span className="text-xl mr-3">💡</span>
                  <div>
                    <p className="text-xs font-bold text-green-800 dark:text-green-400 uppercase mb-1">PRO TIP:</p>
                    <p className="text-base text-green-900 dark:text-green-200 leading-snug">{selectedAttraction.tip}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedAttraction(null)}
                  className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-bold text-lg"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
