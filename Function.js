function ComprobarEdad(){
var numero = parseInt(document.getElementById("Edad").value);

if(!isNaN(numero)){
    if(numero >= 18){
        alert("Es mayor a 18, puede conducir");
    } else{
        alert("Es menor a 18, no puede conducir");
    }
    
}
}
function VerificarNota(){
    var numero = parseFloat(document.getElementById("Nota").value);

    if(!isNaN(numero)){
        if(numero >=0 && numero <= 3){
            alert("Muy deficiente");
        }else{
            if(numero >= 3 && numero <=5){
                alert("Insuficiente");
            }else{
                if(numero >= 5 && numero <= 6){
                    alert("Suficiente");
                }else{
                    if(numero >= 6 && numero <= 7){
                        alert("Bien");
                    }else{
                        if(numero >= 7 && numero <= 9){
                            alert("Notable");
                        }else{
                            if(numero >= 9 && numero <= 10){
                                alert("Sobresaliente");
                            }
                        }
                    }
                }
            }
        }
    }
}

var palabras = "";
function ConcatenarTexto(){
while(true){
    var cadena = prompt("Digite cadenas de texto, si desea finalizar pulse Cancelar ");

    if(cadena === null){
        palabras = "";
        break;
    }
    if(cadena !== ""){
        palabras += "-";
    }
    palabras += cadena;

    document.getElementById("ResultadoCadena").innerHTML= palabras;
}
}

function SumaNumeros(){
    var numeroCadena = 0;
while(true){
    NumCa = prompt("Digite los numeros que desea sumar, si desea finalizar pulse cancelar");

    
        if(NumCa === null){
            break;
        }
        var suma = parseInt(NumCa);
        if(!isNaN(suma)){
      
          numeroCadena+=suma;
     
    }
       document.getElementById("Total").innerHTML = numeroCadena;
}
}
var resultado = "";

function CalcularCedula() {

var letras = "";
var resto = 0;


    while (true) {
        var input = prompt("Ingresa un número de cédula o Presiona Cancelar para finalizar");

        
      
        if (input === null) {
            resultado = "";
            break; // El usuario ha pulsado "cancelar"
        }

        var cedula = parseInt(input);

        if (!isNaN(cedula)) {
            if (cedula >= 0 && cedula <= 99999999   ) {
                letras = "TRWAGMYFPDXBNJZSQVHLCKE";
                 resto = cedula % 23;
                 resultado += letras.charAt(resto);

                document.getElementById("resultadoCedula").innerHTML = "La letra correspondiente al número de cédula es: " + resultado;



            } else {
                alert("El número de cédula debe estar entre 0 y 99999999.");
            }
        } else {
            alert("No has ingresado un número válido.");
        }
    }
}

function generarTabla() {
    var filas = parseInt(document.getElementById("Filas").value);
    var columnas = parseInt(document.getElementById("Columnas").value);
    var tabla = " ";
  
    var creadorTabla= document.createElement('table');



    var numero = filas * columnas;

  tabla = "<caption>Tabla</caption>";
  tabla += "<tr>";
  tabla += "</tr>";
    
    for (var i = 0; i < filas; i++) {
        
      tabla += "<tr>";
      
      for (var j = 0; j < columnas; j++) {
        tabla += "<td>" + numero + "</td>";
        numero--;
      }
      
      tabla += "</tr>";
    }
    
creadorTabla.innerHTML = tabla;

var div = document.getElementById('tablaDatos');
div.innerHTML = ""; // limpiar el contenido de la tabla
div.appendChild(creadorTabla);

  }

function CalcularPrecio(precio, iva){
precio = document.getElementById("Precio").value;
iva = document.getElementById("IVA").value;

var total = 0;

total = precio * (iva/100);

document.getElementById("TotalIVA").innerHTML = "El total del precio es: " + total;
}
