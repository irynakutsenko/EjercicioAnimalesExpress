const express = require("express");
let animales = require("./animales");
const servidor = express();
servidor.listen(3002);
const path = require('path');

// http://localhost:3002/

servidor.use(express.static('public'));


//EJERCICIO 1
servidor.get("/animales", function(request, response) {
    let html = ""
    for (let i = 0; i < animales.length; i++) {
        html += (`<li>Nombre: ${animales[i].name}, Edad: ${animales[i].edad}, Tipo: ${animales[i].tipo}</li>`)
    }
    response.send(html)
});

//EJERCICIO 2
servidor.get("/animales/sumar-animal", function(request, response) {
    let html = ""
    let animalNombre = request.query.name
    let animalEdad = request.query.edad
    let animalTipo = request.query.tipo

    let obj = {
        name: animalNombre,
        edad: animalEdad,
        tipo: animalTipo
    }
    animales.push(obj)

    for (let i = 0; i < animales.length; i++) {
        html += (`<li>Nombre: ${animales[i].name}, Edad: ${animales[i].edad}, Tipo: ${animales[i].tipo}</li>`)
    }

    response.send(html)
});


//EJERCICIO 3
servidor.get("/animales/dejar-animal", function(request, response) {
    let html = ""

    let animalNombre = request.query.name
    let animalEdad = request.query.edad
    let animalTipo = request.query.tipo

    let obj = {
        name: animalNombre,
        edad: animalEdad,
        tipo: animalTipo
    }
    animales.push(obj)

    for (let i = 0; i < animales.length; i++) {
        html += (`<li>Nombre: ${animales[i].name}, Edad: ${animales[i].edad}, Tipo: ${animales[i].tipo}</li>`)
    }


    response.sendFile(path.join(__dirname + '/public/index.html'));


});

//EJERCICIO 4

servidor.get("/animales/adoptar", function(request, response) {

    let html = ""
    for (let i = 0; i < animales.length; i++) {
        html += (`<li>Nombre: ${animales[i].name}, Edad: ${animales[i].edad}, Tipo: ${animales[i].tipo}</li>`)
    }


    let animalNombre = request.query.name


    animales.forEach((animal, i) => {

        if (animal.name == animalNombre) {
            animales.splice(i, 1);

            response.send(html)
        }

    })

});

//EJERCICIO 5

servidor.get("/animales/adoptar", function(request, response) {

    let animalNombre = request.query.name


    animales.forEach((animal, i) => {

        if (animal.name == animalNombre) {
            animales.splice(i, 1);


        }

    })

});