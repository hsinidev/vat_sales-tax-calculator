
interface TaxCalculationResult {
  originalPrice: number;
  taxAmount: number;
  finalPrice: number;
}

/**
 * Calculates the gross price by adding tax to a net price.
 * @param netPrice - The price before tax.
 *- @param taxRate - The tax rate in percent (e.g., 20 for 20%).
 * @returns An object containing the original price, tax amount, and final gross price.
 */
export const addTax = (netPrice: number, taxRate: number): TaxCalculationResult => {
  const taxAmount = netPrice * (taxRate / 100);
  const grossPrice = netPrice + taxAmount;
  
  return {
    originalPrice: netPrice,
    taxAmount: taxAmount,
    finalPrice: grossPrice,
  };
};

/**
 * Calculates the net price by removing tax from a gross price.
 * @param grossPrice - The price including tax.
 * @param taxRate - The tax rate in percent (e.g., 20 for 20%).
 * @returns An object containing the original price, tax amount, and final net price.
 */
export const removeTax = (grossPrice: number, taxRate: number): TaxCalculationResult => {
  const netPrice = grossPrice / (1 + (taxRate / 100));
  const taxAmount = grossPrice - netPrice;
  
  return {
    originalPrice: grossPrice,
    taxAmount: taxAmount,
    finalPrice: netPrice,
  };
};
