// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer2 from '../components/Footer/footer2'; // Assuming you want to include the footer

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Oops! Page not found.</p>
        <Link to="/" className="text-blue-500 underline">
          Go back to Home
        </Link>
      </div>
      <Footer2 />
    </div>
  );
};

export default NotFound;
