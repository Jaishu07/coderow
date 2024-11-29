import { motion } from 'framer-motion';
import Features from '../components/Features';
import CodeShowcase from '../components/CodeShowcase';
import { FiGithub, FiLinkedin, FiTwitter, FiCode, FiTerminal, FiFolder, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import raju from '../assets/raju.jpg';
import asif from '../assets/asif.png';

const Home = () => {
  const founder = {
    name: 'Yashwant Sharma',
    role: 'Founder & CEO',
    bio: 'Passionate about building tools that empower developers to create amazing software.',
    avatar: 'https://avatars.githubusercontent.com/u/121419415?s=400&u=d13a31ba3b434eb012a8cdfde133d34209f3afb0&v=4',
    social: {
      github: 'https://github.com/Jaishu07',
      linkedin: 'https://www.linkedin.com/in/yashwantharma/',
      twitter: 'https://x.com/yashwant11010?amp;s=09'
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-primary overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        {/* Main content */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full border border-accent/20 bg-accent/5"
              >
                <span className="text-accent">🚀 Welcome to CodeRow</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text">
                Build Your Future with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                  Modern Development
                </span>
              </h1>

              <p className="text-lg text-gray-400">
                Join our vibrant community of developers. Learn, collaborate, and build amazing projects
                with cutting-edge technologies and expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <FiCode className="ml-2" />
                </Link>
                <Link
                  to="/community"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 font-semibold transition-colors"
                >
                  Join Community
                  <FiGithub className="ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Right column - Code Editor Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative bg-secondary/30 rounded-xl backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Desktop Bar */}
                <div className="bg-secondary/50 rounded-t-xl p-4 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <FiTerminal className="w-4 h-4" />
                        <span>Terminal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiFolder className="w-4 h-4" />
                        <span>coderow</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6">
                  <div className="grid grid-cols-12 gap-4">
                    {/* File Explorer */}
                    <div className="col-span-3 border-r border-white/10 pr-4">
                      <div className="text-sm text-gray-400 mb-2">Explorer</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-accent">
                          <FiFolder className="w-4 h-4" />
                          <span>src</span>
                        </div>
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center gap-2 text-purple-400">
                            <FiCode className="w-4 h-4" />
                            <span>App.jsx</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-400">
                            <FiCode className="w-4 h-4" />
                            <span>Home.jsx</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Code Editor */}
                    <div className="col-span-9 font-mono text-sm">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <div className="text-gray-400">// Welcome to CodeRow</div>
                        <div>
                          <span className="text-purple-400">const</span>
                          <span className="text-text"> developer</span>
                          <span className="text-accent"> =</span>
                          <span className="text-text"> {`{`}</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-green-400">name:</span>
                          <span className="text-yellow-300"> '{founder.name}'</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-green-400">role:</span>
                          <span className="text-yellow-300"> '{founder.role}'</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-green-400">skills:</span>
                          <span className="text-text"> [</span>
                          <span className="text-yellow-300">'React'</span>,
                          <span className="text-yellow-300"> 'Node.js'</span>,
                          <span className="text-yellow-300"> 'TypeScript'</span>
                          <span className="text-text">]</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-green-400">links:</span>
                          <span className="text-text"> {`{`}</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-green-400">github:</span>
                          <span className="text-yellow-300"> '{founder.social.github}'</span>,
                        </div>
                        <div className="pl-8">
                          <span className="text-green-400">linkedin:</span>
                          <span className="text-yellow-300"> '{founder.social.linkedin}'</span>,
                        </div>
                        <div className="pl-4 text-text">{`}`},</div>
                        <div className="text-text">{`}`}</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Terminal */}
                <div className="border-t border-white/10 p-4">
                  <div className="font-mono text-sm">
                    <span className="text-accent">$</span>
                    <span className="text-gray-400"> npm run dev</span>
                    <div className="text-green-400 mt-1">Ready on http://coderow 🚀 domain.....</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 top-1/4 px-4 py-2 rounded-lg bg-accent/20 backdrop-blur-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-semibold text-accent">React</span>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/4 px-4 py-2 rounded-lg bg-purple-500/20 backdrop-blur-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="font-semibold text-purple-400">TypeScript</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Community Section - Discord Style */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-text mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect with developers, share your projects, and learn together in our vibrant community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chat Channels */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary/50 rounded-lg p-6 backdrop-blur-xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FiCode className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text">Code Channels</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  #react-help
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  #javascript
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  #typescript
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  #project-showcase
                </li>
              </ul>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary/50 rounded-lg p-6 backdrop-blur-xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <FiUsers className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-text">Active Community</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Online Members</span>
                  <span className="text-green-500 font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Daily Messages</span>
                  <span className="text-purple-500 font-semibold">5K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active Projects</span>
                  <span className="text-accent font-semibold">250+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Code Reviews</span>
                  <span className="text-yellow-500 font-semibold">100+</span>
                </div>
              </div>
            </motion.div>

            {/* Join Now */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary/50 rounded-lg p-6 backdrop-blur-xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FiGithub className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text">Join Now</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Get instant access to our community of developers. Share your knowledge, ask questions, and grow together.
              </p>
              <Link
                to="/community"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Join Community
                <FiUsers className="ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Member Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center -space-x-4">
              <img
                src="	https://avatars.githubusercontent.com/u/121419415?…00&u=d13a31ba3b434eb012a8cdfde133d34209f3afb0&v=4"
                alt="Member"
                className="w-12 h-12 rounded-full border-2 border-accent"
              />
              <img
                src={raju}
                alt="Member"
                className="w-12 h-12 rounded-full border-2 border-accent"
              />
              <img
                src={asif}
                alt="Member"
                className="w-12 h-12 rounded-full border-2 border-accent"
              />
              <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center text-accent font-semibold">
                +
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <CodeShowcase />

      {/* Founder Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text mb-4">Meet Our Founder</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto bg-primary/50 rounded-lg p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent">
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-text mb-2">{founder.name}</h3>
                <p className="text-accent mb-4">{founder.role}</p>
                <p className="text-gray-400 mb-6">{founder.bio}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <FiLinkedin size={24} />
                  </a>
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <FiTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
