import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative z-10"
        >
          {mode === 'login' ? (
            <div>
              <LoginForm onClose={onClose} />
              <p className="text-center mt-4 text-sm text-white/60">
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-accent hover:text-accent/80 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          ) : (
            <div>
              <SignupForm onClose={onClose} />
              <p className="text-center mt-4 text-sm text-white/60">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-accent hover:text-accent/80 font-medium"
                >
                  Log in
                </button>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;
