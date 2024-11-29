import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiBook, FiClock, FiStar, FiUsers, FiAward, FiFilter, FiPlay } from 'react-icons/fi';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'React Mastery',
      description: 'Master modern React with hooks, context, and advanced patterns',
      level: 'Intermediate',
      duration: '12 hours',
      lessons: 24,
      rating: 4.8,
      students: 1250,
      instructor: 'Sarah Chen',
      image: 'https://i.pravatar.cc/150?img=1',
      tags: ['React', 'JavaScript', 'Frontend'],
      chapters: [
        'Introduction to React',
        'React Hooks Deep Dive',
        'Context API & State Management',
        'Performance Optimization',
        'Advanced Patterns'
      ],
      price: 'Free'
    },
    {
      id: 2,
      title: 'Node.js Backend Development',
      description: 'Build scalable APIs and microservices with Node.js',
      level: 'Advanced',
      duration: '15 hours',
      lessons: 30,
      rating: 4.9,
      students: 850,
      instructor: 'Alex Rodriguez',
      image: 'https://i.pravatar.cc/150?img=2',
      tags: ['Node.js', 'Express', 'Backend'],
      chapters: [
        'Node.js Fundamentals',
        'Express.js Framework',
        'RESTful API Design',
        'Database Integration',
        'Authentication & Security'
      ],
      price: 'Free'
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      description: 'Complete guide to modern full stack development',
      level: 'Beginner',
      duration: '20 hours',
      lessons: 40,
      rating: 4.7,
      students: 2100,
      instructor: 'Emma Wilson',
      image: 'https://i.pravatar.cc/150?img=3',
      tags: ['React', 'Node.js', 'MongoDB'],
      chapters: [
        'Web Development Basics',
        'Frontend with React',
        'Backend with Node.js',
        'Database Design',
        'Deployment & DevOps'
      ],
      price: 'Free'
    }
  ];

  const techFilters = ['all', 'React', 'Node.js', 'JavaScript', 'Frontend', 'Backend'];
  const levelFilters = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTech = selectedTech === 'all' || course.tags.includes(selectedTech);
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesTech && matchesLevel;
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
              Explore Courses
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Learn from expert-curated courses and advance your coding skills
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search courses by title, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/30 border border-white/10 rounded-lg pl-12 pr-4 py-4 text-text focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Technology</label>
              <div className="flex flex-wrap gap-2">
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
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Level</label>
              <div className="flex flex-wrap gap-2">
                {levelFilters.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedLevel === level
                        ? 'bg-accent text-white border-accent'
                        : 'border-white/10 text-gray-400 hover:border-accent/50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary/30 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors"
            >
              <div className="relative h-48 bg-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiPlay className="text-6xl text-accent opacity-50" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={course.image}
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full border-2 border-accent"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-text">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm">by {course.instructor}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-400 text-sm mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FiClock />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiBook />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiStar className="text-yellow-500" />
                    <span className="text-text">{course.rating}</span>
                    <span className="text-gray-400">({course.students})</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-medium text-text">Course Content</h4>
                  {course.chapters.map((chapter, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {chapter}
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors flex items-center justify-center gap-2">
                  <FiPlay />
                  Start Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
