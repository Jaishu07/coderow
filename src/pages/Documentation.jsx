import React, { useState } from 'react';
import DocSidebar from '../components/DocSidebar';
import { docContent } from '../data/docContent';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCopy, FiCheck, FiMenu } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Documentation = () => {
  const [selectedPath, setSelectedPath] = useState('/docs/tech/react');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [copiedCode, setCopiedCode] = useState(null);

  const selectedDoc = docContent[selectedPath];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = (content) => {
    return content.map((section, index) => {
      switch (section.type) {
        case 'section':
          return (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <h3 className="font-medium mb-2">{item.label}</h3>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'code':
          return (
            <div key={index} className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <button
                  onClick={() => handleCopyCode(section.code)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
                >
                  {copiedCode === section.code ? (
                    <>
                      <FiCheck className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  language={section.language}
                  style={atomDark}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>
            </div>
          );

        case 'resources':
          return (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    {item.url.includes('github') ? (
                      <FiGithub className="w-5 h-5 text-white/70 group-hover:text-white" />
                    ) : (
                      <FiExternalLink className="w-5 h-5 text-white/70 group-hover:text-white" />
                    )}
                    <span className="text-sm">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors lg:hidden"
      >
        <FiMenu className="w-6 h-6" />
      </button>

      <DocSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        selectedPath={selectedPath}
        onSelect={setSelectedPath}
      />

      <main className="lg:pl-80">
        <AnimatePresence mode="wait">
          {selectedDoc && (
            <motion.div
              key={selectedPath}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-4xl mx-auto px-6 py-12"
            >
              {/* Header */}
              <div className="mt-20 mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{selectedDoc.emoji}</span>
                  <div>
                    <h1 className="text-4xl font-bold">{selectedDoc.title}</h1>
                    {selectedDoc.version && (
                      <div className="mt-2 text-sm">
                        <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">
                          v{selectedDoc.version}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {selectedDoc.description && (
                  <p className="text-lg text-white/70 mt-4">
                    {selectedDoc.description}
                  </p>
                )}
              </div>

              {/* Content */}
              {renderContent(selectedDoc.content)}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Documentation;
