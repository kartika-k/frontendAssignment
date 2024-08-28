import React, { useState } from 'react';

function Sidebar({ setCurrentPage, isDarkMode, setIsDarkMode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '⬆️', label: 'Upload' },
    { icon: '📄', label: 'Invoice' },
    { icon: '📅', label: 'Schedule' },
    { icon: '🗓️', label: 'Calendar' },
    { icon: '🔔', label: 'Notification' },
    { icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out md:h-screen h-auto`}>
      <div className="p-4 flex items-center justify-between">
        <h2 className={`text-xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Base</h2>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className={isDarkMode ? 'text-white' : 'text-black'}>
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(item.label.toLowerCase())}
            className={`w-full text-left p-4 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} flex items-center`}
          >
            <span className="mr-4">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} p-2 rounded-full`}
        >
          {isCollapsed ? (isDarkMode ? '🌙' : '☀️') : (isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode')}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;