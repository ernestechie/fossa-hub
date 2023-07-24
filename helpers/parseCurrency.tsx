export const parseCurrency = (amount: number) => {
  return amount.toLocaleString();
};

export const parseNigerianNaira = (value: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value);
