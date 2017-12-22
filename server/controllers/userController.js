'use strict';

var nextId = 1;
const users = [];

exports.login = function (req, res) {
	if (req.body.username && req.body.password) {
		var index = users.findIndex(u => u.username === req.body.username);
		if (index >= 0 && users[index].password === req.body.password) {
			return res.sendStatus(200)
		}
		return res.sendStatus(401);
	}
	return res.sendStatus(400);
};

exports.register = function (req, res) {
	if (req.body.username && req.body.password && req.body.email) {
		var index = users.findIndex(u => u.username === req.body.username || u.email === req.body.email);
		if (index < 0) {
			users.push({username: req.body.username, email: req.body.email, password: req.body.password});
			nextId++;
			return res.sendStatus(200);
		}
		return res.sendStatus(404);
	}

	return res.sendStatus(400);
};