import pool from './pool';

import { createShortUrl } from '../helpers';
import { getFullUrlByParamType, saveShortenedUrlType } from '../helpers/types';


export const saveShortenedUrl: saveShortenedUrlType = async (fullUrl, shortText) => {
	const shortenedUrl = createShortUrl(shortText);

	const query = `
		INSERT INTO urls (id,full_url,short_url)
		VALUES (default,'${ fullUrl }','${ shortenedUrl }')
	`;

	await pool.query(query);

	return shortenedUrl;
};

export const getFullUrlByParam: getFullUrlByParamType = async (shortUrl) => {
	const query = `SELECT DISTINCT full_url FROM urls WHERE short_url = '${ shortUrl }' FETCH FIRST ROW ONLY`;

	const { rows } = await pool.query(query);

	return rows;
};
