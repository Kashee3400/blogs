const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
                <p>© {new Date().getFullYear()} AdminPro Dashboard. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <span>Version 2.1.0</span>
                    <span>•</span>
                    <button className="hover:text-blue-600">Documentation</button>
                    <span>•</span>
                    <button className="hover:text-blue-600">Support</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;