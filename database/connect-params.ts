export const connectParams = {
	host: process.env.HOST || 'localhost',
	user: process.env.USER || 'likeran',
	port: 5432,
	password: process.env.PASS || 'password',
	database: process.env.DB || 'postgres'
};
