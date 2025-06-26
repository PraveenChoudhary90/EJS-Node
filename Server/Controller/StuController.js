const StuModel = require("../Model/StuModel");
const ExcelJS = require('exceljs');


const Homepage = async(req,res)=>{
    res.render("home");
}

const Insertpage = async(req,res)=>{
    res.render("insert");
}


const Displaypage = async(req,res)=>{
    const Data = await StuModel.find();
    res.render("display", {mydata:Data});
}


const SaveUSer = async(req,res)=>{
    const {name,email,number,city} =  req.body;
    const Data = await StuModel.create({
        name:name,
        email:email,
        number:number,
        city:city
    })
    res.render("insert");
}


const AssginTask = async(req,res)=>{
    const student = await StuModel.findById(req.query.id);
    res.render("assignTask", { student });
}


const AssginTaskFrom = async(req,res)=>{
    const { id, task } = req.body;
    await StuModel.findByIdAndUpdate(id, { assignedTask: task });
    res.redirect("/students/display");
}


const AssginTaskDataDisplay = async(req,res)=>{
    try {
        const TaskDisplay = await StuModel.find({ assignedTask: { $ne: null } });
        res.render("task", { TaskDisplay }); // <- This is KEY
      } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching assigned tasks.");
      }
}

const ExcelTaskDownload = async(req,res)=>{
    try {
        const students = await StuModel.find({ assignedTask: { $ne: null } });
    
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Assigned Tasks");
    
        // Add header row
        worksheet.columns = [
          { header: "Name", key: "name", width: 25 },
          { header: "Email", key: "email", width: 30 },
          { header: "City", key: "city", width: 25 },
          { header: "Number", key: "number", width: 25 },
          { header: "Assigned Task", key: "assignedTask", width: 40 }
        ];
    
        // Add rows
        students.forEach(student => {
          worksheet.addRow({
            name: student.name,
            email: student.email,
            number: student.number,
            city: student.city,
            assignedTask: student.assignedTask
          });
        });
    
        // Set response headers
        res.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
          "Content-Disposition",
          "attachment; filename=assigned_tasks.xlsx"
        );
    
        // Send Excel file
        await workbook.xlsx.write(res);
        res.end();
      } catch (error) {
        console.error("Excel export error:", error);
        res.status(500).send("Error exporting Excel file.");
      }
}

module.exports={
    Homepage,
    Insertpage,
    Displaypage,
    SaveUSer,
    AssginTask,
    AssginTaskFrom,
    AssginTaskDataDisplay,
    ExcelTaskDownload
}