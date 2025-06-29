
import { Element } from 'react-scroll';
import { Download, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProfileSectionProps {
  language: 'en' | 'bn';
  content: any;
  scrollToSection: (section: string) => void;
}

const ProfileSection = ({ language, content, scrollToSection }: ProfileSectionProps) => {
  return (
    <Element name="profile">
      <header className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Background Animation */}
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-green-500 filter blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              translateX: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-blue-500 filter blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              translateY: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 rounded-full bg-green-200/20 animate-pulse"></div>
              <img
                src="https://github.com/RidoanDev.png"
                alt={content[language].name}
                className="w-48 h-48 rounded-full border-4 border-green-200/30 object-cover relative z-10 shadow-lg"
              />
            </motion.div>

            {/* Profile Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {content[language].name}
              </h1>
              
              <p className="text-xl text-green-700 font-medium mb-6">
                {content[language].role}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
                {content[language].statement}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="/Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  {content[language].downloadCV}
                </motion.a>
                
                <motion.button
                  onClick={() => scrollToSection('education')}
                  className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowDown size={20} />
                  {language === 'en' ? 'Learn More' : 'আরো জানুন'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </Element>
  );
};

export default ProfileSection;
