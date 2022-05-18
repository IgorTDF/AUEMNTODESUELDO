/*• Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:

Sueldo Actual          Sueldo con Aumento
//0 - 15.000             $ 20%
//15.001 - 20.000        $ 10%
//20.001 - 25.000        $ 5%
Más de 25.000          $ No hay aumento


Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre*/

let SueldoActual: number = Number(prompt("Ingrese un Sueldo: "));
let Aumento: number = Number();
let NuevoSueldo: number = Number(); //Number (prompt('Ingrese un sueldo: '));

//0 - 15.000  $ 20%
if (SueldoActual <= 15000) {
  Aumento = 0.2 * SueldoActual;
  //15.001 - 20.000   $ 10%
} else if (SueldoActual <= 20000) {
  Aumento = 0.1 * SueldoActual;
  //20.001 - 25.000        $ 5%
} else if (SueldoActual <= 25000) {
  Aumento = 0.05 * SueldoActual;
} else {
  console.log("Usted no tiene aumento");
}

NuevoSueldo = SueldoActual + Aumento;
console.log("Su sueldo actual es: ", NuevoSueldo);
//let SueldoActual:number = prompt("Ingrese un sueldo: ");

/*Sueldo2 > 15001 || Sueldo2 <=20000 || 
      Sueldo3 > 20000 || Sueldo3 <=25000 || 
      Sueldo4 >25000){*/

/*let SueldoConAumento: number= Sueldo1 * 0.2 + Sueldo1; Sueldo2 * 0.1 + Sueldo2; Sueldo3 * 0.05 + Sueldo3; Sueldo4;
  else {
    
    
  }
}
console.log(`Su sueldo con aumento es: ${SueldoConAumento}`);*/
