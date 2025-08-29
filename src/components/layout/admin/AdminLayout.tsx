import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import AdminNavbar from "./Navbar";
import Footer from "./Footer";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');


    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setActiveSection={setActiveSection}
            />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <AdminNavbar
                    setSidebarOpen={setSidebarOpen}
                    sidebarOpen={sidebarOpen}
                    notificationsDropdown={notificationsDropdown}
                    setNotificationsDropdown={setNotificationsDropdown}
                    setProfileDropdown={setProfileDropdown}
                    profileDropdown={profileDropdown}
                    setActiveSection={setActiveSection}
                    activeSection={activeSection}
                />

                {/* Main Content Area */}
                <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                    {/* Replace with your content */}
                    <Outlet />
                    {/* /End replace */}

                </main>

                {/* Footer */}
                <Footer />
            </div>

            {/* Click outside to close dropdowns */}
            {(profileDropdown || notificationsDropdown) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setProfileDropdown(false);
                        setNotificationsDropdown(false);
                    }}
                />
            )}
        </div>
    );
};

export default AdminLayout;