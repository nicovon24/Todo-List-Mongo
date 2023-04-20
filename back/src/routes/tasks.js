const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const schemaTask = require("../schemas/tasks");

const Task = mongoose.model("tasks", schemaTask);

router.get("/", async (req, res) => {
	const { active } = req.query;
	const find = await Task.find({});
	res.status(200).json(find);
	// if (!active || active === "all") {
	// } else if (active === "completed") {
	// 	const find = await Task.find({ isCompleted: "true" });
	// 	console.log(find);
	// 	res.status(200).json(find);
	// } else if (active === "uncompleted") {
	// 	const find = await Task.find({ isCompleted: "false" });
	// 	res.status(200).json(find);
	// }
});

router.get("/filters", async (req, res) => {
	const { active } = req.query;
	if (active === "completed") {
		const find = await Task.find({ isCompleted: "true" });
		res.status(200).json(find);
	}
	if (active === "uncompleted") {
		const find = await Task.find({ isCompleted: "false" });
		res.status(200).json(find);
	}
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	const find = await Task.findById(id);
	if (find) {
		res.status(200).json(find);
	} else {
		res.status(400).json(req.params.id + " client was deleted.");
	}
});

router.post("/", async (req, res) => {
	const { title, text, isCompleted } = req.body;
	const newTask = await Task.create({ title, text, isCompleted });
	newTask.save().then(() => res.status(200).json({ success: true, newTask }));
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { title, text, isCompleted } = req.body;
	const updatedTask = await Task.findByIdAndUpdate(
		id,
		{ title, text, isCompleted },
		{ new: true }
	);
	updatedTask
		.save()
		.then(() => res.status(200).json({ success: true, updatedTask }));
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const deletedTask = await Task.findByIdAndRemove(id);
	if (deletedTask) {
		res.status(200).json({ success: true });
	} else {
		res.status(400).json({ success: false, message: "Task not found" });
	}
});

module.exports = router;
