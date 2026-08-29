// Shared utility functions
export const formatPrice = (price: number, decimals = 2): string => {
  return price.toFixed(decimals);
};

export const formatPercentage = (value: number, decimals = 2): string => {
  return (value * 100).toFixed(decimals) + '%';
};