
import React from 'react';
import { navigationData } from '../data/navigation';
import { NavigationItem } from '../types';

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  const handleTabClick = (item: NavigationItem) => {
    setActiveTab(item.id);
    // Handle navigation logic here
    console.log('Navigating to:', item.route);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center py-2">
        {navigationData.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === item.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
