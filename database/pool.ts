import { Pool } from 'pg';
import { connectParams } from './connect-params';


const pool = new Pool(connectParams);
pool.connect();

export default pool;
