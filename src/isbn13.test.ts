import { isValid } from './isbn13';

describe('isValid function', () => {
  test('should return true for a valid ISBN-13', () => {
    expect(isValid('9780306406157')).toBe(true);  
  });

  test('should return false for an invalid ISBN-13', () => {
    expect(isValid('9780306406158')).toBe(false); 
  });

  test('should return false for an ISBN-13 with incorrect length', () => {
    expect(isValid('978030640615')).toBe(false); 
  });

  test('should return false for an ISBN-13 with non-numeric characters', () => {
    expect(isValid('97803X6406157')).toBe(false);  
  });

  test('should return true for another valid ISBN-13', () => {
    expect(isValid('9791091405001')).toBe(true);  
  });

  test('should return false for ISBN-13 with incorrect check digit', () => {
    expect(isValid('9783161484100')).toBe(false);  
  });

  test('should return true for ISBN-13 with country prefix 979', () => {
    expect(isValid('9791134312856')).toBe(true);  
  });

  test('should return false for ISBN-13 with invalid country prefix', () => {
    expect(isValid('9812345678901')).toBe(false);  
  });
});
