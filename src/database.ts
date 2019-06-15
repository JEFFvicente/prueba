import mysql from 'promise-mysql';
import keys from './keys';//aqui esta la configuracion de bd

//para la coneccion 
const pool = mysql.createPool(keys.database);

//ejecutar la coneccion
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);//realiza la coneccio
    console.log('conexxion establecida');
});

//exportamos la coneccion
export default pool;