import dotenv from 'dotenv'
dotenv.config();


export const connectParams = {
	host: process.env.HOST || 'localhost',
	user: process.env.USERNAME || 'postgres',
	port: 5432,
	password: process.env.PASSWORD || 'password',
	database: process.env.DB || 'postgres'
};
