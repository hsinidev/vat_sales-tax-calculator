import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import TaxCalculatorTool from './components/TaxCalculatorTool';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        
        {/* Hero & Calculator Section */}
        <section className="w-full max-w-2xl mb-20 relative">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[140%] h-[140%] bg-indigo-600/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
            
            <div className="text-center mb-10 space-y-4">
                <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    VAT & Sales Tax
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">Calculator</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
                    Instantly add or remove tax with precision. The friendly, accurate financial tool for everyone.
                </p>
            </div>

            <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <TaxCalculatorTool />
            </div>
        </section>

        {/* SEO Article Section */}
        <section className="w-full max-w-4xl border-t border-white/10 pt-16">
            <SeoArticle />
        </section>
          
      </div>
    </ThemeLayout>
  );
};

export default App;