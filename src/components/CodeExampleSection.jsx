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
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Start in Minutes</h3>
            <p className="mt-4 text-lg text-slate-400">
              Our API is designed for simplicity and power. Get complex global emissions data with a single, simple API call.
            </p>
            {/* ... Konten lainnya ... */}
          </div>
          <div>
            <div className="bg-[#0D1117] rounded-xl border border-slate-800 overflow-hidden">
              <div className="px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-400">Example: Get emissions data</span>
                <button 
                  onClick={handleCopy} 
                  className={`text-sm hover:text-white transition-colors flex items-center space-x-1 ${copyButtonText === 'Copied!' ? 'text-emerald-400' : 'text-slate-400'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span>{copyButtonText}</span>
                </button>
              </div>
              <pre ref={codeBlockRef} className="p-6 text-sm overflow-x-auto">
                <code className="language-bash">
                  <span className="text-pink-400">curl</span> <span className="text-sky-300">-X</span> GET<br />
                  <span className="text-sky-300">-H</span> <span className="text-emerald-300">"Authorization: Bearer &lt;YOUR_API_KEY&gt;"</span><br />
                  <span className="text-slate-100">"https://api.envoyou.com/v1/global/cevs/CompanyName"</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExampleSection;