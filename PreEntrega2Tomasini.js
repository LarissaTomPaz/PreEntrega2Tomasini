let preguntaActual = {}
let respCorrecta = true;
let puntaje = 0;
let contadorPreguntas = 0;
let preguntasDisponibles = []

function menu(){
    let incio =  prompt("Eliga categoria: 1)Los Simpson 2)Hary Potter 3)Marvel Cinematic Universe");
    if(inicio==="Los Simpson"){
        filtrarCateogrias('Los Simpson');
    }
    if(inicio === "Harry Potter"){
        filtrarCateogrias('Harry Potter');
    }
    if(inicio==="Marvel cinematic universe");
    filtrarCateogrias('MCU');
}

//funcion para presentar las preguntas de una sola categoria
var filtrarCateogrias = function(categoria){
    return function(obj){
        return obj.categoria === categoria
    }
}
//categoria los simpsons
var catSimpson = filtrarCateogrias('Los Simpson');
preguntas.filter(catSimpson);

//categoria hp
var catHP = filtrarCategorias('Harry Potter');
preguntas.filter(catHP);
//categoria mcu
var catMCU = filtrarCategorias('MCU');
preguntas.filter(catMcu);

class preguntas{
    constructor(categoria, pregunta, opciones, respuesta){
        this.categoria = categoria;
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    respuestaCorrecta(respondio){
        return respondio === this.answer;
    }
}



const preguntas = [
    {
        categoria: "Los Simpson",
        pregunta: "Como se llamaba la banda de Homero?",
        opciones: ["Homero y sus amigos", "Los Borbotones", "El cuarteto", "Homero la estrella"],
        respuesta: "Los Borbotones",
    },
    {
        categoria: "Los Simpson",
        pregunta: "Cual es el unico personaje que tiene cinco dedos?", 
        opciones: ["Homero", "Apu", "Flanders", "Dios"],
        respuesta: "Dios",
    },
    {
        categoria: "Los Simpson",
        pregunta: "Que instrumento toca Lisa",
        opciones: ["Saxofon", "Guitarra", "Piano", "Bateria"],
        respuesta: "Saxofon",
    },
    {
        categoria: "Los Simpson",
        pregunta: "Quien es el mejor amigo de Bart?",
        opciones: ["Nelson", "Rapha", "Milhouse", "Otto"],
        respuesta: "Milhouse",
    },
    {
        categoria:"Harry Potter",
        pregunta: "Como se llamaba Lord Voldemort antes de cambiarse de nombre?",
        opciones: ["Petter Pettigrey", "Lupin", "Hagrid", "Tom Riddle"],
        respuesta: "Tom Riddle",
    },
    {
        categoria:"Harry Potter",
        pregunta: "A que casa de Hogwarts pertenecen Los Weasley",
        opciones: ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],
        respuesta: "Gryffindor",
    },
    {
        categoria:"Harry Potter",
        pregunta: "Que nombre tiene el mapa que James Potter y sus amigos hicieron durante sus anios en Hogwarts?",
        opciones: ["El mapa del merodeador", "Caminos secretos", "rutas de howgwarts", "Ninguna de las anteriores"],
        respuesta: "El mapa del merodeador",
    },
    {
        categoria:"Harry Potter",
        pregunta: "Como se llamaba el padrino de Harry?",
        opciones: ["Peter", "Arthur", "Albus", "Sirius"],
        respuesta: "Sirius",
    },
    {
        categoria:"MCU",
        pregunta: "Como se llama el martillo de thor?",
        opciones: ["Vanir", "Mjolnir", "Aesir", "Norn"],
        respuesta:"Mjolnir",
    },
    {
        categoria:"MCU",
        pregunta:"De que material esta hecho el escudo de Capitan America?",
        opciones: ["Andamatium", "Vibranio", "Pometeo", "Carbonadio"],
        respuesta:"Vibranio",
    },
    {
        categoria:"MCU",
        pregunta: "A quien sacrifica Thanos para obtener la gema del alma?",
        opciones: ["Nebula", "Fauces de ebano", "Obisidiana de sacrificio", "Gamora"],
        respuesta:"Gamora",
    },
    {
        categoria:"MCU",
        pregunta:"Cual es el verdadero nombre de la Bruja Escarlata?",
        opciones:["Harley", "Jarvis", "Wanda","Natasha"],
        respuesta:"Wanda",
    },

]

menu()