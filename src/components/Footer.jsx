import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Resources', href: '/resources' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Support: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Help Center', href: '/help' },
      { name: 'Status', href: '/status' },
    ],
    Legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Licenses', href: '/licenses' },
    ],
  };

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com' },
    { icon: <FiTwitter />, href: 'https://twitter.com' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com' },
    { icon: <FiYoutube />, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-text tracking-wider uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="pb-12 border-b border-white/10">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-text tracking-wider uppercase mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new courses and features
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-text focus:outline-none focus:border-accent/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-8 mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-accent">
              CodeRow
            </Link>
            <p className="text-gray-400">
              © {currentYear} CodeRow. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200 text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
