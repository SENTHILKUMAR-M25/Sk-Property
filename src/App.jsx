import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Layout Component
import MainLayout from "./components/MainLayout";

// Lazy Loaded Routes for Performance
const Home = React.lazy(() => import("./components/Home"));
const AboutPage = React.lazy(() => import("./pages/About"));
const PropertyPage = React.lazy(() => import("./pages/PropertyPage"));
const PropertyDetailPage = React.lazy(() => import("./pages/PropertyDetails"));
const ServicePage = React.lazy(() => import("./pages/ServicePage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Premium Loading Fallback
const PageLoader = () => (
  <div className="h-[50vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-indigo-600"></div>
      <p className="text-gray-500 font-medium animate-pulse">Loading amazing properties...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      {/* 
        Suspense acts as a boundary to catch loading states for all lazy routes.
        This greatly reduces the initial bundle size and speeds up time-to-interactive. 
      */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Layout wraps all pages to ensure consistent Navbar and Footer without re-renders */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="properties" element={<PropertyPage />} />
            <Route path="property/:slug" element={<PropertyDetailPage />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="contact" element={<ContactPage />} />
            
            {/* Catch-all route for non-existent paths */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;