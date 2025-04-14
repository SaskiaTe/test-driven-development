export function isValid(isbn13: string): boolean {
  isbn13 = isbn13.replace(/\s+/g, '').toLowerCase();
  
  if (isbn13.length !== 13 || !/^\d{13}$/.test(isbn13)) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 12; i++) {
    let digit = parseInt(isbn13.charAt(i), 10);
    if (i % 2 === 0) {
      sum += digit; 
    } else {
      sum += digit * 3;  
    }
  }

  let checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit === parseInt(isbn13.charAt(12), 10);
}
