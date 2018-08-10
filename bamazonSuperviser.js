var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "Cardenas34", //Your password
    database: "bamazon_db"
})


//MAIN MAAGER PROMPT WHICH RUNS FOR THE MANAGER FILE WHICH HAS MANY DIFFERENT OPTIONS TO CHOOSE FROM 
var supervisorPrompt = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Hello! What would you like to do?",
        choices: ["View products for sale", 'View low inventory', "Add to inventory", "Add a new product", 'Exit']
    }).then(function(answer) {
        switch (answer.action) {
            case 'View departments sale':
                viewDepertment(function() {
                    supervisorPrompt();
                });
                break;

            case 'View low inventory':
                CreateDepartment(function() {
                    supervisorPrompt();
                });
                break;
                //THIS IS AN EXTRA CHOICE ADDED TO EXIT THE NODE RUNNING
            case 'Exit':
                connection.end();
                break;
        }
    })
};


function viewDepertment(){
    
}