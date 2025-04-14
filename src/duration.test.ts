import { formatDuration } from './duration';

describe('formatDuration', () => {
    test('should return "33s" for 33 seconds', () => {
        expect(formatDuration(33)).toBe('33s');
    });

    test('should return "2m3s" for 123 seconds', () => {
        expect(formatDuration(123)).toBe('2m3s');
    });

    test('should return "8m20s" for 500 seconds', () => {
        expect(formatDuration(500)).toBe('8m20s');
    });

    test('should return "1h" for 3600 seconds', () => {
        expect(formatDuration(3600)).toBe('1h');
    });

    test('should return "1h6m39s" for 3999 seconds', () => {
        expect(formatDuration(3999)).toBe('1h6m39s');
    });

    test('should return "0s" for 0 seconds', () => {
        expect(formatDuration(0)).toBe('0s');
    });

    test('should throw an error for negative numbers', () => {
        expect(() => formatDuration(-1)).toThrowError('Negative time duration is not allowed');
    });

    test('should round seconds to nearest integer (e.g. 61.7 should be 62s)', () => {
        expect(formatDuration(61.7)).toBe('1m2s');
    });
});
