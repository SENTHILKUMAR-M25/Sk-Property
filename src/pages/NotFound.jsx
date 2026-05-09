const NotFound = () => {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="animate-fade-in-up">
        <h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The property or page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
