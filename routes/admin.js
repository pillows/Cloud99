var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var app = express();

var db = mongojs('mongodb://kent:feng@ds157325.mlab.com:57325/giant_store_list');
//query all results
router.get('/', function(req, res, next){
    //sends the results page..
    //res.render('results.html');

    //finds the stores and includes them into the response

        res.render("admin_panel.html");

    /*
    db.stores.find(function(err, stores){
        if(err){
            console.log("connection to db failed.");
            res.send(err);
        }
        
        res.json(stores);
    });
    */
});

router.get('/store', function(req, res, next){
    //sends the results page..
    //res.render('results.html');

    //finds the stores and includes them into the response
        console.log(req.query);
        res.render("admin_store.html");

    /*
    db.stores.find(function(err, stores){
        if(err){
            console.log("connection to db failed.");
            res.send(err);
        }
        
        res.json(stores);
    });
    */
});

router.post('/store',function(req, res, next){
    console.log(req.body);
    
    var product = req.body.product;
    var price = req.body.price;
    var quantity = req.body.quantity; // Help?
    var name = req.query.name;
    db.products.insert({store:name, product:product, price: price, quantity: quantity});
    
    res.send('query done');
});
router.post('/', function(req, res, next){
    var name = req.body.name;
    var address = req.body.address;
    var storeType = req.body.type
    var hours = "9AM - 9PM";
    var phone = "917-520-2391";
    console.log(req.body.name);

    db.stores2.insert({name:name, address:address, storeType:storeType, hours: hours, phone: phone});
    res.render("admin_panel.html");

});

//query single result
/*
router.get('/results/:id', function(req,res,next){
    db.stores.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,store){
        if(err){
            res.send(err);
        }
        res.json(store);
    });
});
*/

//post a task to the server
//router.post('/')

module.exports = router;