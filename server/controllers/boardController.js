'use strict';

const boards = [
    {id: 1, name: 'board 1'},
    {id: 2, name: 'board 2'},
    {id: 3, name: 'board 3'},
    {id: 4, name: 'board 4'},
];

exports.getAll = function(req, res) {
    res.json(boards);
};

exports.create = function(req, res) {
	console.log(req,res)
//   var new_board = new Task(req.body);
//   new_board.save(function(err, board) {
//     if (err)
//       res.send(err);
//     res.json(board);
//   });
};

exports.getById = function(req, res) {
    var board = boards.find(b => b.id === +req.params.boardId);
    res.json(board);
//   Task.findById(req.params.boardId, function(err, board) {
//     if (err)
//       res.send(err);
//     res.json(board);
//   });
};

exports.update = function(req, res) {
//   Task.findOneAndUpdate({_id:req.params.boardId}, req.body, {new: true}, function(err, board) {
//     if (err)
//       res.send(err);
//     res.json(board);
//   });
};

exports.remove = function(req, res) {
//   Task.remove({
//     _id: req.params.boardId
//   }, function(err, board) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
};