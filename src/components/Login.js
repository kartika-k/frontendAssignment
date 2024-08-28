
import React, { useState } from 'react';
import img from '../images/image.png';
import { FcGoogle } from "react-icons/fc";
import { TiVendorApple } from "react-icons/ti";
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Logged in successfully!');
    onLogin();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col-reverse lg:flex-row h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
       {/* <Toaster position="top-right" /> */}
      <button onClick={handleSubmit}></button>
      {/* Left side - Image and text */}
      <div className={`hidden lg:flex lg:w-1/2 flex-col justify-between rounded-r-3xl p-12 ${isDarkMode ? 'bg-indigo-700' : 'bg-indigo-600'}`}>
        <div>
          <div className={`px-4 py-2 rounded-full inline-block mb-6 ${isDarkMode ? 'bg-gray-700 text-indigo-400' : 'bg-white text-indigo-600'}`}>
            <span className="font-bold">Base</span>
          </div>
          <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-white'}`}>
            Generate detailed<br />reports with just one<br />click
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <img src={img} alt="Woman with camera" className="rounded-lg md-xs w-80 h-80 object-cover" />
          <div className="flex items-center space-x-2">
            <div 
              className={`w-10 h-5 rounded-full p-1 cursor-pointer ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              onClick={toggleDarkMode}
            >
              <div className={`w-4 h-4 rounded-full transition-transform duration-300 ${isDarkMode ? 'bg-gray-100 ml-auto' : 'bg-white'}`}></div>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-white'}`}>
              {isDarkMode ? 'Light' : 'Dark'}
            </span>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className={`flex flex-1 items-center justify-center p-6 sm:p-12 lg:w-1/2 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className={`mt-6 text-3xl font-extrabold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Sign In</h2>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sign in to your account</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <button className={`flex-1 flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-100'}`}>
              <FcGoogle alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            <button className={`flex-1 flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-100'}`}>
              <TiVendorApple  alt="Apple" className="w-5 h-5 mr-2" />
              Sign in with Apple
            </button>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'}`}
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className={`font-medium hover:text-indigo-500 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition-colors ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'}`}
              >
                Sign In
              </button>
            </div>
          </form>
          <p className={`mt-2 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Don't have an account?{' '}
            <a href="#" className={`font-medium hover:text-indigo-500 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              Register here
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
