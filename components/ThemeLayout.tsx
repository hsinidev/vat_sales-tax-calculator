import React, { useState, ReactNode } from 'react';

interface ThemeLayoutProps {
  children: ReactNode;
}

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
    <div 
      className="bg-gray-900 border border-indigo-500/30 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col relative overflow-hidden"
      style={{ boxShadow: '0 0 50px rgba(79, 70, 229, 0.2)' }}
    >
        {/* Modal Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/20 z-0 pointer-events-none"></div>

      <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center z-10 shrink-0">
        <h2 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-6 md:p-8 text-gray-300 space-y-4 overflow-y-auto custom-scrollbar z-10">
        {content}
      </div>
    </div>
  </div>
);

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: { [key: string]: { title: string; content: ReactNode } } = {
    about: { 
        title: "About Us", 
        content: (
            <div className="space-y-4">
                <p>Welcome to <strong>doodax.com</strong>, your premier destination for accurate, instant, and secure financial calculations. Built with modern web technologies, this VAT/Sales Tax Calculator is designed to streamline the workflow of freelancers, small business owners, and savvy consumers around the globe.</p>
                <p>This project is proudly powered by <strong>HSINI MOHAMED</strong>, a dedicated developer passionate about creating open-source tools that solve real-world problems. Our mission is to democratize access to financial utility tools without the clutter of ads or paid subscriptions.</p>
                <h4 className="font-bold text-white mt-4">Contact Information</h4>
                <ul className="list-disc list-inside">
                    <li>Website: <a href="https://doodax.com" className="text-indigo-400 hover:underline">doodax.com</a></li>
                    <li>Email: <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a></li>
                </ul>
            </div>
        ) 
    },
    contact: { 
        title: "Contact Support", 
        content: (
            <div className="space-y-4">
                <p>We value your feedback and are here to help. Whether you have found a bug, have a feature request, or just want to say hello, please don't hesitate to reach out.</p>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <p className="mb-2"><span className="text-gray-400">Developer:</span> <span className="text-white font-semibold">HSINI MOHAMED</span></p>
                    <p className="mb-2"><span className="text-gray-400">Email:</span> <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a></p>
                    <p><span className="text-gray-400">Website:</span> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">doodax.com</a></p>
                </div>
                <p className="text-sm text-gray-500">We aim to respond to all inquiries within 24-48 hours.</p>
            </div>
        ) 
    },
    guide: { 
        title: "User Guide", 
        content: (
            <div className="space-y-4">
                <p>Mastering sales tax calculations has never been easier. Follow this simple guide to use our tool effectively:</p>
                
                <h3 className="font-bold text-lg text-white mt-4">1. Adding Tax (Net to Gross)</h3>
                <p>Use this mode when you have a price <em>before</em> tax and want to find the final total.</p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                    <li>Enter the net amount in the <strong>Amount</strong> field.</li>
                    <li>Enter your local tax percentage in the <strong>Tax Rate</strong> field.</li>
                    <li>Ensure the <strong>Add Tax</strong> button is selected.</li>
                    <li>The result will show the Tax Amount and the Final Gross Price.</li>
                </ul>

                <h3 className="font-bold text-lg text-white mt-4">2. Removing Tax (Gross to Net)</h3>
                <p>Use this mode when you have a final price (e.g., from a receipt) and need to know the original price before tax.</p>
                <ul className="list-decimal list-inside ml-4 space-y-1">
                    <li>Enter the total amount in the <strong>Amount</strong> field.</li>
                    <li>Enter the applicable tax percentage.</li>
                    <li>Select the <strong>Remove Tax</strong> button.</li>
                    <li>The tool calculates the Tax portion and the Original Net Price.</li>
                </ul>
            </div>
        ) 
    },
    privacy: { 
        title: "Privacy Policy", 
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p><strong>Effective Date:</strong> October 27, 2023</p>
                <p>At <strong>doodax.com</strong>, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by doodax.com and how we use it.</p>
                
                <h4 className="font-bold text-white mt-4">Data Collection & Client-Side Processing</h4>
                <p>This application operates as a <strong>client-side tool</strong>. All calculations (VAT, Sales Tax, math operations) are performed directly within your web browser using JavaScript. <strong>We do not transmit, store, or save any financial data, prices, or tax rates you enter into the calculator to any external server or database.</strong> Your data never leaves your device.</p>
                
                <h4 className="font-bold text-white mt-4">Log Files</h4>
                <p>doodax.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>

                <h4 className="font-bold text-white mt-4">Cookies</h4>
                <p>Like any other website, doodax.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                <h4 className="font-bold text-white mt-4">Contact</h4>
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:hsini.web@gmail.com" className="text-indigo-400">hsini.web@gmail.com</a>.</p>
            </div>
        ) 
    },
    terms: { 
        title: "Terms of Service", 
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p><strong>Welcome to doodax.com!</strong></p>
                <p>These terms and conditions outline the rules and regulations for the use of doodax.com's Website.</p>
                
                <h4 className="font-bold text-white mt-4">1. Disclaimer of Warranties</h4>
                <p>This tool is provided "as is," with all faults, and doodax.com makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you. While we strive for mathematical accuracy, tax laws change frequently. Users should verify results with a qualified accountant for official purposes.</p>

                <h4 className="font-bold text-white mt-4">2. Limitation of Liability</h4>
                <p>In no event shall doodax.com, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website. doodax.com, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.</p>

                <h4 className="font-bold text-white mt-4">3. Intellectual Property Rights</h4>
                <p>Other than the content you own, under these Terms, doodax.com and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>
            </div>
        ) 
    },
    dmca: { 
        title: "DMCA Policy", 
        content: (
            <div className="space-y-4">
                <p><strong>doodax.com</strong> respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
                
                <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email to <a href="mailto:hsini.web@gmail.com" className="text-indigo-400">hsini.web@gmail.com</a> and include in your notice a detailed description of the alleged infringement.</p>
                
                <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>
            </div>
        ) 
    },
  };

  const navLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  return (
    <div className="relative min-h-screen bg-[#050510] text-gray-100 overflow-hidden font-inter selection:bg-indigo-500 selection:text-white">
      
      {/* --- Cosmic Background Animation --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1B1B3A] via-[#050510] to-[#000000]"></div>
        
        {/* Stars */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        
        {/* Nebula/Aurora Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-900/10 rounded-full blur-[100px] animate-blob"></div>
      </div>
      
      <style>{`
        .stars {
          width: 1px; height: 1px;
          background: transparent;
          box-shadow: 100px 100px #FFF, 200px 300px #FFF, 500px 100px #FFF, 400px 600px #FFF, 900px 200px #FFF, 1200px 400px #FFF, 800px 600px #FFF;
          animation: animStar 50s linear infinite;
        }
        .stars2 {
          width: 2px; height: 2px;
          background: transparent;
          box-shadow: 150px 250px #FFF, 600px 150px #FFF, 1000px 450px #FFF, 300px 800px #FFF, 1100px 700px #FFF;
          animation: animStar 100s linear infinite;
        }
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 15s infinite; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.25s ease-out forwards; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { bg: #1f2937; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #4b5563; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #6b7280; }
      `}</style>
      
      <div className="relative z-20 flex flex-col min-h-screen">
        <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-white/5 backdrop-blur-sm sticky top-0 z-40 bg-[#050510]/60">
          <nav className="container mx-auto flex flex-wrap justify-between items-center">
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 cursor-pointer" onClick={() => window.location.reload()}>
                Doodax
            </div>
            <div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
                {navLinks.map(link => (
                <button 
                    key={link} 
                    onClick={() => setActiveModal(link.split(' ')[0].toLowerCase())} 
                    className="text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] px-2 py-1 rounded"
                >
                    {link}
                </button>
                ))}
            </div>
          </nav>
        </header>

        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <footer className="py-8 px-4 text-center border-t border-white/5 bg-[#03030a]/80 backdrop-blur-md text-sm text-gray-500">
          <div className="container mx-auto space-y-4">
            <div className="flex justify-center space-x-6">
                <a href="https://doodax.com" className="hover:text-indigo-400 transition-colors">Home</a>
                <span className="text-gray-700">•</span>
                <button onClick={() => setActiveModal('privacy')} className="hover:text-indigo-400 transition-colors">Privacy</button>
                <span className="text-gray-700">•</span>
                <button onClick={() => setActiveModal('contact')} className="hover:text-indigo-400 transition-colors">Contact</button>
            </div>
            
            <div className="pt-4 border-t border-gray-800/50 flex flex-col items-center">
                <p className="mb-2">© {new Date().getFullYear()} Doodax. All rights reserved.</p>
                <p className="flex items-center gap-2">
                    Powered by 
                    <a 
                        href="https://github.com/hsinidev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold hover:scale-105 transition-transform inline-flex items-center gap-1" 
                        style={{color: '#FFD700', textShadow: '0 0 10px rgba(255,215,0,0.3)'}}
                    >
                        HSINI MOHAMED
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </p>
            </div>
          </div>
        </footer>
      </div>
      
      {activeModal && modalContent[activeModal] && (
        <Modal 
          title={modalContent[activeModal].title}
          content={modalContent[activeModal].content}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

export default ThemeLayout;