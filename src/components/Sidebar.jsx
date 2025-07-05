const Sidebar = () => {
    return (
        <aside className="w-full md:w-72 bg-[#161620] p-6 flex flex-col justify-between">
        <div className="space-y-6">
            <img
            src="/me.jpg"
            alt="Avatar"
            className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto border-4 border-yellow-400"
            />

            <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold">Joaquin Cuenca</h2>
            <p className="text-sm text-gray-400">Full-Stack Developer</p>
            </div>

            <div className="text-sm sm:text-base text-gray-300 space-y-1 sm:space-y-2 text-center md:text-left">
            <p><strong>Residence:</strong> Philippines</p>
            <p><strong>Specialties:</strong> Web App Developer</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xl sm:text-2xl text-yellow-400">
            <i className="fi fi-brands-react"></i>
            <i className="fi fi-brands-tailwind-css"></i>
            <i className="fi fi-brands-css3"></i>
            <i className="fi fi-brands-js"></i>
            <i className="fi fi-brands-java"></i>
            <i className="fi fi-brands-html5"></i>
            <i className="fi fi-brands-typescript"></i>
            <i className="fi fi-brands-node-js"></i>
            <i className="fi fi-brands-node"></i>
            <i className="fi fi-brands-c-sharp"></i>
            <i className="fi fi-brands-c-plusplus"></i>
            </div>

            <ul className="text-yellow-400 text-xs space-y-1 list-disc list-inside">
                <li>Unity AR</li>
                <li>React + Tailwind CSS</li>
                <li>Next.js + Supabase</li>
                <li>Java OOP • SQL</li>
                <li>Firebase Auth + Realtime DB</li>
                <li>Node.js + Express.js APIs</li>
                <li>Git & GitHub Workflow</li>
                <li>PostgreSQL & MySQL</li>
                <li>Mobile Development (Unity + C#)</li>
                <li>TypeScript & JavaScript</li>
                <li>REST API Integration</li>
                <li>Academic System Development</li>
            </ul>

        </div>
        </aside>
    )
}

export default Sidebar
