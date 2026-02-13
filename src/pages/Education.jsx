import { useState, useEffect } from 'react';

export default function Education() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lgaFilter, setLgaFilter] = useState('');
  const [lgas, setLgas] = useState([]);

  const educationData = [
    {
      id: 1,
      name: "Michael Okpara University (MOUAU)",
      type: "Federal University",
      lga: "Ikwuano",
      address: "Umudike, Ikwuano",
      focus: "Agriculture & Technology",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800"
    },
    {
      id: 2,
      name: "Abia State University (ABSU)",
      type: "State University",
      lga: "Uturu",
      address: "Uturu, Isuikwuato",
      focus: "Arts, Science & Law",
      verified: true,
      category: "tertiary",
      website: "https://absu.edu.ng",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800"
    },
    {
      id: 3,
      name: "Abia State Polytechnic",
      type: "Polytechnic",
      lga: "Aba North",
      address: "Aba-Owerri Road, Aba",
      focus: "Technology & Business",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
    },
    {
      id: 4,
      name: "Gregory University",
      type: "Private University",
      lga: "Uturu",
      address: "Uturu",
      focus: "Entrepreneurship",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800"
    },
    {
      id: 5,
      name: "Rhema University",
      type: "Private University",
      lga: "Aba South",
      address: "Aba-Owerri Road",
      focus: "Christian Excellence",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800"
    },
    {
      id: 6,
      name: "Clifford University",
      type: "Private University",
      lga: "Isiala Ngwa South",
      address: "Owerrinta",
      focus: "Adventist Education",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=800"
    },
    {
      id: 7,
      name: "Abia State College of Health",
      type: "College",
      lga: "Aba South",
      address: "Aba",
      focus: "Health Sciences",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800"
    },
    {
      id: 8,
      name: "Abia State College of Education",
      type: "College",
      lga: "Arochukwu",
      address: "Arochukwu Technical",
      focus: "Teacher Training",
      verified: true,
      category: "tertiary",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800"
    },
    {
      id: 9,
      name: "Government College Umuahia",
      type: "Secondary School",
      lga: "Umuahia North",
      address: "Ikot Ekpene Road",
      focus: "Boys Boarding School",
      verified: true,
      category: "secondary",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800"
    },
    {
      id: 10,
      name: "Dority International School",
      type: "Private School",
      lga: "Aba South",
      address: "Umungasi, Aba",
      focus: "Early Childhood & High School",
      verified: true,
      category: "secondary",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
    },
    {
      id: 11,
      name: "Federal Government College Ohafia",
      type: "Federal College",
      lga: "Ohafia",
      address: "Ohafia Town",
      focus: "Unity School",
      verified: true,
      category: "secondary",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800"
    },
    // Adding more from legacy file...
    {
      id: 21,
      name: "National Root Crops Research",
      type: "Research Institute",
      lga: "Ikwuano",
      address: "Umudike",
      focus: "Agricultural Innovation",
      verified: true,
      category: "research",
      image: "https://images.unsplash.com/photo-1600336153113-d66c79de3e91?q=80&w=800"
    },
    {
      id: 22,
      name: "Abia State Library Board",
      type: "Public Library",
      lga: "Umuahia North",
      address: "Umuahia Central",
      focus: "Public Access & Reading",
      verified: true,
      category: "library",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800"
    }
  ];

  useEffect(() => {
    const uniqueLgas = [...new Set(educationData.map(item => item.lga))].sort();
    setLgas(uniqueLgas);
  }, []);

  const filteredData = educationData.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLga = lgaFilter === '' || item.lga === lgaFilter;
    return matchesSearch && matchesLga;
  });

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'tertiary': return 'bg-blue-100 text-blue-800';
      case 'secondary': return 'bg-green-100 text-green-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      case 'library': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
      <header className="relative bg-gray-900 border-b border-gray-200 dark:border-gray-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
            alt="Education in Abia"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight drop-shadow-md">
            Education & Schools in Abia
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-serif mb-8 drop-shadow-md opacity-90">
            Empowering the future. Explore top-tier universities, historic secondary schools, and learning centers across the state.
          </p>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 sticky top-20 p-3 z-40 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="bi bi-search text-gray-500 group-focus-within:text-green-600 transition-colors"></i>
              </div>
              <input
                type="text"
                placeholder="Search by school name, level, or location..."
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
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="bi bi-chevron-down text-gray-500"></i>
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-lg text-gray-900 dark:text-gray-300 font-serif">
              {filteredData.length === 0 ? 'No schools found' : `Showing ${filteredData.length} institution${filteredData.length === 1 ? '' : 's'}`}
            </p>
            {(searchQuery || lgaFilter) && (
              <button
                onClick={() => { setSearchQuery(''); setLgaFilter(''); }}
                className="text-sm text-green-600 hover:text-green-700 hover:underline font-serif"
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
                          <i className="bi bi-patch-check-fill text-green-600 text-lg" title="Accredited/Verified"></i>
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight hover:text-green-600 transition-colors cursor-pointer hover:underline decoration-green-600 underline-offset-4">
                      {place.name}
                    </h3>

                    <p className="text-lg font-medium text-green-600 font-serif mb-4 flex items-center gap-2">
                      <i className="bi bi-mortarboard-fill"></i> {place.focus}
                    </p>

                    <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300 font-serif mt-4">
                      <p className="flex items-start gap-2">
                        <i className="bi bi-geo-alt mt-0.5 text-gray-500"></i>
                        <span>{place.address}, <strong>{place.lga}</strong></span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-4 font-serif border-t border-transparent">
                  <button className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 rounded-md text-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                  {place.website && (
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white py-2 rounded-md text-lg font-bold hover:bg-green-700 transition-colors text-center"
                    >
                      Visit Website
                    </a>
                  )}
                  <button className="px-3 py-2 border border-gray-500 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-600 transition-colors" title="Locate on Map">
                    <i className="bi bi-map-fill"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-5">
                <i className="bi bi-mortarboard text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">No schools found</h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2 font-serif">Try searching for "University", "College", or "Umuahia".</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
