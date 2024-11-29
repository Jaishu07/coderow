import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { docSections } from '../data/docSections';

const DocSidebar = ({ isOpen, toggleSidebar, selectedPath, onSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        // Always show sidebar on desktop
        if (!isOpen) toggleSidebar();
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, toggleSidebar]);

  const handleSelect = (path) => {
    onSelect(path);
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
        className="fixed top-[64px] left-0 h-[calc(100vh-64px)] w-[280px] bg-primary border-r border-white/10 
          overflow-hidden z-50 flex flex-col"
      >
        {/* Mobile Header */}
        <div className="sticky top-0 bg-primary/80 backdrop-blur-sm p-4 border-b border-white/10 flex justify-between items-center lg:hidden">
          <h2 className="text-xl font-bold text-text">Documentation</h2>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Scroll Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
          <div className="p-6">
            <nav className="space-y-8">
              {docSections.map((section) => (
                <div key={section.title} className="space-y-3">
                  {/* Section Header */}
                  <div className="sticky top-0 z-10">
                    <div className="flex items-center gap-2 text-sm font-medium text-white/60 uppercase tracking-wider px-3 py-2 bg-primary/95 backdrop-blur-sm">
                      <span className="text-lg">{section.title}</span>
                    </div>
                  </div>

                  {/* Section Items */}
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => {
                          onSelect(item.path);
                          if (window.innerWidth < 1024) toggleSidebar();
                        }}
                        className={`group flex items-start gap-3 w-full px-3 py-2 rounded-lg transition-all ${
                          selectedPath === item.path
                            ? 'bg-accent text-white shadow-lg shadow-accent/20'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className={`text-lg transition-transform ${
                          selectedPath === item.path
                            ? 'scale-110'
                            : 'group-hover:scale-110'
                        }`}>
                          {item.title.split(' ')[0]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between">
                            <span className="text-sm font-medium">
                              {item.title.split(' ').slice(1).join(' ')}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 p-4 border-t border-white/10 bg-primary/95 backdrop-blur-sm">
          <div className="text-xs text-white/40 text-center">
            <p>CodeRow Documentation</p>
            <p className="mt-1">Version 1.0.0</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default DocSidebar;
