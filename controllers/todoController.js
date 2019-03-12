const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		console.log(req.query);
		db.User.find(req.query)
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.User.findById(req.params.id)
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	}
};
