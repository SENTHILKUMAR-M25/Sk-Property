import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import PropertyPage from "./pages/PropertyPage";
import AboutPage from "./pages/About";
import PropertyDetailPage from "./pages/PropertyDetails";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll resets on route change */}
      <ScrollToTop />

      {/* Global Layout */}
      <div className="flex flex-col min-h-screen bg-white">

        {/* Sticky Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/properties" element={<PropertyPage />} />
            <Route path="/property/:slug" element={<PropertyDetailPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="h-[70vh] flex items-center justify-center text-center">
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900">404</h1>
                    <p className="text-gray-500 mt-2">Page Not Found</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;