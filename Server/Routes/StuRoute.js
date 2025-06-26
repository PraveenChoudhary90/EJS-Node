const express = require("express");
const route = express.Router();
const StuController = require("../Controller/StuController");

route.get("/home", StuController.Homepage);
route.get("/insert", StuController.Insertpage);
route.get("/display", StuController.Displaypage);
route.post("/save", StuController.SaveUSer);
route.get("/assignTask", StuController.AssginTask);
route.post("/assignTask", StuController.AssginTaskFrom);
route.get("/task", StuController.AssginTaskDataDisplay);
route.get("/export-tasks", StuController.ExcelTaskDownload);




module.exports = route;