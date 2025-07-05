const Footer = () => {
    return (
        <footer className="bg-[#1c1c28] dark:bg-[#12121a] text-gray-400 text-sm text-center py-6">
        <div className="container mx-auto px-4">
            <p>
            © {new Date().getFullYear()} Joaquin Cuenca. All rights reserved.
            </p>
        </div>
        </footer>
    )
}

export default Footer
