export type createShortUrlType = (path: string | undefined | null) => string;

export type saveShortenedUrlType = (fullUrl: string, shortText: string | undefined) => Promise<string>;

export type getFullUrlByParamType = (shortUrl: string | string[] | undefined) => Promise<string[]>;
