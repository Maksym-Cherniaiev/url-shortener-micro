import { createShortUrl } from './createShortUrl';


const randomStringMock = () => 'w12345';

jest.mock('randomstring', () => ({
  generate: () => randomStringMock(),
}));

test('should create url by provided text argument', () => {
    expect(createShortUrl('example')).toBe('https://example.com/example');
    expect(createShortUrl('pg-link')).toBe('https://example.com/pg-link');
});

test('should create url with random path if no argument was provided', () => {
    expect(createShortUrl('')).toBe('https://example.com/w12345');
    expect(createShortUrl(null)).toBe('https://example.com/w12345');
    expect(createShortUrl(undefined)).toBe('https://example.com/w12345');
});
