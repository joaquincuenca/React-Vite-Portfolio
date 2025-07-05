const Services = () => {
    return (
        <section>
        <h2 className="text-2xl font-bold mb-4">My Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2c2c3a] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Augmented Reality Apps</h3>
            <p className="text-gray-400">Using Unity and Vuforia to build immersive AR apps like Historiscan.</p>
            </div>
            <div className="bg-[#2c2c3a] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Web App Development</h3>
            <p className="text-gray-400">Modern full-stack apps using React, Vite, Tailwind CSS, and Supabase.</p>
            </div>
            <div className="bg-[#2c2c3a] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Mobile + Unity Apps</h3>
            <p className="text-gray-400">Unity apps using C# for Android experiences and gamified interfaces.</p>
            </div>
            <div className="bg-[#2c2c3a] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Academic Projects</h3>
            <p className="text-gray-400">Offering clean, structured, and professional academic web/app projects.</p>
            </div>
        </div>
        </section>
    );
};

export default Services;
