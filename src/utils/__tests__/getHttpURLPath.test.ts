import { getHttpURLPath } from '../getHttpURLPath';

describe('getHttpURLPath', () => {
  test('should return "/" for an empty string', () => {
    expect(getHttpURLPath('')).toBe('/');
  });

  test('should return "/" for a single slash', () => {
    expect(getHttpURLPath('/')).toBe('/');
  });

  test('should return the same path without trailing slash', () => {
    expect(getHttpURLPath('/path/to/')).toBe('/path/to');
  });

  test('should return the same path if no trailing slash', () => {
    expect(getHttpURLPath('/path/to')).toBe('/path/to');
  });

  test('should return the pathname from a HTTP URL', () => {
    expect(getHttpURLPath('http://example.net/faq/')).toBe('/faq');
  });

  test('should return the root path for a base URL', () => {
    expect(getHttpURLPath('http://example.net/')).toBe('/');
    expect(getHttpURLPath('http://example.net')).toBe('/');
  });
});
