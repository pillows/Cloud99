var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://kent:feng@ds157325.mlab.com:57325/giant_store_list');
router.get('/:id', function(req,res,next){
	db.stores.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,store){
		if(err){
			res.send(err);
		}
		res.json(store);
	});
});

module.exports = router;