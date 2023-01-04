const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_tracker',
    password: process.env.PASSWORD,
});

var fs = require("fs")

// array of questions for user input

const menu = [
    { type: "list", message: "What would you like to do?", name: "menu", choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Roles", "View All Departments", "Add Department"] },
]

const addEmployee = [
    { type: "input", message: "What is the name of the new employee?", name: "first_name" },
    { type: "input", message: "What is the last name of the new employee?", name: "last_name" },
    { type: "input", message: "What is the role id of the new employee?", name: "role_id" },
    { type: "input", message: "What is the manager id of the new employee?", name: "manager_id" },


]

const addRole = [
    { type: "input", message: "What is the title of the new role?", name: "new_role" },
    { type: "input", message: "What is the salary of the new role?", name: "new_salary" },
    { type: "input", message: "What is the department of the new role?", name: "new_role_department" },
]

const addDepartment = [
    { type: "input", message: "What is the name of the new department?", name: "new_department" },
]

const updateEmployee = [
    { type: "input", message: "Please select which employee to update", name: "update_employee" },
]



function init() {
    inquirer
        .prompt(menu)
        .then((response) => {
            console.log(response)
            if (response.menu === "View All Employees") {
                connection.query(
                    'SELECT * FROM department',
                    function (err, results) {
                        console.table(results);
                        init() // results contains rows returned by server                          
                    }
                );
            }



            if (response.menu === "Add Employee") {
                inquirer
                    .prompt(addEmployee)
                    .then((response) => {

                        connection.query(
                            'INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)', [response.first_name, response.last_name, response.role_id, response.manager_id],
                            function (err, results) {
                                console.log(err)
                                console.table(results); // results contains rows returned by server       

                                init()
                            })
                    })
            }


        })
}

init();