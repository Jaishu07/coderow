import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Community from './pages/Community';
import ApiDocs from './pages/ApiDocs';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resources from './pages/Resources';
import Explore from './pages/Explore';
import AuthModal from './components/Auth/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-primary text-text">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/docs" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <Documentation />
                <Footer />
              </>
            } />
            <Route path="/resources" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <Resources />
                <Footer />
              </>
            } />
            <Route path="/explore" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <Explore />
                <Footer />
              </>
            } />
            <Route path="/community" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <Community />
                <Footer />
              </>
            } />
            <Route path="/api" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <ApiDocs />
                <Footer />
              </>
            } />
            <Route path="/profile" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <Profile />
                <Footer />
              </>
            } />
            <Route path="/" element={
              <>
                <Navbar onLogin={() => openAuthModal('login')} onSignup={() => openAuthModal('signup')} />
                <Home />
                <Footer />
              </>
            } />
          </Routes>
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            initialMode={authModalMode}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
