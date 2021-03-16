const mysql = require('mysql');
let express = require("express");
const fs = require("fs-extra");
const { request, response } = require('express');
const app = express();




var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'baza1'
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
    
//     sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });

//     con.query("SELECT * FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//         ['John', 'Highway 71'],
//         ['Peter', 'Lowstreet 4'],
//         ['Amy', 'Apple st 652'],
//         ['Hannah', 'Mountain 21'],
//         ['Michael', 'Valley 345'],
//         ['Sandy', 'Ocean blvd 2'],
//         ['Betty', 'Green Grass 1'],
//         ['Richard', 'Sky st 331'],
//         ['Susan', 'One way 98'],
//         ['Vicky', 'Yellow Garden 2'],
//         ['Ben', 'Park Lane 38'],
//         ['William', 'Central st 954'],
//         ['Chuck', 'Main Road 989'],
//         ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log("Number of records inserted: " + result.affectedRows);
//     });

//     // con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     // });
//   });


app.get('/addPupil/:id/:name/:surname/:pesel/:class', function(request, response){
    var sql = "INSERT INTO pupil (pupil_id, name, surname, pesel, class) VALUES (?)";
    var values = [request.params.id, request.params.name, request.params.surname, request.params.pesel, request.params.class];
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
    return response.send('Record succesfully inserted')
})


app.get('/showPupil', function(request, response){
    con.query("SELECT * FROM Pupil", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    return response.send('Record succesfully inserted')
})

app.get('/addTeacher/:id/:name/:surname/:pesel/:subject', function(request, response){
    var sql = "INSERT INTO Teacher (teacher_id, name, surname, pesel, subject) VALUES (?)";
    var values = [request.params.id, request.params.name, request.params.surname, request.params.pesel, request.params.subject];
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
    return response.send('Record succesfully inserted')
})

app.get('/showTeacher', function(request, response){
    con.query("SELECT * FROM Teacher", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    return response.send('Record succesfully inserted')
})

app.get('/addSubject/:id/:name', function(request, response){
    var sql = "INSERT INTO Subject (subject_id, name) VALUES (?)";
    var values = [request.params.id, request.params.name];
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
    return response.send('Record succesfully inserted')
})

app.get('/showSubjects', function(request, response){
    con.query("SELECT * FROM Subject", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    return response.send('Record succesfully inserted')
})

app.get('/addGrade/:id/:value/:weight', function(request, response){
    var sql = "INSERT INTO Grade (pupil_id, value, weight) VALUES (?)";
    var values = [request.params.id, request.params.value, request.params.weight];
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
    return response.send('Record succesfully inserted')
})

app.get('/showGrades', function(request, response){
    con.query("SELECT * FROM Grade", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    return response.send('Record succesfully inserted')
})

app.get('/addPupilSubject/:id_pupil/:id_subject', function(request, response){
    var sql = "INSERT INTO Pupil_Subject (pupil_id, subject_id) VALUES (?)";
    var values = [request.params.id_pupil, request.params.id_subject];
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
    return response.send('Record succesfully inserted')
})

app.get('/showPupilSubject', function(request, response){
    con.query("SELECT * FROM Pupil_Subject", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    return response.send('Record succesfully inserted')
})

app.get('/addPupilTeacher/:id_pupil/:id_teacher', function(request, response){
    var sql = "INSERT INTO Pupil_Subject (pupil_id, teacher_id) VALUES (?)";
    var values = [request.params.id_pupil, request.params.teacher_id];
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
    return response.send('Record succesfully inserted')
})

app.get('/showPupilTeacher', function(request, response){
    con.query("SELECT * FROM Pupil_Subject", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    return response.send('Record succesfully inserted')
})

app.listen(3000, function() { // odpalenie serwera i nasłuchiwanie na port 3000
    console.log('Server is listening on port 3000'); 
   });