/* EJERCICIO OPERACIONES   */

let resultado;
let myStyle1 = `
color:#4D5656 ;
background:#ABEBC6;
padding: 15px;
border-radius: 15px;`

console.group(`%cTALLER JERARQUIA OPERADORES ARITMETICOS`,myStyle1);
resultado = (4+4/5*8*7)%2;
// 4/5 = 0,8  =>  4+0.8*8*7
// 0.8*8 44,8 => 4+44.8
// 4+44.8     => 48.8 % 2
// RTA        => 0.80
console.log(`El resultado de (4+4/5*8*7)%2 es: ${resultado}`)

resultado  = 5*((4/4)*(9-7)*2)+6;
// 4/4 = 1   => 5 * (1*(9-7)*2)+6
// 9-7 = 2   => 5 * (1 * 2 * 2)+6
// 1*2*2= 5  => 5 * 5 + 6
// RTA:      => 26 

console.log(`El resultado de 5*((4/4)*(9-7)*2)+6 es: ${resultado}`)

resultado = 5+1*8+(9*(5+8)/2);
// 5+8 =13    => 5+1*8+(9*13/2);
// 9*13=117   => 5+1*8+(117/2);
// 117/2=58,5 => 5+1*8+58,5
// 1*8 = 8    => 5+8+58,5
// Rta        =>  71,5

console.log(`El resultado de 5+1*8+(9*(5+8)/2) es: ${resultado}`)
console.groupEnd();



/* OPERADOR ARITMETICO DECREMENTO 

let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#4D5656 ;
background:#F4ECF7;
padding: 25px;
border-radius: 25px;`;

// INCREMENTO
console.group(`%cOperador Aritmetico Decremento`,myStyle1);

      console.log (`
          Variable num1: ${num1}, 
          Variable resultado: ${resul}
                 `);
      
      console.log(`Reducir en un numero el valor de:${num1} y guardar la respuesta en resultado \n`)
      num1--
      resul = num1
      console.log(`
          num1:${num1}, 
          resultado:${resul}
          ` )
  
  console.groupEnd(); */ 

/* OPERADOR ARITMETICO INCREMENTO 

let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#1B4F72;
background:#B3B6B7;
padding: 10px;
border-radius: 25px;`;

// INCREMENTO
console.group(`%cOperador Aritmetico Incremento`,myStyle1);

      console.log (`
          Variable num1: ${num1}, 
          Variable resultado: ${resul}
                 `);
      
      console.log(`Incrementar en un numero el valor de: ${num1} y guardar la respuesta en resultado \n`)
      num1++
      resul = num1
      console.log(`
          num1:${num1}, 
          resultado:${resul}
          ` )
  
  console.groupEnd(); */

/* OPERADOR ARITMETICO EXPONENCIACION 

let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let num2 = new Number (prompt("Ingrese otro Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#4A235A;
background:#D68910;
padding: 10px;
border-radius: 15px;`;

// SUMA
console.group(`%cOperador Aritmetico Exponenciación`,myStyle1);

      console.log (`
          Variable num1: ${num1}, 
          Variable num2: ${num2}, 
          Variable resultado: ${resul}`);
      
      console.log(`Elevar ${num1} a la ${num2} potencia, num1^mun2, la respuesta se guarda en la variable Resultado \n`)
      resul= num1**num2
      console.log(`
          num1:${num1}, 
          num2:${num2}, 
          resultado: ${resul}`
          )
  // Exponenciación Abreviada
      console.log(`Exponenciación Abreviada: num1 **= num2;`)
      num1 **= num2;
      console.log (`
          num1:${num1} 
          num2:${num2}
          resultado:${resul}` 
          );
  
  console.groupEnd(); */

/* OPERADOR ARITMETICO DIVISION 
let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let num2 = new Number (prompt("Ingrese otro Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#E8DAEF;
background:#797D7F;
padding: 50px;
border-radius: 15px;`;

// DIVISION
console.group(`%cOperador Aritmetico División`,myStyle1);

      console.log (`
          Variable num1: ${num1}, 
          Variable num2: ${num2}, 
          Variable resultado: ${resul}`);
      
      console.log(`Dividir la Variables num1 entre num2 y guardar la respuesta en la variable Resultado \n`)
      resul= num1/num2
      console.log(`
          num1:${num1}, 
          num2:${num2}, 
          resultado: ${resul}`
          )
  // DIVISION Abreviada
      console.log(`División Abreviada: num1 /= num2;`)
      num1 /= num2;
      console.log (`
          num1:${num1} 
          num2:${num2}
          resultado:${resul}` 
          );
  
  console.groupEnd(); */

/* OPERADOR ARITMETICO MULTIPLICACION 
let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let num2 = new Number (prompt("Ingrese otro Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#F7DC6F;
background:#27AE60;
padding: 5px;
border-radius: 5px;`;

// MULTIPLICACION
console.group(`%cOperador Aritmetico Multiplicación`,myStyle1);

      console.log (`
          Variable num1: ${num1}, 
          Variable num2: ${num2}, 
          Variable resultado: ${resul}`);
      
      console.log(`Multiplicar las Variables num1 y num2 y guardar la respuesta en la variable Resultado \n`)
      resul= num1*num2
      console.log(`
          num1:${num1}, 
          num2:${num2}, 
          resultado: ${resul}`
          )
  // Multiplicación Abreviada
      console.log(`Multiplicacion Abreviada: num1 *= num2;`)
      num1 *= num2;
      console.log (`
          num1:${num1} 
          num2:${num2}
          resultado:${resul}` 
          );
  
  console.groupEnd(); */

/* OPERADOR ARITMETICO RESTA 
let num1 = new Number (prompt("Ingrese un Número:", "Digite un número"));
let num2 = new Number (prompt("Ingrese otro Número:", "Digite un número"));
let resul;
let myStyle1 = `
color:#E74C3C;
background:#F9E79F;
padding: 5px;
border-radius: 5px;`;

// RESTA
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
  // Resta Abreviada
      console.log(`Resta Abreviada: num1 -= num2;`)
      num1 -= num2;
      console.log (`
          num1:${num1} 
          num2:${num2}
          resultado:${resul}` 
          );
  
  console.groupEnd(); */

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