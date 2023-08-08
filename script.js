const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".btn-copy");


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
	const textoEncriptado = encriptar(textArea.value)
	mensaje.value = textoEncriptado;
	textArea.value="";
	mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptado=stringEncriptado.toLowerCase();

	for(let i=0; i < matrizCodigo.length; i++){
		if(stringEncriptado.includes(matrizCodigo[i][0])){
			stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

		}

	}
return stringEncriptado

}

function btnDesencriptar(){
	const textoEncriptado = desencriptar(textArea.value)
	mensaje.value = textoEncriptado;
	textArea.value="";
	mensaje.style.backgroundImage = "none"
}


function desencriptar(stringDesencriptar){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptar=stringDesencriptar.toLowerCase();

	for(let i=0; i < matrizCodigo.length; i++){
		if(stringDesencriptar.includes(matrizCodigo[i][1])){
			stringDesencriptar=stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

		}

	}
return stringDesencriptar

}


function copiar(){
	 mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = ""
}
