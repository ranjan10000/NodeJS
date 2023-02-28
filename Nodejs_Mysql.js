const sql = require("mssql");

const config = {
    server:"localhost",
    port:1433,
    user:"NewJoinee2022",
    password:"P@ssw0rd",
    database:"NewJoinee2022",
    Options:{
        enableArithAbort:true,
    },
    connectionTimeout:150000,
    pool:{
max:10,
min:0,
idleTimeoutMillis:30000,
    },
};

sql.on('error',err =>{
    console.log(err.message)
})

async function getDbUsersAsyncFunction(){
    try{
        let pool = await sql.connect(config);
        let result1 = await pool.request().query("select * form abc");
        console.log(result1);
        console.log("success");
        sql.close();
    }catch(error){
        console.log(err.message);
        console.log("failure");
        sql.close();
    }
}