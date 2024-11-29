import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiUsers, FiBook, FiGithub } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
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

            <p className="text-lg text-gray-400 max-w-xl">
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
                to="/documentation"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-accent/20 bg-accent/5 text-accent hover:bg-accent/10 transition-colors"
              >
                Read Docs
                <FiBook className="ml-2" />
              </Link>
            </div>

            {/* Stats with icons */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FiCode className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text">500+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <FiUsers className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text">50K+</div>
                  <div className="text-sm text-gray-400">Developers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <FiBook className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text">100+</div>
                  <div className="text-sm text-gray-400">Tutorials</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Visual content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Code editor mockup */}
            <div className="relative bg-secondary/30 rounded-xl p-6 backdrop-blur-xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FiGithub className="w-4 h-4" />
                  <span>main</span>
                </div>
              </div>

              {/* Code content */}
              <div className="font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <div>
                    <span className="text-purple-400">const</span>
                    <span className="text-text"> developer</span>
                    <span className="text-accent"> =</span>
                    <span className="text-text"> {`{`}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">name:</span>
                    <span className="text-yellow-300"> 'Yashwant Sharma'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">role:</span>
                    <span className="text-yellow-300"> 'Full Stack Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">skills:</span>
                    <span className="text-text"> [</span>
                    <span className="text-yellow-300">'React'</span>,
                    <span className="text-yellow-300"> 'Node.js'</span>,
                    <span className="text-yellow-300"> 'TypeScript'</span>
                    <span className="text-text">]</span>,
                  </div>
                  <div className="text-text">{`}`}</div>
                </motion.div>
              </div>

              {/* Floating technology badges */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
