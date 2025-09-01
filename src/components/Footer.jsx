import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Bagian Kiri: Logo & Tagline */}
          <div>
            <h3 className="text-lg font-bold text-white">Envoyou</h3>
            <p className="mt-1 text-slate-400">Empowering sustainable decisions with data.</p>
          </div>

          {/* Bagian Tengah: Link Navigasi */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-white mb-2">Links</h4>
            <Link to="/documentation" className="text-slate-400 hover:text-white transition-colors">Documentation</Link>
            <a href="https://github.com/hk-dev13/ENVOYou-page/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">License</a>
            <a href="#" id="contribute-link-footer" className="text-slate-400 hover:text-white transition-colors">Contribute</a>
          </div>

          {/* Bagian Kanan: Media Sosial */}
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