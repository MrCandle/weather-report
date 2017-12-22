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
	res.sendStatus(400);
};

exports.create = function (req, res) {
	if (req.params.username && req.body.name) {
		var newBoard = {
			id: nextId,
			name: req.body.name,
			locations: []
		}
		if (boards[req.params.username]) {
			boards[req.params.username].push(newBoard);
		} else {
			boards[req.params.username] = [newBoard];
		}
		nextId++;
		res.sendStatus(200);
	}
	res.sendStatus(400);
};

exports.getById = function (req, res) {
	if (req.params.username && req.params.boardId) {
		var boardsByUser = boards[req.params.username];
		if (!boardsByUser) {
			res.sendStatus(404);
		}

		var board = boardsByUser.find(b => b.id === +req.params.boardId);
		if (!board) {
			res.sendStatus(404);
		}
		res.json(board);
	}
	res.sendStatus(400);
};

exports.update = function (req, res) {
	if (req.params.username) {
		var boardsByUser = boards[req.params.username];
		if (!boardsByUser) {
			res.sendStatus(404);
		}

		const board = req.body.board;

		if (board) {
			const item = boardsByUser.find(b => b.id === board.id);
			if (item) {
				item.name = board.name;
				item.locations = board.locations;
				res.sendStatus(200);
			}
		}
	}
	res.sendStatus(400);
};

exports.remove = function (req, res) {
	if (req.params.username && req.params.boardId) {
		var boardsByUser = boards[req.params.username];
		if (!boardsByUser) {
			res.sendStatus(404);
		}

		var boardIndex = boardsByUser.findIndex(b => b.id === +req.params.boardId);
		if (boardIndex < 0) {
			res.sendStatus(404);
		}
		boardsByUser.splice(boardIndex, 1);
		res.json(boardsByUser);
	}
	res.sendStatus(400);
};