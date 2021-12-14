import dotenv from 'dotenv'
dotenv.config();


export const connectParams = {
	host: process.env.HOST || 'localhost',
	user: process.env.USER || 'postgres',
	port: 5432,
	password: process.env.PASS || 'password',
	database: process.env.DB || 'postgres'
};
