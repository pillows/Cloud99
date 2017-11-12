var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://kent:feng@ds157325.mlab.com:57325/giant_store_list');


/*
{
    "_id": {
        "$oid": "5a076ec7734d1d68d42dd025"
    },
    "name": "Hunter Deli",
    "details": {
        "location": "123 Test Street New York, NY 10003",
        "hours": "All day",
        "latitude": "1",
        "longitude": "2",
        "price": 3,
        "phone": 911
    },
    "type": "deli"
}

*//*
router.get('/:id',function(req,res,next){
	db.stores.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,store){
		if(err){
			res.send(err);
		}
		res.json(store);
	});
});
*/


router.put('/:id', function(req,res,next){
	var products = req.body;
	var updProduct = {};

	if(products.item4){
		updProduct.item4 =  products.item4;
	}
	if(!updProduct){
		res.status(400);
		res.json({
			"error": "bad data"
		});
	} else{
		db.stores.update({_id: mongojs.ObjectId(req.params.id)},updProduct,{},function(err,products){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	}
});

module.exports = router;