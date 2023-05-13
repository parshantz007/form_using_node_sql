let mysql=require('mysql');

const con=mysql.createConnection({
    host:"server596.iseencloud.net",
    user:"pardevel_root2",
    password:"Skaushik8@",
    database: 'pardevel_test'
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");

});

module.exports=con;

