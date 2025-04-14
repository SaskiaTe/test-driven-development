import { calcPoints, possibleCheckout } from './darts';

describe('calcPoints', () => {
  test('should calculate score correctly for a full round', () => {
    expect(calcPoints('3 20 1 17 2 4')).toBe(85); 
  });

  test('should calculate score correctly for another full round', () => {
    expect(calcPoints('2 15 1 18 3 19')).toBe(105); 
  });

  test('should ignore incomplete throws', () => {
    expect(calcPoints('3 20 1 5')).toBe(65); 
  });

  test('should handle empty input', () => {
    expect(calcPoints('')).toBe(0);
  });

  test('should ignore invalid input pairs', () => {
    expect(calcPoints('2 20 1')).toBe(40); 
  });
});

describe('possibleCheckout', () => {
  test('should return correct double for valid checkout', () => {
    expect(possibleCheckout(477)).toBe('Double 12'); 
  });

  test('should return null for odd remaining points', () => {
    expect(possibleCheckout(480)).toBeNull(); 
  });

  test('should return null for even but too high double', () => {
    expect(possibleCheckout(441)).toBeNull(); 
  });

  test('should return Double 1 for remaining 2 points', () => {
    expect(possibleCheckout(499)).toBe('Double 1');
  });

  test('should return null if x >= 501', () => {
    expect(possibleCheckout(501)).toBeNull();
    expect(possibleCheckout(510)).toBeNull();
  });
});
