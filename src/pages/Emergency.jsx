import { motion } from 'framer-motion';

export default function Emergency() {
  const emergencyServices = [
    {
      title: "Police",
      icon: "bi-shield-check",
      color: "text-blue-600",
      borderColor: "border-blue-600",
      bgClass: "bg-blue-600", // For button
      img: "https://i.pinimg.com/736x/8e/77/5b/8e775b3fc8ff6aeb7d86bb0ec5158281.jpg",
      desc: "Reach the police when danger calls. Day or night, they answer. Have the number ready before trouble finds you."
    },
    {
      title: "Fire Service",
      icon: "bi-fire",
      color: "text-orange-600",
      borderColor: "border-orange-600",
      bgClass: "bg-orange-600",
      img: "https://i.pinimg.com/736x/b8/41/1d/b8411dd45d693d1ab3969396791b61ec.jpg",
      desc: "Fire service stands ready around the clock. When flames rise and time runs short, one call brings them fast."
    },
    {
      title: "Ambulance",
      icon: "bi-heart-pulse",
      color: "text-red-600",
      borderColor: "border-red-600",
      bgClass: "bg-red-600",
      img: "https://i.pinimg.com/1200x/48/fd/dd/48fddddccfdec3faae8c4269f78ea149.jpg",
      desc: "Medical help arrives when you call. They come fast when someone needs saving. Have the number ready."
    }
  ];

  const moreServices = [
    { icon: "bi-shield-check", color: "text-blue-500", title: "Road Safety", desc: "Assistance for accidents and vehicle emergencies on the road." },
    { icon: "bi-heart-fill", color: "text-pink-500", title: "Women's Support", desc: "Confidential support and assistance available 24/7 for women." },
    { icon: "bi-exclamation-triangle", color: "text-orange-500", title: "Disaster Response", desc: "Emergency coordination during floods and natural disasters." },
    { icon: "bi-leaf", color: "text-green-500", title: "Environment", desc: "Report sanitation issues and environmental hazards." }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full py-32 md:py-40 bg-cover bg-center bg-no-repeat bg-gray-800 bg-blend-overlay"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/75/72/b0/7572b0d0c4ac9b66f884b6b9cf024a32.jpg')" }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-5 text-white mt-10 drop-shadow-lg"
          >
            Emergency Contacts Matter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-2xl text-gray-200 drop-shadow-md"
          >
            Keep these numbers close when seconds count and help is needed now.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-4 py-20 mt-16 w-full bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="shadow-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-gray-500 hover:shadow-2xl transition duration-300 rounded-lg flex flex-col"
              >
                <div className={`border-t-4 ${service.borderColor}`}></div>
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <i className={`bi ${service.icon} text-4xl ${service.color}`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">{service.desc}</p>
                  <div className="flex flex-col gap-4 mt-auto">
                    <button className={`${service.bgClass} text-white text-lg font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition duration-300 w-full flex items-center justify-center gap-2`}>
                      <i className="bi bi-telephone-fill"></i> Call Now
                    </button>
                    <button className={`${service.color} text-lg hover:underline transition flex items-center justify-center gap-2 font-bold bg-transparent border-none`}>
                      Learn More <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Services */}
      <section className="px-4 py-16 w-full bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-600 dark:text-green-400 font-bold mb-2 text-lg uppercase tracking-wide">More Services</p>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-5 mt-3 text-gray-900 dark:text-white">Other numbers you need</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl">Keep these close for when trouble finds you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6">
            {moreServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg shadow-md p-8 bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300 h-full border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4">
                  <i className={`bi ${item.icon} text-3xl ${item.color}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-5">{item.desc}</p>
                <button className={`text-lg hover:opacity-80 transition flex items-center gap-2 font-bold bg-transparent border-none ${item.color.replace('500', '600')}`}>
                  Learn More <i className="bi bi-chevron-right text-sm"></i>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-24 w-full bg-gradient-to-r from-green-700 to-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Help us keep this current</h2>
          <p className="text-base sm:text-xl text-green-50 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Found an outdated number or a contact missing? Let us know and we will update it immediately to help the community.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition duration-300 flex items-center justify-center gap-2 shadow-lg">
              <i className="bi bi-check-circle-fill"></i> Submit Update
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-green-800 transition duration-300 flex items-center justify-center gap-2">
              <i className="bi bi-info-circle"></i> Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
