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
    { type: "input", message: "What is the name?", name: "first_name"},
]

// const questions = [
//     { type: "input", message: "please enter managers name", name: "manager" },
//     { type: "input", message: "please enter employee id", name: "id" },
//     { type: "input", message: "please enter email address", name: "email" },
//     { type: "input", message: "please enter the office number", name: "number" },
// ];


function init() {
    inquirer
        .prompt(menu)
        .then((response) => {
            console.log(response)
            if (response.menu === "View All Employees") {
                connection.query(
                    'SELECT * FROM department',
                    function (err, results) {
                        console.table(results); // results contains rows returned by server                          
                    }
                );


            }
            if (response.menu === "Add Employee") {
                inquirer
                    .prompt(addEmployee)
                    .then((response) => {

                        connection.query(
                            'INSERT INTO department (name) VALUES (?)',[response.first_name],
                            function (err, results) {
                                console.table(results); // results contains rows returned by server                          
                            }
        
                        )

                    })

                
            }





})
}

init();