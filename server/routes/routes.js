'use strict';
var board = require('../controllers/boardController');
var user = require('../controllers/userController');

module.exports = function (app) {
	app.route('/api/boards')
		.get(board.getAll)
		.post(board.create);

	app.route('/api/boards/:boardId')
		.get(board.getById)
		.put(board.update)
		.delete(board.remove);

	app.route('/api/user')
		.post(user.login);

	app.route('/api/user/register')
		.post(user.register);
};