import { useState, useEffect } from 'react';

export default function Markets() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lgaFilter, setLgaFilter] = useState('');
  const [lgas, setLgas] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState(null);

  const marketData = [
    {
      id: 1,
      name: "Ariaria International Market",
      type: "International Hub",
      lga: "Aba North",
      address: "Faulks Road, Aba",
      goods: "Leather, Shoes, Bags, Textiles",
      verified: true,
      category: "international",
      image: "https://images.unsplash.com/photo-1621939514649-28b12e816a76?q=80&w=800",
      desc: "Known as the 'China of Africa', Ariaria is one of the largest markets in West Africa, famous for its shoe and leather manufacturing.",
      bestTime: "Mondays (Wholesale) & Weekdays",
      access: "Heavy traffic, accessible by tricycle",
      tip: "Wear comfortable walking shoes; the market is massive. Visit the 'Bakassi' line for custom-made shoes."
    },
    {
      id: 2,
      name: "Ahia Ohuru (New Market)",
      type: "General Market",
      lga: "Aba South",
      address: "Ngwa Road, Aba",
      goods: "Foodstuffs, Second-hand Clothing",
      verified: true,
      category: "daily",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800",
      desc: "A sprawling market specializing in second-hand clothing (Okrika) and bulk foodstuffs. It serves as a major distribution point for textiles.",
      bestTime: "Early Morning (6 AM - 9 AM)",
      access: "Accessible via Ngwa Road",
      tip: "Go early on 'Bale Opening' days (usually Wednesdays and Fridays) for the best clothing deals."
    },
    {
      id: 3,
      name: "Ekeoha Shopping Center",
      type: "Textile Hub",
      lga: "Aba South",
      address: "Aba-Owerri Road",
      goods: "Fabrics, Electronics, Curtain Materials",
      verified: true,
      category: "specialized",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      desc: "The premier destination for high-quality fabrics, lace, george wrappers, and electronics in Aba.",
      bestTime: "Weekdays 10 AM - 4 PM",
      access: "Paved roads, parking available",
      tip: "This is the best place to source fabrics for weddings and traditional ceremonies."
    },
    {
      id: 4,
      name: "Cemetery Market",
      type: "Food Market",
      lga: "Aba North",
      address: "Cemetery Road, Aba",
      goods: "Bulk Foodstuffs, Provisions",
      verified: true,
      category: "daily",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800",
      desc: "A major hub for bulk provisions, beverages, and household items at wholesale prices.",
      bestTime: "Weekdays",
      access: "Busy, accessible by truck",
      tip: "Ideal for retailers stocking up shops. Prices here are highly competitive."
    },
    {
      id: 11,
      name: "Ubani Ibeku Modern Market",
      type: "Main Market",
      lga: "Umuahia North",
      address: "Ubani, Umuahia",
      goods: "General Goods, Farm Produce",
      verified: true,
      category: "daily",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800",
      desc: "The relocated main market of the capital city. Spacious and organized, offering everything from fresh produce to plastics.",
      bestTime: "Daily 8 AM - 6 PM",
      access: "Located on city outskirts, shuttles available",
      tip: "Prices for farm produce are cheapest in the early hours of the morning."
    },
    {
      id: 20,
      name: "Lokpanta Cattle Market",
      type: "Livestock Hub",
      lga: "Umunneochi",
      address: "Enugu-PH Expressway",
      goods: "Cattle, Goats, Northern Produce",
      verified: true,
      category: "specialized",
      image: "https://images.unsplash.com/photo-1596733430204-f7a4d66fd232?q=80&w=800",
      desc: "The largest livestock market in the South-East. It serves as the major distribution point for cattle and goats in the region.",
      bestTime: "Daily",
      access: "Highway location",
      tip: "Best prices for livestock, but be prepared for the smell and rustic environment."
    }
  ];

  useEffect(() => {
    const uniqueLgas = [...new Set(marketData.map(item => item.lga))].sort();
    setLgas(uniqueLgas);
  }, []);

  const filteredData = marketData.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.goods.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLga = lgaFilter === '' || item.lga === lgaFilter;
    return matchesSearch && matchesLga;
  });

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'international': return 'bg-orange-100 text-orange-800';
      case 'specialized': return 'bg-blue-100 text-blue-800';
      case 'local': return 'bg-green-100 text-green-800';
      case 'daily': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
      <header className="relative bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-32 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight drop-shadow-md">
            Markets & Trade Centers in Abia
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif mb-8 drop-shadow-md opacity-90">
            Discover the commercial heartbeat of the state. From the bustling Ariaria International to local foodstuff markets and timber sheds.
          </p>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 sticky top-20 p-3 z-40 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-search text-gray-500 group-focus-within:text-orange-600 transition-colors"></i>
              </div>
              <input
                type="text"
                placeholder="Search for textiles, electronics, timber, or market name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:text-lg font-serif transition-colors shadow-sm text-gray-900 dark:text-white"
              />
            </div>

            <div className="relative md:w-1/3 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-geo-alt text-gray-500 group-focus-within:text-orange-600 transition-colors"></i>
              </div>
              <select
                value={lgaFilter}
                onChange={(e) => setLgaFilter(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:text-lg font-serif appearance-none cursor-pointer transition-colors shadow-sm text-gray-900 dark:text-white"
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
              {filteredData.length === 0 ? 'No markets found' : `Showing ${filteredData.length} market${filteredData.length === 1 ? '' : 's'}`}
            </p>
            {(searchQuery || lgaFilter) && (
              <button
                onClick={() => { setSearchQuery(''); setLgaFilter(''); }}
                className="text-sm text-orange-600 hover:text-orange-700 hover:underline font-serif"
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
            {filteredData.map((market, idx) => (
              <div
                key={market.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0 shadow-sm hover:shadow-lg hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between animate-fade-up overflow-hidden rounded-md"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div>
                  <div className="h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 relative group">
                    <img src={market.image} alt={market.name} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-5">
                      <span className={`${getBadgeStyles(market.category)} text-lg font-bold px-3 py-1 rounded uppercase tracking-wide font-serif`}>
                        {market.type}
                      </span>
                      {market.verified && (
                        <div className="bg-gray-50 dark:bg-gray-700 p-1.5 rounded-full">
                          <i className="bi bi-patch-check-fill text-orange-500 text-lg" title="Verified"></i>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight hover:text-orange-600 transition-colors cursor-pointer hover:underline decoration-orange-600 underline-offset-4">
                      {market.name}
                    </h3>

                    <p className="text-lg font-medium text-orange-600 font-serif mb-4 flex items-center gap-2">
                      <i className="bi bi-tags-fill"></i> {market.goods}
                    </p>

                    <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300 font-serif mt-4">
                      <p className="flex items-start gap-2">
                        <i className="bi bi-geo-alt mt-0.5 text-gray-500"></i>
                        <span>{market.address}, <strong>{market.lga}</strong></span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex gap-4 font-serif border-t border-transparent">
                  <button
                    onClick={() => setSelectedMarket(market)}
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-md text-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    View Guide
                  </button>
                  <button className="px-3 py-2 border border-gray-500 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-orange-600 transition-colors" title="Locate on Map">
                    <i className="bi bi-map-fill"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-5">
                <i className="bi bi-shop-window text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">No markets found</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2 font-serif">Try searching for "Timber", "Stockfish", or "Aba".</p>
            </div>
          )}
        </div>
      </main>

      {/* Modal / Guide Overlay */}
      {selectedMarket && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMarket(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative animate-modal-pop font-serif"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMarket(null)}
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 rounded-full p-2 shadow hover:bg-red-50 dark:hover:bg-red-900 text-red-600 z-10 transition"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="h-64 overflow-hidden relative group">
              <img src={selectedMarket.image} alt={selectedMarket.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-green-600 text-white text-xs px-3 py-1.5 rounded uppercase tracking-wider font-bold shadow-sm">
                {selectedMarket.category}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{selectedMarket.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 border-l-4 border-orange-600 pl-4 text-lg">{selectedMarket.desc}</p>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-inner">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">Market Intelligence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-lg">
                  <div>
                    <p className="text-xs text-green-600 font-bold uppercase mb-1"><i className="bi bi-geo-alt-fill mr-1"></i> Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedMarket.address}, {selectedMarket.lga}</p>
                  </div>
                  <div>
                    <p className="text-xs text-green-600 font-bold uppercase mb-1"><i className="bi bi-tags-fill mr-1"></i> Primary Goods</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedMarket.goods}</p>
                  </div>
                  <div>
                    <p className="text-xs text-green-600 font-bold uppercase mb-1"><i className="bi bi-clock-fill mr-1"></i> Best Day/Time</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedMarket.bestTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-green-600 font-bold uppercase mb-1"><i className="bi bi-bus-front-fill mr-1"></i> Accessibility</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedMarket.access}</p>
                  </div>
                </div>

                <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 rounded-lg p-4 flex items-start">
                  <span className="text-xl mr-3">💡</span>
                  <div>
                    <p className="text-xs font-bold text-orange-800 dark:text-orange-400 uppercase mb-1">PRO TIP:</p>
                    <p className="text-base text-orange-900 dark:text-orange-200 leading-snug">{selectedMarket.tip}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedMarket(null)}
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
