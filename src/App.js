import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Upload from './components/Upload';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('upload');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  return (
    <div className={`flex flex-col md:flex-row h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {isAuthenticated && (
        <Sidebar 
          setCurrentPage={setCurrentPage} 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      )}
      <main className="flex-1 p-6">
        {!isAuthenticated && <Login onLogin={handleLogin} isDarkMode={isDarkMode} />}
        {isAuthenticated && currentPage === 'upload' && (
          <Upload onLogout={handleLogout} isDarkMode={isDarkMode} />
        )}
      </main>
    </div>
  );
}

export default App;