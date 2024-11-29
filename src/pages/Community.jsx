import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiMessageCircle, FiUsers, FiCode, FiHeart, FiSearch } from 'react-icons/fi';
import raju from '../assets/raju.jpg';
import asif from '../assets/asif.png';
const Community = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'CodeRow UI Components',
      description: 'A collection of reusable React components with Tailwind CSS styling',
      tech: ['React', 'Tailwind'],
      difficulty: 'Beginner',
      issues: 12,
      stars: 245,
      forks: 68,
      contributors: 15,
      tags: ['frontend', 'ui', 'components']
    },
    {
      id: 2,
      name: 'CodeRow Backend API',
      description: 'REST API for CodeRow platform built with Node.js and Express',
      tech: ['Node.js', 'Express'],
      difficulty: 'Intermediate',
      issues: 8,
      stars: 189,
      forks: 45,
      contributors: 8,
      tags: ['backend', 'api', 'nodejs']
    },
    {
      id: 3,
      name: 'CodeRow Documentation',
      description: 'Official documentation and guides for CodeRow platform',
      tech: ['Markdown', 'React'],
      difficulty: 'Beginner',
      issues: 5,
      stars: 156,
      forks: 34,
      contributors: 25,
      tags: ['documentation', 'guides']
    }
  ];

  const developers = [
    {
      id: 1,
      name: 'Yashwant Sharma',
      role: 'Full Stack Developer',
      contributions: 15,
      projects: 8,
      skills: ['React', 'Node.js', 'MongoDB'],
      avatar: 'https://avatars.githubusercontent.com/u/121419415?s=400&u=d13a31ba3b434eb012a8cdfde133d34209f3afb0&v=4'
    },
    {
      id: 2,
      name: 'Asif Hussain',
      role: 'Full Stack Developer',
      contributions: 17,
      projects: 15,
      skills: ['React', 'Node.js', 'MongoDB'],
      avatar: asif,
    },
    {
      id: 3,
      name: 'Raju Kumar',
      role: 'Grafic Designer',
      contributions: 5,
      projects: 5,
      skills: ['figma', 'c', 'c++'],
      avatar: raju
    }
  ];

  const techFilters = ['all', 'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech === 'all' || project.tech.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dev.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              Open Source Community
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Contribute to projects, connect with developers, and grow together
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects or developers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/30 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="flex gap-2">
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedTech === tech
                    ? 'bg-accent text-white border-accent'
                    : 'border-white/10 text-gray-400 hover:border-accent/50'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-4 px-4 text-lg font-medium border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-accent text-accent'
                : 'border-transparent text-gray-400 hover:text-text'
            }`}
          >
            Open Source Projects
          </button>
          <button
            onClick={() => setActiveTab('developers')}
            className={`pb-4 px-4 text-lg font-medium border-b-2 transition-colors ${
              activeTab === 'developers'
                ? 'border-accent text-accent'
                : 'border-transparent text-gray-400 hover:text-text'
            }`}
          >
            Active Developers
          </button>
        </div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/30 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  <button className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors">
                    <FiGithub size={20} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                    {project.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <FiStar />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiGitBranch />
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMessageCircle />
                    <span>{project.issues} issues</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUsers />
                    <span>{project.contributors}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Developers Grid */}
        {activeTab === 'developers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevelopers.map((dev) => (
              <motion.div
                key={dev.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/30 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={dev.avatar}
                    alt={dev.name}
                    className="w-16 h-16 rounded-full border-2 border-accent"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-text">
                      {dev.name}
                    </h3>
                    <p className="text-gray-400">{dev.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiCode />
                      <span>{dev.contributions} contributions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiGitBranch />
                      <span>{dev.projects} projects</span>
                    </div>
                  </div>
                  <button className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors">
                    <FiHeart />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
