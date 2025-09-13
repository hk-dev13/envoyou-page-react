import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Left Section: Logo & Tagline */}
          <div>
            <h3 className="text-lg font-bold text-white">Envoyou</h3>
            <p className="mt-1 text-slate-400">Empowering sustainable decisions with data.</p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-white mb-2">Navigation</h4>
            <Link to="https://docs.envoyou.com/" className="text-slate-400 hover:text-white transition-colors">Documentation</Link>
            <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link>
            <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-white mb-2">Legal</h4>
            <Link to="/legal/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/legal/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <a href="https://github.com/hk-dev13/ENVOYou-page/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">License</a>
            <a href="https://github.com/hk-dev13/project-permit-api" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Contribute</a>
          </div>

          {/* Right Section: Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {/* GitHub, LinkedIn, etc. icons */}
              <a href="https://github.com/hk-dev13" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
              </a>
               <a href="https://www.linkedin.com/in/husni-kusuma/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/EnvoyouAPI" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <span className="sr-only">X</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/envoyou/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                         <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.341 2.52c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.133 2 12.775 2h.08zM12 3.993c-2.691 0-2.987.01-4.043.059-1.01.046-1.634.211-2.206.422a3.402 3.402 0 00-1.217 1.217c-.211.572-.376 1.196-.422 2.206-.049 1.056-.059 1.352-.059 4.043 0 2.691.01 2.987.059 4.043.046 1.01.211 1.634.422 2.206a3.402 3.402 0 001.217 1.217c.572.211 1.196.376 2.206.422 1.057.049 1.352.059 4.043.059 2.691 0 2.987-.01 4.043-.059 1.01-.046 1.634-.211 2.206-.422a3.402 3.402 0 001.217-1.217c.211-.572.376-1.196.422-2.206.049-1.056.059-1.352.059-4.043 0-2.691-.01-2.987-.059-4.043-.046-1.01-.211-1.634-.422-2.206a3.402 3.402 0 00-1.217-1.217c-.572-.211-1.196-.376-2.206-.422C15.314 4.003 15.018 3.993 12.344 3.993H12z" clipRule="evenodd" /><path fillRule="evenodd" d="M12 6.835a5.165 5.165 0 100 10.33 5.165 5.165 0 000-10.33zM12 15.335a3.335 3.335 0 110-6.67 3.335 3.335 0 010 6.67z" clipRule="evenodd" /><path d="M16.993 6.883a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
                    </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8">
            <div className="container mx-auto px-6 py-4 text-center text-slate-500 text-sm">
                &copy; 2025 Husni Kusuma (hk-dev13). All Rights Reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;