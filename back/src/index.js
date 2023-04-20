const server = require("./app.js");

const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://nicovon24:1234@todolist.0i5zai0.mongodb.net/todoList"
);

server.connect(mongoose.connection);

server.listen(3001, () => {
	console.log(`Listening at: http://localhost:3001/`);
});
