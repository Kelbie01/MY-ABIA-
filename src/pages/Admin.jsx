export default function Admin() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-serif antialiased overflow-x-hidden transition-colors duration-200">
      <section className="w-full mt-10 md:mt-20 mb-10 pb-10 leading-tight">
        <div className="px-4 sm:px-6 py-10 mx-auto max-w-7xl animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">Admin dashboard</h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-bold max-w-3xl">
            Review and manage business submissions for My Abia directory
          </p>
        </div>
      </section>

      <main className="flex flex-col lg:flex-row gap-8 lg:gap-16 mx-auto max-w-7xl mb-24 px-4 sm:px-6">
        <section className="space-y-6 flex-1 animate-fade-up">
          <div>
            <p className="text-lg sm:text-xl mb-3 text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">Navigate</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
              Manage submissions and directory listings
            </h2>
          </div>
        </section>

        <section className="flex-1 lg:flex-1 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            The dashboard shows all business submissions awaiting your review.
            Filter by status to see pending approvals or already approved listings.
          </p>

          <div className="mt-10 space-y-4 text-lg sm:text-xl text-gray-800 dark:text-gray-200 font-bold">
            <div className="flex items-center space-x-3 gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition cursor-pointer">
              <span className="text-black dark:text-white"><i className="bi bi-grid-1x2-fill"></i></span>
              <p>Dashboard</p>
            </div>
            <div className="flex items-center space-x-3 gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition cursor-pointer">
              <span className="text-blue-500"><i className="bi bi-patch-check-fill"></i></span>
              <p>Approved listings</p>
            </div>
            <div className="flex items-center space-x-3 gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition cursor-pointer">
              <span className="text-yellow-500"><i className="bi bi-patch-exclamation-fill"></i></span>
              <p>Pending approvals</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <button className="border border-black dark:border-white px-8 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded text-lg transition-all duration-300 font-bold">
              Logout
            </button>
            <button className="text-lg flex items-center justify-center sm:justify-start space-x-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 font-bold px-4">
              <span>Settings</span><i className="bi bi-chevron-right text-sm"></i>
            </button>
          </div>
        </section>
      </main>

      <section className="px-4 sm:px-6 mt-20 mx-auto max-w-7xl pb-24 animate-fade-up">
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider mb-4">Submissions</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 space-y-2 leading-tight">
          <div className="mb-2">Review each business submission carefully.</div>
          <div className="mb-2">Approve entries that meet directory standards</div>
          <div className="text-gray-500 dark:text-gray-400">or reject those that do not.</div>
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <button className="border border-black dark:border-white px-8 py-3 rounded text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-bold">
            Refresh
          </button>
          <button className="text-lg flex items-center justify-center sm:justify-start space-x-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 font-bold px-4">
            <span>Export</span><i className="bi bi-chevron-right text-sm"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
