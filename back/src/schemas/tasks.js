const mongoose = require("mongoose");

const Task = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
	isCompleted: {
		type: String,
		default: false,
	},
});

module.exports = Task;
