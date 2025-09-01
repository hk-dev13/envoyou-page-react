import React, { useState, useRef } from 'react';

const CodeExampleSection = () => {
  // State untuk mengelola teks tombol
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  
  // Ref untuk mendapatkan akses langsung ke elemen 'pre' tanpa manipulasi DOM
  const codeBlockRef = useRef(null);

  const handleCopy = () => {
    // Pastikan ref sudah terhubung ke elemen
    if (codeBlockRef.current) {
      const codeToCopy = codeBlockRef.current.innerText;
      
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopyButtonText('Copied!');
        // Mengembalikan teks tombol ke 'Copy' setelah 2 detik
        setTimeout(() => {
          setCopyButtonText('Copy');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        setCopyButtonText('Failed');
      });
    }
  };

  return (
    <section id="docs" className="py-20 sm:py-32 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-up">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Start in Minutes</h3>
                        <p className="mt-4 text-lg text-slate-400">
                            Our API is designed for simplicity and power. Get complex global emissions data with a single, simple API call. See our full documentation to explore all available possibilities and data sources.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                <p className="text-slate-300">Predictable and easily parseable JSON responses, accelerating your application development.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                               <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                <p className="text-slate-300">Internal Caching and Pagination support to ensure optimal performance and fast response times.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-[#0D1117] rounded-xl border border-slate-800 overflow-hidden">
                            <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                                <span className="text-sm text-slate-400">Example: Get emissions data</span>
                                <button id="copyBtn" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    <span id="copyBtnText">Copy</span>
                                </button>
                            </div>
                            <pre className="p-6 text-sm overflow-x-auto" id="codeBlock"><code className="language-bash"><span className="text-pink-400">curl</span> <span className="text-sky-300">-X</span> GET \
  <span className="text-sky-300">-H</span> <span className="text-emerald-300">"Authorization: Bearer &lt;YOUR_API_KEY&gt;"</span> \
  <span className="text-slate-100">"https://api.envoyou.com/v1/global/cevs/CompanyName"</span></code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default CodeExampleSection;