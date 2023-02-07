
// Datos del usuario
let nombre;
let categoria;
const formUsuario = document.getElementById("form-usuario");
const preguntasContainer = document.getElementById("preguntas-container");
const pregunta = document.getElementById("pregunta");
const respuestas = document.getElementById("respuestas");
const tiempo = document.getElementById("tiempo");
const resultado = document.getElementById("resultado");
const ranking = document.getElementById("ranking");
// Preguntas y respuestas
const preguntas = {
  Historia: [
    {
      pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
      respuestas: [
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
        "Abraham Lincoln",
        "Franklin D. Roosevelt"
      ],
      respuestaCorrecta: "George Washington"
    },
    {
      pregunta: "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
      respuestas: [
        "1776",
        "1783",
        "1787",
        "1791",
        "1803"
      ],
      respuestaCorrecta: "1776"
    }
  ],    
    
    
  Ciencia: [
    {
      pregunta: "¿Cuántos planetas hay en el sistema solar?",    respuestas: [      "9",      "8",      "7",      "6"    ],
      respuestaCorrectas: "8"
      },
      {
      pregunta: "¿Qué elemento químico es el más ligero?",
      respuestas: [
        "Hidrógeno",
        "Helio",
        "Litio",
        "Berilio"
      ],
      respuestaCorrecta: "Hidrógeno"
      },
      {
      pregunta: "¿Cuántos dedos tiene una mano humana?",
      respuestas: [
        "8",
        "10",
        "5",
        "12"
      ],
      respuestaCorrecta: "5"
      },
      {
      pregunta: "¿Cuál es la primera ley de la termodinámica?",
      respuesta: [
        "La ley de la conservación de la energía",
        "La ley de la entropía",
        "La ley de la conservación de la masa",
        "La ley de la conservación de la cantidad de movimiento"
      ],
      respuestaCorecta: "La ley de la conservación de la energía"
      },
      {
      pregunta: "¿Qué es la fotosíntesis?",
      respuestas: [
        "El proceso por el cual las plantas producen su propio alimento",
        "El proceso por el cual las plantas producen oxígeno",
        "El proceso por el cual las plantas almacenan energía",
        "El proceso por el cual las plantas crecen"
      ],
      respuestaCorecta: "El proceso por el cual las plantas producen su propio alimento"
      }
    ],
    Deportes : [
        {
          pregunta: "¿Quién es considerado el mejor jugador de fútbol de todos los tiempos?",
          respuestas: {
            a: "Lionel Messi",
            b: "Pele",
            c: "Cristiano Ronaldo",
            d: "Diego Maradona"
          },
          respuestaCorrecta: "a"
        },
        {
          pregunta: "¿Quién ganó el primer campeonato de la NBA?",
          respuestas: {
            a: "Boston Celtics",
            b: "New York Knicks",
            c: "Los Angeles Lakers",
            d: "Philadelphia Warriors"
          },
          respuestaCorrecta: "a"
        },
        {
          pregunta: "¿Qué deportista ganó el premio 'Mejor Jugador del Mundo' de la FIFA en 2020?",
          respuestas: {
            a: "Lionel Messi",
            b: "Cristiano Ronaldo",
            c: "Robert Lewandowski",
            d: "Neymar"
          },
          respuestaCorrecta: "c"
        },
        {
          pregunta: "¿Cuál es el récord mundial de maratón?",
          respuestas: {
            a: "2 horas 2 minutos",
            b: "2 horas 3 minutos",
            c: "2 horas 4 minutos",
            d: "2 horas 5 minutos"
          },
          respuestaCorrecta: "d"
        },
        {
          pregunta: "¿Cuántos jugadores hay en un equipo de béisbol?",
          respuestas: {
            a: "9",
            b: "11",
            c: "12",
            d: "13"
          },
          respuestaCorrecta: "a"
        }
      ],
     Entretenimiento : [
        {
            pregunta: "¿Quién es el actor principal en la película Titanic?",
            respuestas: {
                a: "Leonardo DiCaprio",
                b: "Tom Cruise", 
                c: "Brad Pitt", 
                d: "Will Smith", 
            },
            respuestaCorrecta: "a"
        },
        {
            pregunta: "¿Quién es el cantante de la canción 'Thriller'?",
            respuestas: {
                a: "Michael Jackson", 
                b: "Whitney Houston", 
                c: "Madonna", 
                d: "Prince",
            },
            respuestaCorrecta: "a"
        },
        {
            pregunta: "¿Quién fue el primer Batman en la franquicia de películas?",
            respuestas: {
                a:"Christian Bale", 
                b:"Michael Keaton", 
                c: "George Clooney", 
                d: "Ben Affleck", 
            },
            respuestaCorrecta: "b"
        },
        {
            pregunta: "¿Quién es la autora de la serie de libros 'Harry Potter'?",
            respuestas: {
                a: "J.K. Rowling", 
                b: "Stephenie Meyer", 
                c: "Suzanne Collins", 
                d: "Rick Riordan", 
            },
            respuestaCorrecta: "a"
        },
        {
            pregunta: "¿Quién es el director de la película 'The Lord of the Rings'?",
            respuestas: {
                a: "Peter Jackson", 
                b: "Steven Spielberg",  
                c: "Christopher Nolan", 
                d: "James Cameron",  
            }, 
            respuestaCorrecta: "a"
        }
    ],
    Historia : [
        {
          pregunta: "¿Quién descubrió América en 1492?",
          respuestas: {
            a: "Christopher Columbus", 
            b: "Ferdinand Magellan",  
            c: "Vasco da Gama",  
            d: "Amerigo Vespucci",  
          },
          respuestaCorrecta: "a"
        },

        {
          pregunta: "¿Quién fue el primer emperador romano?",
          respuestas: {
            a: "Augustus",
            b: "Nero",  
            c: "Calígula",  
            d: "Trajano",  
            },
            respuestaCorrecta: "a"
        },
        {
          pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",
          respuestas: {
            a: "1945",
            b: "1939",  
            c: "1914",  
            d: "1918",  
            },
            respuestaCorrecta: "a"
        },
        {
          pregunta: "¿Quién escribió la Declaración de Independencia de los Estados Unidos?",
          respuestas: {
            a: "Thomas Jefferson", 
            b: "John Adams",  
            c: "Benjamin Franklin",  
            d: "Alexander Hamilton",  
            },
            respuestaCorrecta: "a"
        },
        {
          pregunta: "¿Cuál fue la causa principal de la Primera Guerra Mundial?",
          respuestas: {
            a: "El asesinato del archiduque austriaco Franz Ferdinand",
            b: "La invasión de Polonia por parte de Alemania",  
            c: "La Revolución Rusa de 1917",  
            d: "La declaración de guerra de Japón a Estados Unidos en 1941",  
            },
            respuestaCorrecta: "a"
        },
        {
          pregunta: "¿Cuál es la fecha de la Revolución Francesa?",
          respuestas: {
            a: "1789", 
            b: "1776",  
            c: "1848",  
            d: "1917",  
            },
            respuestaCorrecta: "a"
        },
        {
          pregunta: "¿Quién fue el líder de la Revolución Rusa de 1917?",
          respuestas: {
            a: "Vladímir Lenin", 
            b: "Josef Stalin",  
            c: "León Trotsky",  
            d: "Nikolai Krupskaia",
            },
            respuestaCorrecta: "a"
        }
    ],
}
