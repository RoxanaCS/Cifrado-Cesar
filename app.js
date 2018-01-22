var initial = function() {
  // uso de do while para evaluar la variable de entrada
  do {
    var sentence = prompt('Escriba una frase');
    var trueSentence;
    // recorrer la variable de entrada para saber si hay espacios vacios o números
    for (var i = 0; i < sentence.length; i++) {
      code = sentence.charCodeAt(i);
      // uso de código ASCII para limitar la entrada solo a letras
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        trueSentence = true;
      } else {
        trueSentence = false;
        alert('Ingrese solo letras');
        i = sentence.length;
        // si sentence tiene números o vacios el i se vuelve igual al largo de sentence y el for se detiene
      }
    }
  } while (trueSentence === false);
  // el prompt se ejecuta repetidamente mientras que el usuario no ingrese solo letras
  // Llama a la función de más abajo que contiene el cifrar/decifrar
  principal2(sentence);
};
// funcion para elegir cifrar o descifrar
var principal2 = function(sentence2) {
  do {
    var respuesta = prompt('Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar');
    if (respuesta !== '') {
      // si la respuesta es cifrar, se ejecutará la función cipher
      if (respuesta === '1') {
        cipher(sentence2);
      // si la respuesta es descifrar, se ejecutará la función decipher
      } else if (respuesta === '2') {
        decipher(sentence2);
      } else {
        alert('Ingrese una opción válida');
      }
    }
    // el prompt se ejecuta repetidamente mientras el usuario no ingrese una opción válida
  } while (respuesta === '' || (respuesta !== '1' && respuesta !== '2'));
};

var cipher = function(sentence2) {
  // función para cifrar
  var arrayPosition = [];
  var newString = '';
  var validLetter;
  var code;
  for (var i = 0; i < sentence2.length; i++) {
    // Obtener la posición ASCII del caracter
    code = sentence2.charCodeAt(i);
    if (code <= 90) {
      validLetter = 65;
    } else {
      validLetter = 97;
    }
    /* aplicar fórmula para obtener la posición del caracter corrido en 33 espacios a la derecha en la tabla ASCII */
    code = (code - validLetter + 33) % 26 + validLetter;
    // usar la posición para obtener qué letra corresponde y guardar las letras en un array
    arrayPosition.push(String.fromCharCode(code));
    // convertir el array en string
    newString = arrayPosition.join('');
  }
  return alert(newString);
};
// Función para descifrar
var decipher = function(sentence3) {
  var arrayPosition = [];
  var newString = '';
  var validLetter;
  var code;
  // console.log(sentence3)
  // Obtener la posición ASCII del caracter
  for (var i = 0; i < sentence3.length; i++) {
    code = sentence3.charCodeAt(i);
    // Guarda valor de la letra codificada por si acaso es "a"
    code1 = code;
    /* aplicar fórmula para obtener la posición del caracter corrido en 33 espacios a la izquierda en la tabla ASCII */
    code = code - (33 % 26);
    if ((code < 65) || (code < 97 && code > 90) || code1 === 97) {
      /* en los casos en que code sea menor a 65 el decifrado se saldrá de las mayúsculas entonces debo sumarle 26
      para que vuelva a ser mayúscula. En el caso de que sea menor a 97 va a pasar algo parecido, entonces también
      debo sumarle 26 (siempre y cuando sea mayor a 90 que es la "Z" mayúscula, para abarcar solo las minúsculas.
      En el caso de la "a" (97) se topa con el abecedario mayúscula cuando es decodificada, entonces debo sumarle 26 también
      al caracter decodificado) Este paso es para obtener solo letras aunque la entrada es mayúscula o minúscula*/
      code = code + 26;
    }
    // usar la posición para obtener qué letra corresponde y guardar las letras en un array
    arrayPosition.push(String.fromCharCode(code));
    newString = arrayPosition.join(''); // convertir a string el array
  }
  return alert(newString);
};
// llamar a la función que da inicio a todo el proceso
initial();
