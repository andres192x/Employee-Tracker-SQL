
const express = require ('express')
const cors = require ('cors')
const path = require('path')
const fs = require('fs');
const uniqid = require ('uniqid')
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(express.static('../Develop/public'));