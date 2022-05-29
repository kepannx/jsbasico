function carros(marca, modelo, annio){
    this.modelo = modelo;
    this.marca = marca;
    this.annio = annio;

}

var carrosNuevos  = new carros('Mazda', 'cx3',2020);
var carrosNuevos2 = new carros('Tesla', 'X', 2018);
var carrosNuevos3 = new carros('Toyota', "Corola", 2020);



//Ejercicio

var automoviles = ["Mazda", "Toyota", "Tesla", "Chevrolet", "Renault", "Pontiac", "Mercedes", "Masserati", "Suzuky", "Honda",
                    "Nissan",   "BMW",  "Ferrari",  "Kia",  "Porche",  "Isuzu",  "Alfa Romeo"];
var colores = ["Rojo", "Blanco", "Negro", "Amarillo", "Verde", "Azul", "Gris"];
var modelos = [2000, 2010, 2022, 2020,2011, 2012, 2013, 2014];


function vehiculos(marca, colores, modelos){
    this.marca = marca;
    this.color = colores;
    this.year= modelos;
}

function posicion(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function checkVehiculos(){
    for(var i = 0; i < automoviles.length; i++ ){
                vc  = nueuvosVehiculos = new vehiculos(automoviles[ posicion(0,17)], colores[ posicion(0,6)], modelos[ posicion(0,7)]);

        console.log(vc) 
        

    }
}


 