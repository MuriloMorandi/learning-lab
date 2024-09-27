import { formatCurrency, formatPercentage } from '../src/number';

describe('formatCurrency', () => {
  it('should format the number as BRL currency', () => {
    expect(formatCurrency(1234.56)).toBe('R$ 1.234,56');
    expect(formatCurrency(0)).toBe('R$ 0,00');
    expect(formatCurrency(1000000)).toBe('R$ 1.000.000,00');
  });
});

describe('formatPercentage', () => {
  it('should format the number as percentage with 2 decimal places', () => {
    expect(formatPercentage(0.1234)).toBe('12,34%');
    expect(formatPercentage(1)).toBe('100,00%');
    expect(formatPercentage(0)).toBe('0,00%');
  });
});
