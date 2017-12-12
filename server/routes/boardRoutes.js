'use strict';
var board = require('../controllers/boardController');

module.exports = function (app) {
	app.route('/api/boards')
		.get(board.getAll)
		.post(board.create);

	app.route('/api/boards/:boardId')
		.get(board.getById)
		.put(board.update)
		.delete(board.remove);
};