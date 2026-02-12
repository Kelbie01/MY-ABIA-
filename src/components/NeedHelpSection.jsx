export default function NeedHelpSection() {
  const helpItems = [
    { icon: "bi-hospital", color: "text-green-600", bg: "bg-green-100", title: "Nearby Hospitals", desc: "Find hospitals and clinics close to you.", action: "Get directions" },
    { icon: "bi-wrench", color: "text-yellow-600", bg: "bg-yellow-100", title: "Roadside Assistance", desc: "Help for vehicle breakdowns and accidents.", action: "Request help" },
    { icon: "bi-heart", color: "text-pink-600", bg: "bg-pink-100", title: "Mental Health Support", desc: "Confidential counselling and crisis lines.", action: "Get support" },
    { icon: "bi-people", color: "text-blue-600", bg: "bg-blue-100", title: "Volunteer Services", desc: "Connect with local volunteers and community groups.", action: "Join now" }
  ];

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 animate-fade-up">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Need more help?</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Quick links and services to get assistance fast.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpItems.map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-900 border border-black dark:border-gray-600 rounded hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-3 ${item.bg} rounded ${item.color}`}><i className={`bi ${item.icon} text-2xl`}></i></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">{item.desc}</p>
                  <button className="mt-4 inline-block text-sm font-semibold transition-colors border border-black dark:border-white px-4 py-2 rounded hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                    {item.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
