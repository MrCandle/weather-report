'use strict';

var nextId = 5;
const boards = [{
	id: 1,
	name: 'board 1',
	locations: [{
		woeid: '2460286',
		title: 'Nome, AK, United States',
		condition: {
			temp: '19',
			text: 'Sunny'
		},
		forecast: [{
			day: 'dia pepe',
			date: 'date',
			high: '33',
			low: '19'
		}]
	}]
},
{
	id: 2,
	name: 'board 2',
	locations: []
},
{
	id: 3,
	name: 'board 3',
	locations: []
},
{
	id: 4,
	name: 'board 4',
	locations: []
},
];

exports.getAll = function (req, res) {
	res.json(boards);
};

exports.create = function (req, res) {
	if (req.body.name) {
		boards.push({
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
	var board = boards.find(b => b.id === +req.params.boardId);
	res.json(board);
};

exports.update = function (req, res) {
	if (req.params.boardId && req.body.name) {
		const item = boards.find(b => b.id === +req.params.boardId);
		if (item) {
			item.name = req.body.name;
			return res.sendStatus(200);
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