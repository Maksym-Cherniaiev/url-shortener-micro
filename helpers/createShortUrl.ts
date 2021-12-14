import randomstring from 'randomstring';
import { createShortUrlType } from './types';

import { MAX_SHORT_URL_LENGTH, SHORTENED_URL_DOMAIN } from './';


export const createShortUrl: createShortUrlType = (path) => {
	const userCreatedShortUrl = `${ SHORTENED_URL_DOMAIN }${ path }`;
    const randomCreatedShortUrl = `${ SHORTENED_URL_DOMAIN }${ randomstring.generate(MAX_SHORT_URL_LENGTH) }`;

    const shortenedUrl = path
        ? userCreatedShortUrl
        : randomCreatedShortUrl;

    return shortenedUrl;
};