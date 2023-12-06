//01-ingresar pedido de comida y devolver el array modificado
//**el primer elemento lo sacamos del array, ya que es el nombre del cliente
//** Añadimos al principio del array la cadena de texto "bebida", ya que es una promocion
//** Despues añadimos al final del array el nombre del usuario que sacamos antes
//devolver el array modificado

// function procesarPedido(pedidos){
//     const sacarPrimerElemento = pedidos.shift();
//     pedidos.unshift("bebida");
//     pedidos.push(sacarPrimerElemento);
//     return pedidos;
// }

// const pedidos = ["Federico", "milanesa con papas","flan con dulce de leche"];
// console.log(procesarPedido(pedidos));


//02-dada una lista de numeros, escribe una funcion que devuelva la suma de todos
//los numeros pares de la lista. La fcion debera iterar sobre cada numero de la lista
//comprobar si el numero es par y, si es asi, añadirlo a la suma total. Usa el bucle que desees

// function sumarPares(numeros){
//     let suma = 0;
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] % 2 === 0){
//             suma = suma + numeros[i];
//         }
//     }
//     return suma;
// }

// const numeros = [55, 4, 7, 2, 10];
// console.log("El total de la suma de numeros pares es:",sumarPares(numeros));

//**************************************************************************************/

//03- Crear una función que reciba un array de palabras y devuelva true si todas las palabras 
//terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".

    // function acabanEnA(words){
    //     for(let word of words){
    //         if(!word.endsWith('a')){
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // const words = ["computadora", "casa", "esta"];
    // console.log(acabanEnA(words));


//***********************************************************************/


//05-Recibes dos parámetros: una lista de palabras words y una palabra word.
// Primero, busca el índice de la palabra en la lista. 
//Después, usa ese índice (que será un número)
// y devuelve todas las palabras de words que sean más largas (length) que el número del índice.

// function buscaPalabras(words, word){
//     let indicePalabra = words.indexOf(word);
//     let palabrasLargas = words.filter((word) => word.length > indicePalabra);
//     return palabrasLargas;
// }
// const words = ["computacion", "tela", "de", "dosis"]
// const word = "dosis";
// console.log(buscaPalabras(words, word));

/****************************************************************************** */

  //06-Tenemos una matriz de cadenas de texto. Tenemos que localizar la posicion de la palabra javascript
  //en la matriz y devolver su posicion como un array de dos elementos: el indice de la fila y el indice de la 
  //colummna
    // function findJavaScript(matrix){
    //     for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
    //         const row = matrix[rowIndex];
    //     for(let colIndex = 0; colIndex < row.length; colIndex++){
    //         const word = row[colIndex];
    //         if(word === "JavaScript"){
    //             return [rowIndex, colIndex];
    //         }
    //     }
    //     }
    //      return [-1,-1];
    // }

    // const matrix = [
    //     ['HTML', 'CSS', 'JavaScript'],
    //     ['Java', 'C++', 'Python'],
    //     ['Ruby', 'Go', 'Swift']
    //   ];

    //   console.log("La palabra buscada esta en la posicion",findJavaScript(matrix));


//**************/
//07-en una biblioteca queremos saber que libro es el que menos paginas tiene y el que mas paginas.
//por suerte no hay dos libros con el mismo numero de paginas.
//Necesitamos que la funcion reciba un array de numeros, sin ordenar, y que devuelva un array de dos posisciones
//con el indice del libro con menos paginas y el indice del libro con mas paginas.

// function minAndMaxWords(words){
//     let minIndex = 0;
//     let maxIndex = 0;
//     for(let i = 1; i < words.length; i++){
//         if(words[i] < words[minIndex]){
//             minIndex = i;
//         }
//         if(words[i] > words[maxIndex]){
//             maxIndex = i;
//         }
//     }
//     return [minIndex, maxIndex];
// }

// const words = [555, 89, 600, 7, 888];

// console.log(minAndMaxWords(words));

// console.log(minAndMaxWords(words));

for(let i = 1; i <=5; i++) {
    let line = '';
    for(let j = 1; j<=5; j++){
        line += ` ${j*i}`;
    }
    console.log(line)
}