'use strict';

var nextId = 1;
const boards = {};

exports.getAll = function (req, res) {
	if (req.params.username) {
		var boardsByUser = boards[req.params.username];
		if (!boardsByUser) {
			res.json([]);
		}
		res.json(boardsByUser);
	}
	return res.sendStatus(400);
};

exports.create = function (req, res) {
	if (req.params.username && req.body.name) {
		boards[req.params.username].push({
			id: nextId,
			name: req.body.name,
			locations: []
		});
		nextId++;
		return res.sendStatus(200);
	}
	return res.sendStatus(400);
};

exports.getById = function (req, res) {
	if (req.params.username && req.params.boardId) {
		var boardsByUser = boards[req.params.username];
		if (!boardsByUser) {
			return res.sendStatus(404);
		}

		var board = boardsByUser.find(b => b.id === +req.params.boardId);
		if (!board) {
			return res.sendStatus(404);
		}
		res.json(board);
	}
	return res.sendStatus(400);

};

exports.update = function (req, res) {
	if (req.params.username) {
		var boardsByUser = boards[req.params.username];
		if (!boardsByUser) {
			return res.sendStatus(404);
		}

		const board = req.body.board;

		if (board) {
			const item = boardsByUser.find(b => b.id === board.id);
			if (item) {
				item.name = board.name;
				item.locations = board.locations;
				return res.sendStatus(200);
			}
		}
	}

	return res.sendStatus(400);
};

exports.remove = function (req, res) {
	//   Task.remove({
	//     _id: req.params.boardId
	//   }, function(err, board) {
	//     if (err)
	//       res.send(err);
	//     res.json({ message: 'Task successfully deleted' });
	//   });
};