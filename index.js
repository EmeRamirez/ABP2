import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'abp2'
})

if (process.argv[2]){
    if (process.argv[2] == 'insertar' && process.argv[3]){
        pool.query('INSERT INTO usuarios (nombre) VALUES ($1) RETURNING *',[`${process.argv[3]}`],(err,res)=>{
            if (err) throw err;
            console.log('El usuario fue insertado con éxito');
            console.table(res.rows);
            pool.release;
        })
    }
}