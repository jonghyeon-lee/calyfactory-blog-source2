import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import path from 'path';


let dbconfig = require(__dirname+'/../server/config/db-config.json');
let connection = mysql.createConnection(dbconfig);

const app = express();
const port = 3000;

app.use('/', express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/man', (req, res) =>{
	connection.query("SELECT * FROM man", (err, rows) => {
		if(err) throw err;

		res.send(rows);
	});
});

app.get('/login', (req, res) =>{
	connection.query("SELECT * FROM user WHERE user_id=\'"+req.body.user_id+"\' and user_pw=\'"+req.body.user_pw+"\'", (err, rows) => {
		if(err) throw err;

		if(rows.length>0)
			return res.send({loginresult:true,name:rows[0].user_name});
		else
			return res.send({loginresult:false});
	});
});

const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});