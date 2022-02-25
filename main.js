/* OPERADOR DE COMPARACION MENOR */
let myStyle1 = `
color:#F2F3F4;
background:#2471A3;
padding: 15px;
border-radius: 15px;`

console.group(`%cOPERADOR DE COMPARACION MENOR '<'`,myStyle1);

let x = 9/5+((10%8)-2*(5*5/2))/6;
// 9/5 + ((2)-2*(5*5/2))/6;
// 9/5 + ( 2-2 * (25/2))/6;
// 9/5 + ( 2-2 *(12,5))/6;
// 9/5 + ( 2- 2 * 12,5 )/6;
// 9/5 + ( 2- 25 ) /6;
// 9/5 + (-23)/6;
// 1,8 + (-3.8333)
// 1,8 - 3,8333

// RTA X => -2.033
let y = (8*5/(5+2)*3)%9;
// (8*5/(7)*3)%9;
// (8*5/7*3)%9;
// (40/7*3)%9;
// (5.714*3)%9;
// (17,142)%9;
//  RTA Y => 8,1428
let resultado = x > y;

console.log(`x = 9/5+((10%8)-2*(5*5/2))/6`)
console.log(`y = (8*5/(5+2)*3)%9`)
console.log(`
    El valor de la Variable x: ${x}  
    El Valor de la variable y: ${y} 
    '>', ¿X es menor que y ?  ${resultado}`);

console.groupEnd();

/* OPERADOR DE COMPARACION MAYOR 
let myStyle1 = `
color:#F2F3F4;
background:#F0B27A;
padding: 15px;
border-radius: 15px;`

console.group(`%cOPERADOR DE COMPARACION MAYOR '>'`,myStyle1);

let x = 5*(15-(8-1)/9) - (5+9*9)%5;
// 5*(15-(7)/9) - (5+9*9)%5
// 5*(15-(0,78) - (5+9*9)%5
// 5*(15-0,78)  - (5+81)%5
// 5*(15-0,78)  - (86)%5
// 5*(15-0,78)  - (1) 
// 5*(15-0,78)  - (1)
// 5* (14,22) - 1
// 71.11 - 1 
// RTA X => 70,11
let y = (5-2 * 3)+2 * (5-1)+2;

//    5- (6) + 2 * (5-1)+2
//    (5- 6)+ 2 * (4) +2
//      -1 + 2 * 4 + 2
//      -1 +  8 + 2    
//         7 + 2
//  RTA Y => 9
let resultado = x > y;

console.log(`x = 5*(15-(8-1)/9) - (5+9*9)%5`)
console.log(`y = (5-2 * 3)+2 * (5-1)+2`)
console.log(`
    El valor de la Variable x: ${x}  
    El Valor de la variable y: ${y} 
    '>', ¿X es mayor que y ?  ${resultado}`);

console.groupEnd();*/

/* OPERADOR DE COMPARACION DIFERENTE 
let myStyle1 = `
color:#F2F3F4;
background:#A569BD;
padding: 15px;
border-radius: 15px;`

console.group(`%cOPERADOR DE COMPARACION DIFERENTE '!='`,myStyle1);

let x = 5*2;
// RTA X => 10
//
let y = (5/5-(3+9) - (5%3)*2);
//  (5/5-(12) -(5%3)*2);
//  (5/5-(12) - (2) *2);
//  (5/5- 12 - 4); 
//  (1-12-4);
//  (-11-4)
//  RTA Y => -15
let resultado = x != y;

console.log(`x =x = 5*2`)
console.log(`y = (5/5-(3+9)-(5%3)*2)`)
console.log(`
    El valor de la Variable x: ${x}  
    El Valor de la variable y: ${y} 
    ¿Son diferentes? '!=' ${resultado}`);

console.groupEnd(); */

/*OPERADOR DE COMPARACION IGUALDAD
// Operador de Igualdad
let x = 5+(2*2)-(6/2);
let y = 5;

let resultado = x == y;
console.log(`Variable x: ${x} y: ${y} Resultado '==' ${resultado}`); */

/* EJERCICIO OPERACIONES   

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
console.groupEnd(); */

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