/*
* el usuario debe seleccionar que acción quiere realizar
*/
function input(option){
  do{
    /*
    * consulta al usuario que opción va a elegir, debe ingresar el nº 1 o el nº2
    */
    var option = prompt("¡Hola!, ¿que deseas hacer? : 1 -> Cifrar | 2 -> Decifrar");
    /*
    * si el campo no está vacio
    */
    if(option != ""){
      /*
      * ejecutar funcion de cifrado en caso de seleccionar 1
      */
      if(option == "1"){
        cipher();
      /*
      * ejecutar funcion de descifrado en caso de seleccionar 2
      */
      } else if (option == "2")
        decipher();
      /*
      * alertar al usuario de que debe elegir entre opción 1 ó 2 en caso de ingresar otro nº o string
      */
      } else {
        alert("Debes ingresar 1 ó 2");
      }
    }
  /*
  * si el usuario deja el campo vacío entonces se repetirá la pregunta hasta que ingrese 1 ó 2
  */
  while ( option == "" || ( option != "1" && option != "2"));
}
/*
*función de cifrado
*/
function cipher(){
/*
* se le indica al usuario que ingrese la palabra o frase que quiere cifrar
*/
  var string = prompt("Por favor, ingresa la palabra o frase que quieres cifrar");
  /*
  * variable para almacenar la palabra/frase como cifrado de césar
  */
  var stringToCode = [];
  /*
  * se itera la palabra/frase
  */
  for (var i = 0; i < string.length; i++) {
    /*
    * se convierte cada caracter a cifrado de césar
    */
      stringToCode[i] = string[i].charCodeAt();
      /*
      * fórmula para obtener el código ASCII
      */
      var stringToAscii= ((stringToCode[i] - 65 + 33) % 26 + 65);
  }
  /*
  * retorna la palabra/frase en código ASCII
  */
  return alert(String.fromCharCode(stringToAscii));
}
/*
*función de decifrado
*/
function decipher(){
/*
* se le indica al usuario que ingrese la palabra o frase que quiere descifrar
*/
  var string = prompt("Por favor, ingresa la palabra o frase que quieres decifrar");
  /*
  * variable para almacenar la palabra/frase en ASCII
  */
  var asciiToCode = [];
  /*
  * se itera la palabra/frase
  */
  for (var i = 0; i < string.length ; i++) {
    /*
    * se convierte cada caracter a cifrado de césar
    */
    asciiToCode[i] = String.charCodeAt(string[i]);
    /*
    * fórmula para obtener el caracter normal
    */
    var codeToNormal= ((asciiToCode[i] - 65 - 7 + 52) % 26 + 65);
  }
  /*
  * retorna la palabra/frase normal
  */
  return alert(codeToNormal);
}
input();