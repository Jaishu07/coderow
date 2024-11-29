import { motion } from 'framer-motion';
import { CodeBracketIcon, AcademicCapIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Interactive Courses',
    description: 'Learn by doing with our hands-on interactive coding exercises and real-time feedback.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Expert Mentorship',
    description: 'Get guidance from industry professionals and experienced developers.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Community Support',
    description: 'Join a thriving community of developers to share knowledge and grow together.',
    icon: UserGroupIcon,
  },
  {
    name: 'Career Growth',
    description: 'Build a portfolio of projects and get career guidance to land your dream job.',
    icon: RocketLaunchIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-text mb-4"
          >
            Why Choose <span className="text-accent">CodeRow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Discover the features that make our platform the best choice for your coding journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
