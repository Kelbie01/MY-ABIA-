import { useState, useEffect } from 'react';

export default function Restaurants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lgaFilter, setLgaFilter] = useState('');
  const [lgas, setLgas] = useState([]);

  const restaurantData = [
    {
      id: 1,
      name: "De Choice Fast Food",
      type: "Fast Food",
      lga: "Umuahia North",
      address: "Okpara Square / Mission Hill",
      cuisine: "Continental & Local Dishes",
      verified: true,
      category: "fast-food",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800"
    },
    {
      id: 2,
      name: "Kilimanjaro",
      type: "Fast Food",
      lga: "Umuahia North",
      address: "Aba Road, Umuahia",
      cuisine: "Rice, Pasta, Pastries",
      verified: true,
      category: "fast-food",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
    },
    {
      id: 3,
      name: "Bubbles Food Chain",
      type: "Fast Food",
      lga: "Umuahia North",
      address: "Library Avenue",
      cuisine: "African & Continental",
      verified: true,
      category: "fast-food",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
    },
    {
      id: 4,
      name: "Roots Restaurant & Cafe",
      type: "Fine Dining",
      lga: "Umuahia North",
      address: "Bende Road",
      cuisine: "Exquisite Dining & Cocktails",
      verified: true,
      category: "fine-dining",
      image: "https://i.pinimg.com/1200x/19/42/2a/19422a713f31eced901a71a0a4584086.jpg"
    },
    {
      id: 5,
      name: "Apples Fast Food",
      type: "Fast Food",
      lga: "Umuahia North",
      address: "Aba Road",
      cuisine: "Snacks & Meals",
      verified: false,
      category: "fast-food",
      image: "https://i.pinimg.com/736x/15/c4/ff/15c4ffd6850f5b7ea687233a0e96b977.jpg"
    },
    {
      id: 6,
      name: "Chicken Republic",
      type: "Fast Food",
      lga: "Umuahia North",
      address: "Umuwaya Road",
      cuisine: "Fried Chicken & Chips",
      verified: true,
      category: "fast-food",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800"
    },
    {
      id: 7,
      name: "Crunchies Fried Chicken",
      type: "Fast Food",
      lga: "Aba North",
      address: "Factory Road, Aba",
      cuisine: "Chicken, Rice, Burgers",
      verified: true,
      category: "fast-food",
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800"
    },
    {
      id: 8,
      name: "Jevinik Restaurant",
      type: "Local & Intercontinental",
      lga: "Aba South",
      address: "Aba-Owerri Road",
      cuisine: "Soup Bowls & Swallows",
      verified: true,
      category: "local",
      image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800"
    },
    {
      id: 16,
      name: "Domino's Pizza",
      type: "Fast Food",
      lga: "Umuahia North",
      address: "Bank Road, Umuahia",
      cuisine: "Pizza & Ice Cream",
      verified: true,
      category: "fast-food",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800"
    },
    {
      id: 17,
      name: "Cold Stone Creamery",
      type: "Dessert",
      lga: "Umuahia North",
      address: "Bank Road, Umuahia",
      cuisine: "Ice Cream & Shakes",
      verified: true,
      category: "cafe",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800"
    }
  ];

  useEffect(() => {
    const uniqueLgas = [...new Set(restaurantData.map(item => item.lga))].sort();
    setLgas(uniqueLgas);
  }, []);

  const filteredData = restaurantData.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLga = lgaFilter === '' || item.lga === lgaFilter;
    return matchesSearch && matchesLga;
  });

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'fast-food': return 'bg-red-100 text-red-800';
      case 'fine-dining': return 'bg-purple-100 text-purple-800';
      case 'local': return 'bg-green-100 text-green-800';
      case 'cafe': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
      <header className="relative bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt="Delicious Food"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight drop-shadow-md">
            Restaurants & Fast Food
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif mb-8 drop-shadow-md opacity-90">
            From popular fast food chains to local delicacies. Explore the best places to dine in Umuahia, Aba, and beyond.
          </p>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 sticky top-20 p-3 z-40 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-search text-gray-500 group-focus-within:text-orange-500 transition-colors"></i>
              </div>
              <input
                type="text"
                placeholder="Search by restaurant name, cuisine, or street..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-900 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:text-lg font-serif transition-colors shadow-sm text-gray-900 dark:text-white"
              />
            </div>

            <div className="relative md:w-1/3 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-geo-alt text-gray-500 group-focus-within:text-orange-500 transition-colors"></i>
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
              {filteredData.length === 0 ? 'No restaurants found' : `Showing ${filteredData.length} location${filteredData.length === 1 ? '' : 's'}`}
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
            {filteredData.map((place, idx) => (
              <div
                key={place.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0 shadow-sm hover:shadow-lg hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col justify-between animate-fade-up overflow-hidden rounded-md"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div>
                  <div className="h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 relative group">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-5">
                      <span className={`${getBadgeStyles(place.category)} text-lg font-bold px-3 py-1 rounded uppercase tracking-wide font-serif`}>
                        {place.type}
                      </span>
                      {place.verified && (
                        <div className="bg-gray-50 dark:bg-gray-700 p-1.5 rounded-full">
                          <i className="bi bi-patch-check-fill text-orange-500 text-lg" title="Verified"></i>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight hover:text-orange-600 transition-colors cursor-pointer hover:underline decoration-orange-600 underline-offset-4">
                      {place.name}
                    </h3>

                    <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300 font-serif mt-4">
                      <p className="flex items-start gap-2">
                        <i className="bi bi-geo-alt mt-0.5 text-gray-500"></i>
                        <span>{place.address}, <strong>{place.lga}</strong></span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex gap-4 font-serif border-t border-transparent">
                  <button className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-md text-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                    View Menu
                  </button>
                  <button className="px-3 py-2 border border-gray-500 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-orange-600 transition-colors" title="Get Directions">
                    <i className="bi bi-map-fill"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-5">
                <i className="bi bi-egg-fried text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">No restaurants found</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2 font-serif">Try searching for "Fast Food", "Rice", or "Aba".</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
