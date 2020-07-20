var express = require('express');
var router = express.Router();

// Kết nối PostgresSQL
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'product_manager',
    password: 'Hq2018',
    port: 5432,
})
// Kết thúc kết nối PostgresSQL

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// api get data from postgres sql 
router.get('/getdata01', function (req, res, next) {  
    
    // Thêm proxy bên react pakage_json nên không cần dùng đến đoạn sau nữa
    // // Access-Control-Allow-Origin' - Node / Apache Port Issue
    // // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Kết nối PostgresSQL 
    pool.query('select * from product_info', (err, response) => {
        if (err) {
            console.log(err);            
        }
        else {
            res.send(response.rows);
        }        
    })
    // Kết thúc kết nối PostgresSQL
});

/* GET add. */
router.get('/add', function (req, res, next) {
    res.render('add', {});
});
/* POST add. */
router.post('/add', function (req, res, next) {    
    
    var product_name = req.body.product_name;
    var product_price = req.body.product_price;
    var image = req.body.image;
    pool.query("insert into product_info(product_name, product_price, image) values($1, $2, $3)", 
                [product_name, product_price, image], (err, response) => {
                    if (err) {
                        console.log(err);                        
                    }
                    else {
                        res.send('đã thêm mới thành công');
                    }                    
                });
});

module.exports = router;
