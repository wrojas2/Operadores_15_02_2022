/* OPERADOR DE ADICION  
  let a = null;
  let b = new Number (prompt("Ingrese Datos", "Digite un dato"));
  let myStyle1 = `
  color: #fff;
  background: #801515;
  padding: 5px;
  border-radius: 5px;`;
  
  // ADICION

  console.group(`%cOperadores Adicion`,myStyle1);

        console.log (`Variable x: ${a}, Variable y: ${b}`);

    // Abreviado
        console.log(`Abreviacion: a += b;`)
           a += b;

     // Significado
     // console.log (`Significado: a = a + b`);
     // x = x + y;
     
            console.log (`a:${a} b: ${b}` );

console.groupEnd(); */

/* OPERADOR DE ASIGNACION 
let x;
let y = prompt("Datos")
let myStyle = `
    color: #fff;
    background: #226666;
    padding: 5px;
    border-radius: 5px;`;

    // Asignación
console.group(`%cOperadores Asignacion`,myStyle);

    console.log (`Variable x: ${x}, Variable y: ${y}`);
    
    console.log (`Abreviación: x = y`)
    // Abreviado
    
    x = y 

    console.log (`x:${x} y: ${y}` );*/


console.groupEnd(); 

/* VENTANA EMERGENTE EN JS
let nombre = prompt(`Ingrese El Nombre Del Usuario:`, `Escriba su nombre completo`);
console.log (nombre); */