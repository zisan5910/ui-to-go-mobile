
import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Menu Button */}
        <button 
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Title */}
        <div className="text-center">
          <h1 className="text-xl font-bold">Bogura City</h1>
          <p className="text-blue-100 text-sm">Digital Services</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button 
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button 
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="User profile"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
