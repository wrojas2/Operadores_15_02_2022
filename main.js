/* OPERADOR ARITMETICO RESTA */
let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let num2 = new Number (prompt("Ingrese otro Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#E74C3C;
background:#F9E79F;
padding: 5px;
border-radius: 5px;`;

// SUMA
console.group(`%cOperador Aritmetico Resta`,myStyle1);

      console.log (`
          Variable num1: ${num1}, 
          Variable num2: ${num2}, 
          Variable resultado: ${resul}`);
      
      console.log(`Restar Variables num1 - num2 y guardar la respuesta en la variable Resultado \n`)
      resul= num1-num2
      console.log(`
          num1:${num1}, 
          num2:${num2}, 
          resultado: ${resul}`
          )
  // Suma Abreviada
      console.log(`Resta Abreviada: num1 -= num2;`)
      num1 -= num2;
      console.log (`
          num1:${num1} 
          num2:${num2}
          resultado:${resul}` 
          );
  
  console.groupEnd();

/* OPERADOR ARITMETICO SUMA 
  let sum1 = new Number (prompt("Ingrese un Número", "Digite un número"));
  let sum2 = new Number (prompt("Ingrese otro Número", "Digite un número"));
  let resul;
  let myStyle1 = `
  color:#EAECEE;
  background:#A569BD;
  padding: 5px;
  border-radius: 5px;`;
  
  // SUMA
  console.group(`%cOperador Aritmetico Suma`,myStyle1);

        console.log (`
            Variable sum1: ${sum1}, 
            Variable sum2: ${sum2}, 
            Variable resultado: ${resul}`);
        
        console.log(`Sumar Variables Sum1 + sum2 y guardarla en variable Resultado \n`)
        resul= sum1+sum2
        console.log(`
            sum1:${sum1}, 
            sum2:${sum2}, 
            resultado: ${resul}`
            )
    // Suma Abreviada
        console.log(`Suma Abreviada: sum1 += sum2;`)
        sum1 += sum2;
        console.log (`
            sum1:${sum1} 
            sum2:${sum2}` 
            );
    
    console.groupEnd(); */

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

    console.log (`x:${x} y: ${y}` );


console.groupEnd(); */

/* VENTANA EMERGENTE EN JS
let nombre = prompt(`Ingrese El Nombre Del Usuario:`, `Escriba su nombre completo`);
console.log (nombre); */