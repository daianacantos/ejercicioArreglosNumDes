/*Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario
desee
• Muestre los números del arreglo al usuario */

let mes: number[] = new Array(5);
//let indice: number = Number ( prompt ("ingresar un numero"));//

for (let i: number = 0; i < 5; i++) {
  mes[i] = Number(prompt("ingresar un numero"));

  console.log(" el numero ingresado es: ", mes[i]);
}

//console.log(" los numeros ingresados son ", mes);
