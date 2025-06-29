
import { useState } from 'react';
import { Menu, X, Languages, UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  navigationItems: Array<{
    id: string;
    icon: React.ReactNode;
    target?: string;
  }>;
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

const Navigation = ({ navigationItems, activeSection, scrollToSection, language, setLanguage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getSectionLabel = (id: string) => {
    const labels = {
      en: {
        profile: 'Profile',
        education: 'Education',
        courses: 'Courses',
        experience: 'Experience',
        certificates: 'Certificates',
        skills: 'Skills',
        family: 'Family',
        contact: 'Contact',
        'social-links': 'Social'
      },
      bn: {
        profile: 'প্রোফাইল',
        education: 'শিক্ষা',
        courses: 'কোর্স',
        experience: 'অভিজ্ঞতা',
        certificates: 'সার্টিফিকেট',
        skills: 'দক্ষতা',
        family: 'পরিবার',
        contact: 'যোগাযোগ',
        'social-links': 'সামাজিক'
      }
    };
    return labels[language][id as keyof typeof labels[typeof language]] || id;
  };

  const handleNavClick = (item: any) => {
    const target = item.target || item.id;
    scrollToSection(target);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="font-bold text-xl text-green-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {language === 'en' ? 'Portfolio' : 'পোর্টফলিও'}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">
                  {getSectionLabel(item.id)}
                </span>
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              <Languages size={18} />
              <span className="text-sm font-medium">
                {language === 'en' ? 'বাং' : 'EN'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">
                      {getSectionLabel(item.id)}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
