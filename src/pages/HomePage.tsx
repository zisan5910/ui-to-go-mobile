
import React from 'react';
import Header from '../components/Header';
import AnnouncementBanner from '../components/AnnouncementBanner';
import SearchBar from '../components/SearchBar';
import ServicesGrid from '../components/ServicesGrid';
import BottomNavigation from '../components/BottomNavigation';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Announcement Banner */}
      <AnnouncementBanner />
      
      {/* Main Content */}
      <main className="flex-1 px-4 py-6 pb-20">
        {/* Search Bar */}
        <SearchBar />
        
        {/* Services Grid */}
        <ServicesGrid />
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
