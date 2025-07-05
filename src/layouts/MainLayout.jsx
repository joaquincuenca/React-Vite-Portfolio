import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="dark:bg-[#1c1c28] bg-white dark:text-white text-black transition-colors duration-300 min-h-screen">
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6 sm:p-8 space-y-16 overflow-y-auto">
            <Hero />
            <Stats />
            <Projects />
            <Services />
            </main>
        </div>
        <Footer />
        </div>
    );
};

export default MainLayout;
