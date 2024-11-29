import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const DocContent = ({ title, emoji, description, content, links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto px-6 py-8"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{emoji}</span>
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
        {description && (
          <p className="text-lg text-white/70">{description}</p>
        )}
        {links && (
          <div className="flex gap-4 mt-6">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.type === 'github' ? <FiGithub className="w-4 h-4" /> : <FiExternalLink className="w-4 h-4" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {content}
      </div>

      {/* Navigation Footer */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white/70 hover:text-white transition-colors">
            ← Previous
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white/70 hover:text-white transition-colors">
            Next →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DocContent;
