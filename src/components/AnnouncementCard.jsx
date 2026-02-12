import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AnnouncementCard({ tag, readTime, title, excerpt, image, link }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.22, 0.8, 0.52, 1] }}
      className="border border-black dark:border-gray-600 overflow-hidden bg-white dark:bg-gray-800 group transition-colors duration-200"
    >
      <div className="h-72 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-10">
        <div className="flex items-center space-x-4 text-lg text-gray-900 dark:text-gray-300">
          <span className="font-bold border border-black dark:border-gray-400 p-3 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-200">{tag}</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-2xl font-bold mt-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-400 mt-3">
          {excerpt}
        </p>
        <Link to={link || '#'} className="text-lg font-semibold mt-5 inline-flex items-center group-hover:translate-x-1 transition-transform text-black dark:text-white">
          Read more
          <span className="ml-1">&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
}
