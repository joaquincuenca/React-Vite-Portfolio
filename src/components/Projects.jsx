const Projects = () => {
  return (
    <section className="px-4 sm:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* 1 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">AR: Historiscan</h3>
          <p className="text-gray-300 text-sm">Augmented Reality museum guide using Unity & Vuforia. Offline capable.</p>
        </div>

        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">WealthyDebt</h3>
          <p className="text-gray-300 text-sm">Wealthy Debt (by FRED Financial Services) helps individuals turn debt into an asset through webinars, coaching, and tailored financial strategies—guiding them from what they owe to what they own. Built with Next.js for a fast, modern, and scalable experience.</p>
        </div>

        {/* 2 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Food Order Web App</h3>
          <p className="text-gray-300 text-sm">Built using React, Tailwind CSS, Vite, with shared cart via context.</p>
        </div>

        {/* 3 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Personal Portfolio</h3>
          <p className="text-gray-300 text-sm">Fully responsive portfolio with dark mode using React + Tailwind v4.</p>
        </div>

        {/* 4 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Soonest Global Web System</h3>
            <p className="text-gray-300 text-sm">
                Developed core front-end and backend logic for an inventory and logistics platform. Built with React, Tailwind, and Node.js.
            </p>
        </div>


        {/* 5 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Supabase Auth</h3>
          <p className="text-gray-300 text-sm">Next.js + Supabase authentication and data-driven dashboard UI.</p>
        </div>

        {/* 6 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">Java OOP Systems</h3>
          <p className="text-gray-300 text-sm">OOP-based student record system built in pure Java + Swing.</p>
        </div>

        {/* 7 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Cloud Backup Storage</h3>
            <p className="text-gray-300 text-sm">
                File backup web app with real-time cloud storage using Supabase and React. Designed for reliability and user control.
            </p>
        </div>


        {/* 8 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2 text-yellow-400">NGL Clone App</h3>
          <p className="text-gray-300 text-sm">Anonymous messaging system with Bootstrap + Express + EJS.</p>
        </div>

        {/* 9 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Clinic Management System</h3>
            <p className="text-gray-300 text-sm">
                Created during internship at Praetorian Inc. Handles appointments, patient records, and doctor dashboards using Java + SQL.
            </p>
        </div>


        {/* 10 */}
        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Poultry Management System (IoT)</h3>
            <p className="text-gray-300 text-sm">
                Developed an intelligent poultry farm monitoring system using Java and Firebase. Includes feed tracking, health logs, and growth reports.
            </p>
        </div>

        <div className="bg-[#2c2c3a] dark:bg-[#33334d] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Air Pollution Monitoring (IoT)</h3>
            <p className="text-gray-300 text-sm">
                Real-time environmental monitoring project using Java and Firebase to track air quality metrics with cloud-stored data analytics.
            </p>
        </div>
    </div>

    </section>
)
}

export default Projects
