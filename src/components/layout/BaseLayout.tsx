// src/components/BaseLayout.tsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* child routes render here */}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;