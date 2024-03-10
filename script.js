// Encriptador de Texto 
// Reemplaza: 
// a - ai 
// e - enter 
// i - imes 
// o - ober 
// u - ufat 

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var texEnc = document.getElementById("texEnc").value;
    var texDes = document.getElementById("texDes").value;
    // i es para que afecte tanto mayusculas como minusculas -- e else
    // g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "over");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");
                          
   document.getElementById("texto").innerHTML = texEnc;
   document.getElementById("texto2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";

}
function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas -- e else
    // g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/over/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");
                          
   
   document.getElementById("texto").innerHTML = texDes;
   document.getElementById("texto2").innerHTML = txtCifrado;
   document.getElementById("copiar").style.display = "show";
   document.getElementById("copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy") 
    alert("Se copio!")


}

