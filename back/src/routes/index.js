const { Router } = require("express");
const tasks = require("./tasks");
// const activities = require("./activities.router");
// const publications = require("./publications.router");

const router = Router();

router.use("/tasks", tasks);
// router.use("/activities", activities);
// router.use("/publications", publications);

module.exports = router;
