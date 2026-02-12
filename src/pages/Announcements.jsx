import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnnouncementCard from '../components/AnnouncementCard';

export default function Announcements() {
  const [filter, setFilter] = useState('all');

  const newsData = [
    {
      id: 1,
      category: 'health',
      title: 'New Specialist Hospital Wing Commissioned',
      excerpt: 'The state government has completed the ultra-modern diagnostic center equipped with MRI and CT scan facilities.',
      date: 'Dec 08, 2025',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
      source: 'Ministry of Health',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'government',
      title: '2026 Budget Presentation: "Budget of New Beginnings"',
      excerpt: 'Governor Otti presents N567bn budget focused on massive infrastructural renewal and human capital development.',
      date: 'Dec 05, 2025',
      image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=600',
      source: 'Press Secretary',
      readTime: '8 min read'
    },
    {
      id: 3,
      category: 'infrastructure',
      title: 'Port Harcourt - Aba Road Rehabilitation Updates',
      excerpt: 'Contractors have been mobilized to site to ensure completion of the dual carriage way before the rainy season.',
      date: 'Dec 02, 2025',
      image: 'https://images.unsplash.com/photo-1596564239851-933e46e8c78c?auto=format&fit=crop&q=80&w=600',
      source: 'Min of Works',
      readTime: '4 min read'
    },
    {
      id: 4,
      category: 'education',
      title: 'Digital Literacy Program for Teachers Launches',
      excerpt: 'Over 2,000 public school teachers begin training on modern digital teaching aids and smart classroom management.',
      date: 'Nov 28, 2025',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
      source: 'SUBEB',
      readTime: '6 min read'
    },
    {
      id: 5,
      category: 'government',
      title: 'Aba Shoe Makers Export First Batch to Europe',
      excerpt: 'Following the quality standardization initiative, Made-in-Aba shoes have officially hit international shelves.',
      date: 'Nov 20, 2025',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
      source: 'Commerce',
      readTime: '5 min read'
    },
    {
      id: 6,
      category: 'health',
      title: 'Free Medical Outreach Reaches Rural Umuahia',
      excerpt: 'Over 5,000 residents benefited from free eye checks, surgeries, and general check-ups this weekend.',
      date: 'Nov 15, 2025',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
      source: 'Health',
      readTime: '3 min read'
    }
  ];

  const filteredNews = filter === 'all'
    ? newsData
    : newsData.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All Updates' },
    { id: 'government', label: 'Governance' },
    { id: 'health', label: 'Health' },
    { id: 'education', label: 'Education' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  return (
    <div className="w-full pt-12 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-lg font-bold mb-6 border border-blue-100 dark:border-blue-800 mt-10">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Live Updates from Umuahia
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
          Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">New Abia</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          Stay informed with the latest official announcements, infrastructural developments, and policy updates from the administration of Governor Dr. Alex Otti.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 border ${filter === cat.id
                ? 'bg-blue-900 text-white border-transparent shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-900 dark:hover:border-blue-500 hover:text-blue-900 dark:hover:text-blue-400'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredNews.map((news) => (
            <motion.div
              key={news.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <AnnouncementCard
                tag={news.category.toUpperCase()}
                readTime={news.readTime}
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                link="#"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <i className="bi bi-search text-4xl text-gray-300 mb-3 block"></i>
          <p className="text-gray-500 dark:text-gray-400">No updates found for this category.</p>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="mt-20 rounded-3xl bg-gradient-to-br from-blue-900 to-blue-800 p-5 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-2">Get Updates Directly</h3>
            <p className="text-blue-100 text-lg">Subscribe to the official Abia State weekly digest. No spam, just progress reports.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-5 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-100"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-8 py-3 rounded-lg transition shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
