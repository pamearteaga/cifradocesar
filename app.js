


function input(option){ // el usuario debe seleccionar que acción quiere realizar

	do{ 

		var option = prompt("¡Hola!, ¿que deseas hacer? : 1 -> Cifrar | 2 -> Decifrar"); // consulta al usuario que opción va a elegir, debe ingresar el nº 1 o el nº2
		
		if(option != ""){ // si el campo no está vacio
			
			if(option == "1") { // ejecutar funcion de cifrado en caso de seleccionar 1
				
				cipher();


			} else if (option == "2") { // ejecutar funcion de descifrado en caso de seleccionar 2
				
				
				decipher();

			} else { // alertar al usuario de que debe elegir entre opción 1 ó 2 en caso de ingresar otro nº o string
				
				alert("Debes ingresar 1 ó 2"); 

			}
		
		} // if

	} //do 

	while ( option == "" || ( option != "1" && option != "2")); // si el usuario deja el campo vacío entonces se repetirá la pregunta hasta que ingrese 1 ó 2

}// input

	function cipher(){ // función de cifrado

       var string = prompt("Por favor, ingresa la palabra o frase que quieres cifrar"); // se le indica al usuario que ingrese la palabra o frase que quiere cifrar

       var stringToCode = []; // variable para almacenar la palabra/frase como cifrado de césar

		
		for (var i = 0; i < string.length; i++) { // se itera la palabra/frase
    
			stringToCode[i] = string[i].charCodeAt(); // se convierte cada caracter a cifrado de césar

			var stringToAscii= ((stringToCode[i] - 65 + 33) % 26 + 65); // fórmula para obtener el código ASCII
			
		}


	  return alert(String.fromCharCode(stringToAscii)); // retorna la palabra/frase en código ASCII

	}// cipher



	function decipher(){ // función de descifrado

		
		var string = prompt("Por favor, ingresa la palabra o frase que quieres decifrar"); // se le indica al usuario que ingrese la palabra o frase que quiere descifrar

       var asciiToCode = []; // variable para almacenar la palabra/frase en ASCII


		
		for (var i = 0; i < string.length ; i++) { // se itera la palabra/frase

			asciiToCode[i] = String.charCodeAt(string[i]); // se convierte cada caracter a cifrado de césar

			var codeToNormal= ((asciiToCode[i] - 65 - 7 + 52) % 26 + 65); // fórmula para obtener el caracter normal
			
		}

	  return alert(codeToNormal); // retorna la palabra/frase normal




	}// decipher


input();