import HeroSection from '../components/HeroSection';
import InfoCard from '../components/InfoCard';
import AnnouncementCard from '../components/AnnouncementCard';
import EmergencySection from '../components/EmergencySection';
import NeedHelpSection from '../components/NeedHelpSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Browse Section */}
      <section className="w-full mt-40 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-900 dark:text-gray-300">Browse</p>
            <h2 id="browser" className="text-5xl font-bold mt-3 text-gray-900 dark:text-white">What you need in Abia</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mt-5">
              Find doctors, schools, markets, food, businesses, and government offices
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-5 mx-auto">
            {/* Health Card - Large Left */}
            <div className="w-full lg:w-1/3">
              <Link to="/health" className="block h-full">
                <div className="h-full border border-black dark:border-gray-700 overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                  <div className="h-64 w-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800" alt="Hospitals" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-5 pt-5 pb-5 flex-grow">
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-300 mt-5">Health</p>
                    <h3 className="text-2xl font-bold mt-3 text-gray-900 dark:text-white">Hospitals and clinics</h3>
                    <p className="mt-3 text-xl text-gray-900 dark:text-gray-300">Access quality medical care and healthcare services across Abia State. Find hospitals, clinics, and specialists near you.</p>
                    <div className="mt-7 mb-0">
                      <button className="border border-black dark:border-white px-6 py-4 rounded text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-gray-900 dark:text-white">View</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Column Grid */}
            <div className="flex flex-col w-full lg:w-2/3 gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                  <InfoCard
                    title="Education"
                    subtitle="Learning"
                    description="Schools and training centers"
                    image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800"
                    link="/education"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <InfoCard
                    title="Markets"
                    subtitle="Trade"
                    description="Trading posts and vendors"
                    image="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800"
                    link="/markets"
                  />
                </div>
              </div>

              <InfoCard
                title="Restaurants and food vendors"
                subtitle="Food"
                description="Discover local dining and food services"
                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800"
                fullWidth={true}
                link="/restaurants"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="w-full py-20 bg-white dark:bg-gray-900 mt-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold text-gray-900 dark:text-gray-300">Updates</p>
          <h2 className="text-5xl font-bold mt-3 text-gray-900 dark:text-white">Latest announcements</h2>
          <p className="text-gray-700 dark:text-gray-400 text-lg mt-4">
            Stay informed on government news and important notices
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/announcements">
              <button className="border border-black dark:border-white p-5 rounded text-lg font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-gray-900 dark:text-white">View all</button>
            </Link>
            <button className="text-lg font-bold p-5 text-gray-900 dark:text-white">Government</button>
            <button className="text-lg font-bold p-5 text-gray-900 dark:text-white">Education</button>
            <button className="text-lg font-bold p-5 text-gray-900 dark:text-white">Health</button>
            <button className="text-lg font-bold p-5 text-gray-900 dark:text-white">Commerce</button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnnouncementCard
            tag="Government"
            readTime="2 min read"
            title="New civil service recruitment begins next month"
            excerpt="Applications are now open for qualified candidates seeking positions"
            image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800"
            link="/announcements"
          />
          <AnnouncementCard
            tag="Education"
            readTime="3 min read"
            title="School resumption date announced for all institutions"
            excerpt="Parents and students should prepare for the new academic session"
            image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800"
            link="/announcements"
          />
          <AnnouncementCard
            tag="Health"
            readTime="2 min read"
            title="Free health screening campaign scheduled statewide"
            excerpt="Community members can access preventive healthcare services"
            image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800"
            link="/announcements"
          />
          <AnnouncementCard
            tag="Commerce"
            readTime="4 min read"
            title="Business registration fees reduced for SMEs"
            excerpt="Small enterprises now benefit from improved registration incentives"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
            link="/announcements"
          />
        </div>
      </section>

      <EmergencySection />
      <NeedHelpSection />
    </>
  );
}
