import { describe, it, expect } from 'vitest';
import { sum } from './index.js';

describe('sum', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('should add two negative numbers correctly', () => {
    expect(sum(-5, -3)).toBe(-8);
  });

  it('should add positive and negative numbers correctly', () => {
    expect(sum(10, -4)).toBe(6);
  });

  it('should handle zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, -3)).toBe(-3);
  });

  it('should handle large numbers', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });

  it('should handle decimal numbers', () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });
});
