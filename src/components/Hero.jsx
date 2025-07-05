const Hero = () => {
    return (
        <section className="bg-[#2c2c3a] p-6 sm:p-10 rounded-lg text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Hi, I'm Joaquin Cuenca</h1>

        <pre className="bg-transparent text-yellow-400 text-base sm:text-lg mb-4 overflow-x-auto">
    {`I web app systems, and clean UIs.`}
        </pre>

        <a
            href="/Joaquin_Cuenca_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition text-sm sm:text-base">
            DOWNLOAD MY CV
            </button>
        </a>
        </section>
    )
}

export default Hero
