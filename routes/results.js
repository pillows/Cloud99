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


    // db.products.find({"product": /.*Peanut.*/})
	db.stores.find(function(err, stores){
   		if(err){
   			console.log("connection to db failed.");
   			res.send(err);
   		}
   		
   		res.json(stores);
	});
});

router.post('/', function(req,res,next){

    var query = req.body.query;

    
db.products.find({"product": {"$regex": query, "$options": "i"}},function(err,stores){
        console.log(stores);
        /*res.send(function(stores){
        	for(var i = 0; i<stores.length;i++){
        		var tr = $('<tr/>');
        		tr.append("<td>" + stores.name + "</td>");
        		tr.append("<td>" + stores.address + "</td>");
        		tr.append("<td>" + stores.storeType + "</td>");
        		tr.append("<td>" + stores.hours + "</td>");
        		tr.append("<td>" + stores.phone + "</td>");
        		//tr.append("<td>" + stores.title + "</td>");

        		$('table').append(tr);



        	}

        });*/
        //res.sendFile(__dirname + "/views/results.html");
        res.render("results.html");
    });
    //res.send("1");
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