import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiExternalLink, FiGithub, FiBook, FiCode } from 'react-icons/fi';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated API data - Replace with actual API call
  const techStackData = {
    frontend: [
      {
        name: 'React',
        description: 'A JavaScript library for building user interfaces',
        version: '18.2.0',
        category: 'frontend',
        documentation: 'https://reactjs.org/docs',
        github: 'https://github.com/facebook/react',
        icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
        tutorials: [
          { title: 'Getting Started with React', url: 'https://reactjs.org/tutorial/tutorial.html' },
          { title: 'React Hooks Guide', url: 'https://reactjs.org/docs/hooks-intro.html' },
        ],
      },
      {
        name: 'Tailwind CSS',
        description: 'A utility-first CSS framework',
        version: '3.3.0',
        category: 'frontend',
        documentation: 'https://tailwindcss.com/docs',
        github: 'https://github.com/tailwindlabs/tailwindcss',
        icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png',
        tutorials: [
          { title: 'Tailwind CSS Basics', url: 'https://tailwindcss.com/docs/utility-first' },
          { title: 'Responsive Design', url: 'https://tailwindcss.com/docs/responsive-design' },
        ],
      },
      {
        name: 'Framer Motion',
        description: 'Production-ready animation library for React',
        version: '10.12.0',
        category: 'frontend',
        documentation: 'https://www.framer.com/motion/',
        github: 'https://github.com/framer/motion',
        icon: 'https://www.framer.com/images/favicons/favicon.png',
        tutorials: [
          { title: 'Animation Basics', url: 'https://www.framer.com/docs/animation/' },
          { title: 'Gestures', url: 'https://www.framer.com/docs/gestures/' },
        ],
      },
    ],
    backend: [
      {
        name: 'Node.js',
        description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
        version: '18.15.0',
        category: 'backend',
        documentation: 'https://nodejs.org/docs',
        github: 'https://github.com/nodejs/node',
        icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
        tutorials: [
          { title: 'Node.js Getting Started', url: 'https://nodejs.org/en/learn' },
          { title: 'Node.js API Reference', url: 'https://nodejs.org/api/' },
        ],
      },
      {
        name: 'Express',
        description: 'Fast, unopinionated web framework for Node.js',
        version: '4.18.2',
        category: 'backend',
        documentation: 'https://expressjs.com/',
        github: 'https://github.com/expressjs/express',
        icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png',
        tutorials: [
          { title: 'Express Guide', url: 'https://expressjs.com/en/guide/routing.html' },
          { title: 'Middleware', url: 'https://expressjs.com/en/guide/using-middleware.html' },
        ],
      },
    ],
    database: [
      {
        name: 'MongoDB',
        description: 'NoSQL database for modern applications',
        version: '6.0',
        category: 'database',
        documentation: 'https://docs.mongodb.com/',
        github: 'https://github.com/mongodb/mongo',
        icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
        tutorials: [
          { title: 'MongoDB Basics', url: 'https://docs.mongodb.com/manual/tutorial/getting-started/' },
          { title: 'CRUD Operations', url: 'https://docs.mongodb.com/manual/crud/' },
        ],
      },
    ],
    tools: [
      {
        name: 'Git',
        description: 'Distributed version control system',
        version: '2.40.0',
        category: 'tools',
        documentation: 'https://git-scm.com/doc',
        github: 'https://github.com/git/git',
        icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
        tutorials: [
          { title: 'Git Basics', url: 'https://git-scm.com/book/en/v2/Getting-Started-Git-Basics' },
          { title: 'Branching', url: 'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell' },
        ],
      },
    ],
  };

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const allResources = Object.values(techStackData).flat();
      setResources(allResources);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools' },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-text mb-4"
            >
              Tech Stack Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Comprehensive documentation and resources for our entire tech stack
            </motion.p>

            {/* Search and Categories */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors duration-200"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      activeCategory === category.id
                        ? 'bg-accent text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center text-gray-400">Loading resources...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/30 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={resource.icon}
                    alt={resource.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-text">
                      {resource.name}
                    </h3>
                    <p className="text-gray-400 text-sm">v{resource.version}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{resource.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <a
                      href={resource.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-200"
                    >
                      <FiBook />
                      <span>Documentation</span>
                      <FiExternalLink className="text-sm" />
                    </a>
                    <a
                      href={resource.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors duration-200"
                    >
                      <FiGithub />
                      <span>GitHub</span>
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text mb-2">
                      Popular Tutorials
                    </h4>
                    <ul className="space-y-2">
                      {resource.tutorials.map((tutorial) => (
                        <li key={tutorial.title}>
                          <a
                            href={tutorial.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-200"
                          >
                            <FiCode className="text-sm" />
                            <span>{tutorial.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
