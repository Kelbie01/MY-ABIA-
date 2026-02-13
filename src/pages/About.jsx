import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [ancientIndex, setAncientIndex] = useState(0);
  const [modernIndex, setModernIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const ancientImages = [
    "https://i.pinimg.com/736x/16/10/71/161071a39675e6b7157391e29f2e37d7.jpg",
    "https://i.pinimg.com/736x/9f/f3/d4/9ff3d48362efd0d9cd35de4bb7d97629.jpg",
    "https://i.pinimg.com/736x/41/e2/13/41e213fed033d289252d9e762e4cf815.jpg",
    "https://i.pinimg.com/736x/15/72/aa/1572aac3a706988c2aa8f4be3049606f.jpg",
    "https://i.pinimg.com/1200x/19/bf/67/19bf67ee104866e0d0c032ef5cdb0369.jpg"
  ];

  const modernImages = [
    "/images/aba_road_rehabilitation.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zSLw81MedP4RSaQz7-4Ls6o2ub-JBTnXrg&s",
    "https://independent.ng/wp-content/uploads/One-of-the-shoe-factories-in-Aba.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSl7SAD7mHFgiatXj3hSqMjk49cuJClj6GgQ&s",
    "https://i.pinimg.com/736x/92/1d/9e/921d9ede0c07b3b6989b43515bab8f1e.jpg"
  ];

  const teamMembers = [
    { name: "Nwabam Solomon", role: "Founder and Developer", img: "/images/solo.jpg" },
    { name: "Irolewe Laughter", role: "Frontend Developer", img: "/images/Laughter.jpg" },
    { name: "Gabriel Herald", role: "Frontend Developer", img: "/images/Gabriel herald.jpg" },
    { name: "Shedrack Everest", role: "Frontend Developer", img: "/images/shedrrack everest.jpg" },
    { name: "Gabriel Destiny", role: "Frontend Developer", img: "/images/Gabriel destiny.jpg" },
    { name: "Emmanuel Chidiebube", role: "Frontend Developer", img: "/images/Emma fx.jpg" },
    { name: "James Ochiabuto", role: "Frontend Developer", img: "/images/Oga james.jpg" },
    { name: "Chigozie David", role: "Frontend Developer", img: "/images/chigozie.jpg" }
  ];

  useEffect(() => {
    const ancientInterval = setInterval(() => {
      setAncientIndex((prev) => (prev + 1) % ancientImages.length);
    }, 4000);
    const modernInterval = setInterval(() => {
      setModernIndex((prev) => (prev + 1) % modernImages.length);
    }, 4500);

    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(ancientInterval);
      clearInterval(modernInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const teamInterval = setInterval(() => {
      setTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(teamInterval);
  }, [isMobile]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased overflow-x-hidden transition-colors duration-200">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16 text-center max-w-4xl md:mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mt-10">About My Abia</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Connecting Abia State through a simple, honest directory of local businesses and essential services.
        </p>
      </section>

      {/* Heritage Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-10 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-lg font-bold text-green-600 mb-2 block tracking-wider uppercase">Our Heritage & Future</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">The Story of "God&apos;s Own State"</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From the historic strength of the Aro Confederacy to the bustling innovation of modern Aba, Abia State is a land of resilient people, rich culture, and rapid progress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Ancient Facts */}
          <div className="bg-stone-50 dark:bg-gray-800 rounded-2xl p-8 border border-stone-200 dark:border-gray-700 animate-fade-up shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full mb-8 rounded-xl overflow-hidden shadow-md group bg-gray-200 dark:bg-gray-700">
              {ancientImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Ancient Roots ${idx}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === ancientIndex ? 'opacity-100' : 'opacity-0'} sepia-[.20]`}
                  onError={(e) => { e.target.src = "https://i.pinimg.com/736x/74/fb/df/74fbdf953da1c24d74fb0d22b1b6ac4e.jpg" }}
                />
              ))}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-1 rounded text-sm font-bold shadow-sm text-stone-800 dark:text-stone-200 z-20">
                Ancient Roots
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-stone-800 dark:text-stone-200">
              <i className="fa-solid fa-hourglass-half text-stone-600 dark:text-stone-400"></i> Ancient History
            </h3>

            <ul className="space-y-6">
              {[
                { title: "The Aro Confederacy", text: "Historically, the region was part of the powerful Aro Confederacy, a dominant Igbo trading and spiritual union that influenced much of pre-colonial Eastern Nigeria." },
                { title: "The Women&apos;s War of 1929", text: "The famous Aba Women&apos;s Riot, a massive anti-colonial protest led by rural women, began here (Oloko), marking a pivotal moment in Nigeria&apos;s fight for justice." },
                { title: "Akwete Weaving", text: "The unique Akwete cloth, hand-woven by the women of Ukwa East, remains a symbol of indigenous craftsmanship and cultural identity." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 dark:bg-gray-700 flex items-center justify-center text-stone-700 dark:text-stone-300 font-bold">{idx + 1}</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-700 dark:text-gray-400 mt-1">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Modern Facts */}
          <div className="bg-green-50 dark:bg-gray-800 rounded-2xl p-8 border border-green-200 dark:border-gray-700 animate-fade-up shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 w-full mb-8 rounded-xl overflow-hidden shadow-md group bg-gray-200 dark:bg-gray-700">
              {modernImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Modern Era ${idx}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === modernIndex ? 'opacity-100' : 'opacity-0'}`}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542385151-efd9000d63f2?w=800&q=80" }}
                />
              ))}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-1 rounded text-sm font-bold shadow-sm text-green-700 dark:text-green-400 z-20">
                Modern Era
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-green-900 dark:text-green-200">
              <i className="fa-solid fa-rocket text-green-600"></i> Modern Development
            </h3>

            <ul className="space-y-6">
              {[
                { title: "Creation & Identity", text: "Created on August 27, 1991, Abia is known as \"God&apos;s Own State\". It is a key oil-producing state and a commercial powerhouse in the region." },
                { title: "The \"China of Africa\"", text: "Aba, the commercial nerve center, is renowned for its ingenuity in manufacturing, shoes, and textiles, earning it the reputation as the \"China of Africa\"." },
                { title: "The New Abia", text: "Under the leadership of Governor Dr. Alex Otti, the state is undergoing massive infrastructure renewal, geometric power integration, and urban modernization." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-200 dark:bg-gray-700 flex items-center justify-center text-green-700 dark:text-green-300 font-bold">{idx + 1}</span>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-700 dark:text-gray-400 mt-1">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Anthem Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-lg font-bold text-green-600 mb-2 block tracking-wider uppercase">Our Song</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Abia State Anthem</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
            {/* English Version */}
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden group animate-fade-up">
              <div className="absolute top-0 left-0 w-full h-2 bg-green-600"></div>
              <h3 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-400">English Version</h3>
              <p className="text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300 italic">
                &quot;The land of grace and faith,<br />
                That&apos;s Abia God&apos;s own state,<br />
                The home of trade and enterprise,<br />
                Alfa state we hail.<br /><br />
                We shall walk the top to tarry on top,<br />
                Abia must be great,<br />
                On equity we stand, together we can,<br />
                God bless Abia!&quot;
              </p>
            </div>

            {/* Igbo Version */}
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden group animate-fade-up">
              <div className="absolute top-0 left-0 w-full h-2 bg-black dark:bg-gray-600"></div>
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-gray-200">Igbo Version</h3>
              <p className="text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300 italic">
                &quot;Ala Agoziri Obodo Chukwu ka Abia bu<br />
                Obodo Ahia na Oru aka<br />
                Steeti mbu Ekere<br />
                Anyi ga Arusi oru ike,<br /><br />
                I bu Ndi Mbu<br />
                Abia ga adi Ukwu<br />
                Egbe bere ugo bere, Igwe bu ike<br />
                Chukwu gozie Abia.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2 block">Purpose</span>
          <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Why we built this</h2>
          <p className="text-gray-700 dark:text-gray-400 text-xl mt-3">Abia needed a place where businesses and people could find each other.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "fa-store", title: "Local Business", text: "Small shops gain the visibility they deserve in their own state." },
            { icon: "fa-wheelchair", title: "Accessible", text: "No more searching blindly for what you need in Abia." },
            { icon: "fa-bullhorn", title: "Government", text: "We connect citizens to official announcements and resources." },
            { icon: "fa-shield-halved", title: "Community Trust", text: "Every listing is verified so you know who you&apos;re dealing with." }
          ].map((item, idx) => (
            <div key={idx} className="border border-gray-200 dark:border-gray-700 p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 flex flex-col justify-between min-h-[300px]">
              <div>
                <i className={`fa-solid ${item.icon} text-3xl mb-6 text-green-600`}></i>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-lg">{item.text}</p>
              </div>
              <Link to="/browser" className="text-lg font-bold flex items-center gap-1 mt-6 text-green-600 hover:text-green-700">
                Explore <i className="fa-solid fa-chevron-right text-xs"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <span className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-3 block">People</span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our team</h2>
            <p className="text-gray-700 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Built by people who know Abia and believe in its potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className={`team-card flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all ${isMobile && idx !== teamIndex ? 'hidden' : 'flex'}`}>
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-green-600 font-semibold">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4 text-gray-600 dark:text-gray-400">
                  <a href="#" className="hover:text-green-600"><i className="fa-brands fa-linkedin text-xl"></i></a>
                  <a href="#" className="hover:text-green-600"><i className="fa-brands fa-twitter text-xl"></i></a>
                  <a href="#" className="hover:text-green-600"><i className="fa-brands fa-github text-xl"></i></a>
                </div>
              </div>
            ))}
          </div>

          {isMobile && (
            <div className="flex justify-center gap-2 mt-8">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTeamIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === teamIndex ? 'bg-green-600 scale-125' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto max-w-7xl px-6 py-20 border-t border-gray-100 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2 block">Reach</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get in touch</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-10 text-lg">We&apos;re here to listen and help you connect with Abia.</p>

            <div className="space-y-8">
              {[
                { icon: "fa-envelope", title: "Email", text: "Send us a message anytime", link: "mailto:hello@myabia.ng", linkText: "hello@myabia.ng" },
                { icon: "fa-phone", title: "Phone", text: "Call during business hours", link: "tel:+2348034567890", linkText: "+234 (803) 456-7890" },
                { icon: "fa-location-dot", title: "Office", text: "123 Commerce Avenue, Umuahia Abia State Nigeria", link: "#", linkText: "View on map" }
              ].map((item, idx) => (
                <div key={idx}>
                  <i className={`fa-regular ${item.icon} text-xl mb-2 block text-green-600`}></i>
                  <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-lg">{item.text}</p>
                  <a href={item.link} className="text-lg underline text-gray-700 dark:text-gray-300 hover:text-green-600">{item.linkText}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-96 md:h-auto shadow-inner">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63558.18824838645!2d7.454296766467268!3d5.526938995345759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042c48b04975551%3A0xc391e4f4838dc86!2sUmuahia%2C%20Abia!5e0!3m2!1sen!2sng!4v1716300000000!5m2!1sen!2sng"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Message Form */}
      <section className="container mx-auto max-w-7xl px-6 py-20 mb-20 bg-gray-50 dark:bg-gray-800/30 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-lg font-bold text-gray-500 mb-2 block">Connect</span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Send us a message</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg">Tell us what&apos;s on your mind or how we can help.</p>

            <div className="space-y-4 text-lg font-medium text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3"><i className="fa-regular fa-envelope w-5 text-green-600"></i> hello@myabia.ng</div>
              <div className="flex items-center gap-3"><i className="fa-solid fa-phone w-5 text-green-600"></i> +234 (803) 456-7890</div>
              <div className="flex items-center gap-3"><i className="fa-solid fa-location-dot w-5 text-green-600"></i> 123 Commerce Avenue</div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">First name</label>
                  <input type="text" className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition" />
                </div>
                <div>
                  <label className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">Last name</label>
                  <input type="text" className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">Email</label>
                  <input type="email" className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition" />
                </div>
                <div>
                  <label className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">Phone number</label>
                  <input type="tel" className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition" />
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">What can we help with?</label>
                <select className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition">
                  <option>Select a topic</option>
                  <option>Registration</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-bold mb-2 text-gray-900 dark:text-white">Message</label>
                <textarea rows="5" className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded focus:outline-none focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition" placeholder="Tell us more"></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="w-4 h-4 text-green-600" />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">I agree to the terms of service</label>
              </div>

              <button type="button" className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded font-bold hover:bg-green-700 transition">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
