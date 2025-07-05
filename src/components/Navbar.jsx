const Navbar = () => {
    return (
        <nav className="bg-neutral-900 p-4 flex justify-between items-center shadow fixed w-full z-50">
        <h1 className="text-2xl font-bold text-cyan-400">MyPortfolio</h1>
        <ul className="flex space-x-6 text-gray-300">
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
        </nav>
    );
};

export default Navbar;
