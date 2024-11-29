import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Card */}
        <div className="bg-secondary/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold text-accent mb-2 inline-block">
              CodeRow
            </Link>
            <h2 className="text-2xl font-bold text-text">Welcome Back</h2>
            <p className="text-gray-400 mt-2">Sign in to continue learning</p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <FcGoogle className="text-xl" />
              <span className="text-sm font-medium text-text">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200">
              <FiGithub className="text-xl" />
              <span className="text-sm font-medium text-text">GitHub</span>
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-secondary/80 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors duration-200"
                  required
                />
              </div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors duration-200"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 bg-white/5 border border-white/10 rounded" />
                <span className="ml-2 text-gray-400">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-accent hover:text-accent-dark transition-colors duration-200">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              Sign in
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-accent hover:text-accent-dark transition-colors duration-200">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
