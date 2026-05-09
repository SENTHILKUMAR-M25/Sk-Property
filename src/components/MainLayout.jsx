import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar />
      {/* 
        Using flex-grow to ensure footer stays at bottom.
        pt-20 assumes a fixed 80px navbar.
      */}
      <main className="flex-grow pt-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
