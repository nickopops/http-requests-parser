import { getBaseURLPath } from '../getBaseURLPath';

describe('getBaseURLPath', () => {
  test('should return the base URL path', () => {
    expect(getBaseURLPath('/blog/category/community')).toBe('/blog');
  });

  test('should return "/" when the URL path is just "/"', () => {
    expect(getBaseURLPath('/')).toBe('/');
  });

  test('should return null when the URL path is empty', () => {
    expect(getBaseURLPath('')).toBe(null);
  });

  test('should return the same path when URL is already the base path', () => {
    expect(getBaseURLPath('/path')).toBe('/path');
  });
});
