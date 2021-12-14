import express from 'express';
import url from 'url';
import dotenv from 'dotenv'

import helmet from 'helmet';
import { saveShortenedUrl, getFullUrlByParam } from './database/pg-database';
import { postUrlSchema, getUrlSchema, validationOptions } from './helpers/validatePostParams';


dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', async (request: express.Request, response: express.Response) => {
	try {
		const url_parts = url.parse(request.url, true);
		const { shortUrl } = url_parts.query;
	
		const dbResponse = await getFullUrlByParam(shortUrl);
		const fullUrl = await getUrlSchema.validateAsync(dbResponse, validationOptions);

		if (fullUrl.length === 0) {
			response.sendStatus(404);
		}
	
		response.redirect(fullUrl[0].full_url);
	} catch (error) {
		response.json({ err: error });
	}
});

app.post('/', async (request: express.Request, response: express.Response) => {
	try {
		const { full, short } = await postUrlSchema.validateAsync(request.body, validationOptions);
		const savedShortUrl = await saveShortenedUrl(full, short);

		response.json({ url: savedShortUrl });
	} catch (error) {
		response.json({ err: error });
	} 
});

app.listen(process.env.PORT || 8000, () => {
	console.warn('> Ready on http://localhost:8000');
});
