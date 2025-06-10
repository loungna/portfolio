// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loading state after component mounts
    setIsLoaded(true);
    
    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Handle page navigation with history API
  const handlePageChange = (page) => {
    setCurrentPage(page);
    
    // Update browser history
    const pageTitle = getPageTitle(page);
    document.title = pageTitle;
    
    // Update URL without page reload
    window.history.pushState(
      { page: page }, 
      pageTitle, 
      page === 'home' ? '/' : `#${page}`
    );
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get page title for SEO
  const getPageTitle = (page) => {
    const titles = {
      home: 'Jirayut Loungna - System Analyst & Full-Stack Developer',
      about: 'About - Jirayut Loungna',
      skills: 'Skills & Expertise - Jirayut Loungna',
      experience: 'Professional Experience - Jirayut Loungna',
      projects: 'Projects & Portfolio - Jirayut Loungna',
      education: 'Education & Academic Background - Jirayut Loungna',
      certificates: 'Certificates & Awards - Jirayut Loungna',
      contact: 'Contact - Jirayut Loungna'
    };
    return titles[page] || titles.home;
  };

  // Render current page component
  const renderPage = () => {
    const pageProps = {
      setCurrentPage: handlePageChange,
      isLoaded: isLoaded
    };

    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      case 'about':
        return <About {...pageProps} />;
      case 'skills':
        return <Skills {...pageProps} />;
      case 'experience':
        return <Experience {...pageProps} />;
      case 'projects':
        return <Projects {...pageProps} />;
      case 'education':
        return <Education {...pageProps} />;
      case 'certificates':
        return <Certificates {...pageProps} />;
      case 'contact':
        return <Contact {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Navigation */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
      />
      
      {/* Main Content */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Content with Fade Animation */}
          <div 
            key={currentPage}
            className={`transition-all duration-500 ease-in-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {renderPage()}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Jirayut Loungna. All rights reserved.
            </div>
            <div className="text-gray-500 text-sm">
              Recent CS Graduate | System Analyst | Full-Stack Developer | Available for Opportunities
            </div>
            <div className="flex space-x-6">
              <a 
                href="mailto:loungna@hotmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                Email
              </a>
              <a 
                href="https://github.com/loungna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/jirayut-loungna-0a945236a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default App;