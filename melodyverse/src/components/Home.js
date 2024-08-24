import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/dashboard");
  }, [navigate]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${require('../image/background.jpeg')})`,
      }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center animate-card">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to MelodyVerse</h1>
        <p className="mb-8 text-gray-600">Your gateway to a world of music.</p>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
