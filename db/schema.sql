DROP DATABASE IF EXISTS Employee_tracker;
CREATE DATABASE Employee_tracker;
USE Employee_tracker;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    foreign key (department_id) references department(id)
   );

   CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    foreign key (role_id) references role(id),
    manager_id INT ,
    foreign key (manager_id) references employee(id)
   );

INSERT INTO department (name)
VALUES ('engineering'),
('finance'),
('legal');

INSERT INTO role (title, salary, department_id)
VALUES ('sales lead','80000',1),
('accountant','70000',2),
('lawyer','100000',3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jhon','Smith',1,null),
('David','Rodriguez',1,1);