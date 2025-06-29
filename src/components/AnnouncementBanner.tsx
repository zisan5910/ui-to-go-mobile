
import React from 'react';
import { Info, X } from 'lucide-react';
import { AnnouncementItem } from '../types';

const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  
  const announcement: AnnouncementItem = {
    id: '1',
    text: 'নতুন অনলাইন সেবা চালু হয়েছে। আজই আবেদন করুন!',
    type: 'info'
  };

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mx-4 mt-4 rounded-r-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Info className="text-yellow-600" size={20} />
          <p className="text-yellow-800 text-sm font-medium">
            {announcement.text}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-yellow-600 hover:text-yellow-800 transition-colors"
          aria-label="Close announcement"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
