var initial = function (){
  do{                                                //uso de do while para evaluar la variable de entrada
    var sentence = prompt('Escriba una frase');
    var trueSentence
    for (var i=0; i<sentence.length; i++){           //recorrer la variable de entrada para saber si hay espacios vacios o números
      code = sentence.charCodeAt(i)
      if((code>=65 && code <=90) || (code>=97 && code <=122)){   //uso de código ASCII para limitar la entrada solo a letras
        trueSentence = true;
      } else {
        trueSentence = false;
        alert("Ingrese solo letras");
        i = sentence.length;                        //si sentence tiene números o vacios el i se vuelve igual al largo de sentence y el for se detiene
      }
    }
  } while (trueSentence == false);          //el prompt se ejecuta repetidamente mientras que el usuario no ingrese solo letras

  principal2(sentence);                    //Llama a la función de más abajo que contiene el cifrar/decifrar
  }


var principal2 = function(sentence2){    //funcion para elegir cifrar o descifrar
	do{
		var respuesta = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cipher(sentence2);            //si la respuesta es cifrar, se ejecutará la función cipher
			} else if (respuesta == "2") {
				decipher(sentence2);           //si la respuesta es descifrar, se ejecutará la función decipher
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));    //el prompt se ejecuta repetidamente mientras el usuario no ingrese una opción válida
}

var cipher = function (sentence2) {   //función para cifrar
var arrayPosition = [];
var newString = "";
var validLetter;
var code;
  for (var i=0; i< sentence2.length; i++){ //Obtener la posición ASCII del caracter
    code = sentence2.charCodeAt(i);
    if (code <=90){
      validLetter = 65;
    } else {
      validLetter =97;
    }
    code = (code- validLetter + 33) % 26 +validLetter;   /* aplicar fórmula para obtener la posición
del caracter corrido en 33 espacios a la derecha en la tabla ASCII */
  arrayPosition.push(String.fromCharCode(code));  //usar la posición para obtener qué letra corresponde y guardar las letras en un array
  newString= arrayPosition.join(""); //convertir el array en string

  }
  return alert (newString);
  }

  var decipher = function (sentence3) { // Función para descifrar
  var arrayPosition = [];
  var newString ="";
  var validLetter;
  var code;
  console.log(sentence3)
    for (var i=0; i< sentence3.length; i++){ //Obtener la posición ASCII del caracter
      code = sentence3.charCodeAt(i);
      if (code <=90){
        validLetter = 65;
        console.log("es mayuscula")
      } else {
        validLetter =97;
      }

      code = code - (33 % 26);  /* aplicar fórmula para obtener la posición
  del caracter corrido en 33 espacios a la izquierda en la tabla ASCII */

    arrayPosition.push(String.fromCharCode(code));  //usar la posición para obtener qué letra corresponde y guardar las letras en un array
    newString= arrayPosition.join(""); //convertir a string el array

    }
    return alert (newString);

    }

initial();   //llamar a la función que da inicio a todo el proceso
