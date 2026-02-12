import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function InfoCard({ title, subtitle, description, image, link, buttonText = "View", fullWidth = false }) {
  return (
    <Link to={link || '#'} className={`group ${fullWidth ? 'w-full' : 'w-full'}`}>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.35, ease: [0.22, 0.8, 0.52, 1] }}
        className={`border border-black dark:border-gray-600 p-0 flex flex-col ${fullWidth ? 'md:flex-row' : ''} h-full bg-white dark:bg-gray-800 transition-colors duration-200`}
      >
        <div className={`${fullWidth ? 'h-56 md:h-auto w-full md:w-1/2' : 'h-48 w-full'} overflow-hidden`}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`p-5 ${fullWidth ? 'md:w-1/2 flex flex-col justify-center' : 'flex-grow'}`}>
          {subtitle && <p className="text-lg font-semibold text-gray-900 dark:text-gray-300">{subtitle}</p>}
          <h3 className={`text-2xl font-bold ${subtitle ? 'mt-1' : ''} text-gray-900 dark:text-white`}>{title}</h3>
          <p className="text-xl text-gray-900 dark:text-gray-300 mt-2">{description}</p>
          <button className="mt-4 text-lg text-gray-900 dark:text-white font-medium group-hover:text-black dark:group-hover:text-gray-200 flex items-center gap-1 transition-colors">
            <span>{buttonText}</span>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
