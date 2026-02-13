import { useState } from 'react';

export default function Business() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    terms: false
  });
  const [showError, setShowError] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    if (!formData.terms) {
      e.preventDefault();
      setShowError(true);
      return;
    }
    // Handle submission logic here
    alert('Business submitted for review! (Demo)');
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    alert('Subscribed – demo');
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased overflow-x-hidden transition-colors duration-200">
      {/* Informational Header Section from business-economy.html */}
      <section className="w-full mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="w-full bg-gray-800 text-white py-20 md:py-32 rounded-sm flex flex-col items-center text-center px-4 animate-fade-up bg-cover bg-center bg-no-repeat bg-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
              Business & Economy
            </h1>
            <p className="text-base sm:text-xl max-w-3xl mb-6 sm:mb-8 opacity-90 drop-shadow-sm">
              Discover investment opportunities, trade markets, and resources used to power Abia's growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-white text-gray-900 px-6 py-3 sm:px-5 sm:py-4 hover:bg-black hover:text-white text-base font-semibold sm:text-lg rounded-md btn-transition shadow-lg">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section from business-economy.html */}
      <section className="w-full mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-12">
            {[
              {
                title: "Investment Opportunities",
                img: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1000&auto=format&fit=crop",
                text: "Abia State creates an enabling environment for investors. From real estate to technology hubs, discover high-yield sectors ripe for development."
              },
              {
                title: "Agriculture & Industries",
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
                text: "With fertile land and a booming industrial sector, Abia is the manufacturing hub of the region. Explore agricultural processing and factory zones.",
                reverse: true
              },
              {
                title: "Trade & Markets",
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
                text: "Home to some of West Africa's largest markets. Connect with traders, distributors, and suppliers in Aba and beyond."
              },
              {
                title: "SMEs & Entrepreneurship",
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
                text: "Supporting the backbone of our economy. Access grants, training programs, and resources designed to help small businesses thrive.",
                reverse: true
              },
              {
                title: "Taxes & Revenue",
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
                text: "Transparent tax systems to build a better state. Pay your taxes easily online and understand your contributions to development."
              }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center border border-black dark:border-gray-700 card-hover animate-fade-up`}>
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{item.text}</p>
                  <button className="border border-black dark:border-white px-6 py-3 rounded-md text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form Section from Business-sector.html */}
      <main className="pt-24 pb-16 transition-all duration-300 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 md:p-10 mb-8 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-lg font-bold mb-2">Grow</p>
                <h1 className="text-2xl md:text-5xl font-bold mt-3">List your business on My Abia</h1>
                <p className="mt-3 text-base md:text-xl text-gray-900 dark:text-gray-300">
                  Join thousands of local businesses and reach customers across Abia State. Create a verified listing in minutes.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#business-form" className="inline-flex items-center justify-center rounded-lg text-lg bg-green-600 text-white px-6 py-3 shadow hover:bg-green-500 hover:scale-105 transition-all duration-300">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-80 lg:w-96">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" alt="Local business" className="w-full h-48 sm:h-60 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </section>

          <section id="business-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-mt-24">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium mb-2 text-lg">Business name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-base font-medium mb-2 text-lg">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-base font-medium mb-2 text-lg">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-base font-medium mb-2 text-lg">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                    placeholder="Tell customers what you do..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      id="agree"
                      name="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-green-600 rounded transition duration-200"
                    />
                    <label htmlFor="agree" className="font-medium text-sm">I agree to the terms</label>
                  </div>

                  <div className="sm:ml-auto">
                    <button type="submit" className="px-6 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-500 active:scale-95 transition-transform duration-150">
                      Submit Business
                    </button>
                  </div>
                </div>

                {showError && !formData.terms && (
                  <p className="text-sm text-red-500">You must agree to the terms to submit.</p>
                )}
              </form>
            </div>

            <aside className="bg-linear-to-b from-blue-50 via-white to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 rounded-full bg-blue-100 dark:bg-blue-900 p-3 animate-pulse">
                    <i className="bi bi-bell text-blue-700 dark:text-blue-300 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Stay connected</h3>
                    <p className="mt-3 text-lg text-gray-900 dark:text-gray-300">
                      Get notified when new opportunities and resources are posted.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleSubscribe}
                    className="w-full px-4 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-500 active:scale-95 transition-all duration-200"
                  >
                    Subscribe
                  </button>
                  <button className="w-full inline-flex items-center justify-center px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg text-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                    Learn more
                  </button>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">No spam · You can unsubscribe at any time.</p>
            </aside>
          </section>
        </div>
      </main>
    </div>
  );
}
