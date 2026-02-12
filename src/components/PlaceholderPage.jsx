export default function PlaceholderPage({ title }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-10 bg-white dark:bg-gray-900 text-center transition-colors duration-200">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">This page is currently being migrated.</p>
    </div>
  );
}
