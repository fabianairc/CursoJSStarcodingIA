//now = new Date();
//localtime = now.toString();
//utctime = now.toGMTString();
//document.write("<p><strong>Local time:</strong> " + localtime + "</p>");
//document.write("<p><strong>UTC time:</strong> " + utctime + "</p>");

//let miVariable = 2;

//console.log("true");
//function saludar() {
// return "hola";
//}
//console.log(saludar());

//let miVerdadero = true;

//if (miVerdadero === true) {
//console.log("verdaero");
//} else {
//  console.log("falso");
//}
//alert("hello world ");

//COMO ES PROMPT
//let Nombre = prompt("ingresa tu nombre");
//console.log(Nombre);

//El confirm
//confirm("are u sure?");
//o
//console.log(confirm("are us ure?"));

//parseInt

//let numberFromString = parseInt("123");
//onsole.log(numberFromString);

//let Prueba = Number("123");
//console.log(Prueba);
//let pruebaDos = +"23";
//console.log(pruebaDos);

//isNaN;

/*let checkisNan = isNaN("12345");
console.log(checkisNan);
let othercheckNan = isNaN("tres");
console.log(othercheckNan)*/

/*let number = 5;
console.log(number.toString());

let Edad = parseInt("19");
console.log(Edad);

let edadDeGonza = 29;
console.log(edadDeGonza.toString());

let tryNan = isNaN("perro");
console.log(tryNan); */

/*MAYUSCALAS Y MINUSCULAS 
let soda = "Carr";
console.log(soda.toUpperCase());

let sodaDos = "IVES";
console.log(sodaDos.toLowerCase());*/

//------------------------------

//CONCATENACION DE STRING MEDIANTE SIGNO MAS +

/*let name = "Fabiana";
console.log("Hola" + " " + "Fabiana");*/

//---------------------------------------
//CONCATENACION IMPLICITA
//A) CUANDO HAY SIGNO MAS QUE UNE UN NUMBER Y UN String, JS CONVIERTE TODO A STRING
/*let number = 5;
let string = "3";

console.log(number + string);*/

//B) EN LOS DEMAS CASOS (SIGNOS MENOS, POR, DIVIDIDO, ETC) TODO SE HACE NUMBER

/*let number = 6;
let string = "4";

console.log(number - string); */

//--------------------------------------

//OPERADORES ARITMETICOS

///unarios
/*console.log(typeof "hola mundo"); //hace string
console.log(+"123"); //hace numero
console.log(-"123"); hace numero y luego lo }niega queda menos 123 */

//binarios
/*console.log(2 + 3);
console.log(3 - 2);
console.log(3 + 2);
console.log(6 / 3);
console.log(7 % 3); */

//LOGICOS
//binarios
/*console.log(2 < 3);
console.log(2 > 3);*/

//AND
/*console.log(2 > 0 && 2 === 2);
//console.log(3 < 2 && 3 === 3);*/

//OR
/*console.log(2 > 3 || 3 > 2);
console.log(2 > 3 || 3 > 4);*/

//ternario ?
//let edad = 18;
//console.log(edad >= 18 ? "podes manejar" : "no podes manejar");

//OPERATOR PRECEDENCE
//CUAL JS USA PRIMERO

//promedio ejemplo
//console.log((30 + 20) / 2);

//-------
//TEMPLATE LITERALS
//const Name = "Fabiana";
//console.log(`soy ${Name}`);

//-------------------------------------------
//CONTORL DE FLUJOS

/*let age = 18;

if (age >= 18) {
  console.log("podes manejar");
} else {
  console.log("no podes manejar");
}*/

/*ELSE IF

let numer = 10;

if (numer < 10) {
  console.log("es menor que diez");
} else if (numer > 10) {
  console.log("es amyor que diez");
} else {
  console.log("es igual a diez");
}*/

//SWITCH

/*const weather = "calor";

switch (weather) {
  case "frio":
    console.log("lleva abrigo");
    break;

  case "fresco":
    console.log("lleva camisa");
    break;

  case "calor":
    console.log("sali tranquilo");

  default:
    console.log("toma mucha agua");
    break;
} */

//FOR

/*for (i = 1; i <= 10; i++) {
  console.log(i);
}*/

//DO WHILE
/*let i = 0;

do {
  console.log("con  DO while", i);
  i++;
} while (i < 2);*/

//while

/*let numer = 0;
while (numer < 3) {
  console.log("con while", numer);
  numer++;
}*/
//---------------------------

//declarar funcionf

/*function sumar(num1, num2) {
  console.log(num1 + num2);
}

//LLAMAR FUNCION
sumar(1, 2);*/

//RETURN
// const SayHolaMundo = function () {
//   return "Hola mundo";
// };
// console.log(SayHolaMundo());

//ARRAY
//formas de declarar arrays
// const miArray = ["TU vieja", "La mia"];
// console.log(miArray[1]);
// console.log(miArray.length);
// miArray[0] = "holis";
// console.log(miArray[0]);
// const otroArray = new Array();

const miArray = ["Juan", "pedro", "pablo", "Ian", "Spencer"];
console.log(miArray.length);
console.log(miArray.length - 1);
miArray[miArray.length - 1] = "Aria";
console.log(miArray);
console.log(miArray.indexOf("pablo"));
miArray.push("Mac");
console.log(miArray);
miArray.pop();
console.log(miArray);
miArray.unshift("gonza");
console.log(miArray);
miArray.shift();
console.log(miArray);

miArray.splice(1, 2);
console.log(miArray);
miArray.slice(1, 2);
console.log(miArray);

for (i = 0; i < miArray.length; i++) {
  console.log(i);
}

miArray.forEach((item) => {
  console.log(item);
});
