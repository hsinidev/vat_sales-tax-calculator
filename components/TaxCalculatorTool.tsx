import React, { useState, useMemo, useCallback } from 'react';
import { addTax, removeTax } from '../utils/TaxMath';

type Operation = 'add' | 'remove';

interface Result {
  originalPrice: number;
  taxAmount: number;
  finalPrice: number;
}

const TaxCalculatorTool: React.FC = () => {
  const [price, setPrice] = useState('100');
  const [taxRate, setTaxRate] = useState('20');
  const [operation, setOperation] = useState<Operation>('add');
  
  const handleCalculation = useCallback(() => {
    const priceNum = parseFloat(price);
    const taxRateNum = parseFloat(taxRate);

    if (isNaN(priceNum) || isNaN(taxRateNum) || priceNum < 0 || taxRateNum < 0) {
      return null;
    }

    if (operation === 'add') {
      return addTax(priceNum, taxRateNum);
    } else {
      return removeTax(priceNum, taxRateNum);
    }
  }, [price, taxRate, operation]);

  const result = useMemo<Result | null>(handleCalculation, [handleCalculation]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="bg-gray-900/60 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(79,70,229,0.15)] w-full max-w-lg mx-auto">
      <div className="space-y-6">
        {/* Price Input */}
        <div>
          <label htmlFor="price" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Amount</label>
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <span className="text-indigo-400 font-bold text-lg">$</span>
            </div>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-800/80 border border-gray-600 rounded-xl py-4 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg font-mono shadow-inner group-hover:bg-gray-800"
            />
          </div>
        </div>

        {/* Tax Rate Input */}
        <div>
          <label htmlFor="taxRate" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Tax Rate (%)</label>
          <div className="relative group">
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <span className="text-indigo-400 font-bold">%</span>
            </div>
            <input
              type="number"
              id="taxRate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="e.g., 20"
              className="w-full bg-gray-800/80 border border-gray-600 rounded-xl py-4 pl-4 pr-10 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg font-mono shadow-inner group-hover:bg-gray-800"
            />
          </div>
        </div>
        
        {/* Operation Selector */}
        <fieldset>
          <legend className="sr-only">Operation</legend>
          <div className="grid grid-cols-2 gap-4 p-1 bg-gray-800/80 rounded-xl">
            {(['add', 'remove'] as Operation[]).map(op => (
              <div key={op} className="relative">
                <input
                  type="radio"
                  id={op}
                  name="operation"
                  value={op}
                  checked={operation === op}
                  onChange={() => setOperation(op)}
                  className="sr-only"
                />
                <label
                  htmlFor={op}
                  className={`cursor-pointer block w-full text-center py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                    operation === op
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {op === 'add' ? 'Add Tax' : 'Remove Tax'}
                </label>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center flex items-center justify-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             {operation === 'add' ? 'Calculates Gross from Net' : 'Calculates Net from Gross'}
          </p>
        </fieldset>
      </div>

      {/* Results Display */}
      {result && (
        <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
          <div className="space-y-4">
            <div className="flex justify-between items-baseline px-2">
              <span className="text-gray-400 text-sm">Original Price</span>
              <span className="font-mono text-lg text-gray-200">{formatCurrency(result.originalPrice)}</span>
            </div>
            <div className="flex justify-between items-baseline px-2">
              <span className="text-gray-400 text-sm">Tax Amount</span>
              <span className="font-mono text-lg text-pink-400 font-bold">+ {formatCurrency(result.taxAmount)}</span>
            </div>
            <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl border border-indigo-500/30 shadow-lg mt-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="font-bold text-gray-100 z-10">{operation === 'add' ? 'Gross Price' : 'Net Price'}</span>
              <span className="font-orbitron font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 z-10">{formatCurrency(result.finalPrice)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxCalculatorTool;