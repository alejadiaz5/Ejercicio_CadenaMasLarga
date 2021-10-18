
function enviar(){

    masLarga=0;
    indice=0;

    inputText = document.getElementById("Input").value;

    if(inputText.length>524288){
        alert("El número de caracterés de tu arreglo supera el máximo soportado")
    }

    inputText = inputText.split(',');

    for(var i=0; i<inputText.length; i++){

        if (inputText[i].length>masLarga){
            masLarga=inputText[i].length;
            indice=i;
        }
        else if(inputText[i].length=masLarga){

        }
        else{
            masLarga;
            indice;
        }

        indice;
    }

    document.getElementById("Respuesta").innerHTML = "La posición/índice con el mayor número de caracteres es " + indice;



console.log("el indice es " + indice);
console.log("La cadena más larga tiene " + masLarga + " caracteres.")
console.log("La palabra es:"+ inputText[indice])
}





function borrar() {
    document.getElementById("Input").value = "";
    document.getElementById("Respuesta").innerHTML = "";

}