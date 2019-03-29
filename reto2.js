/**
 * Ejercicio 2
 */
function calcularPi() {
    var numeroTerminos = 10000;
    var resultado = 2;
    for (var i = 1; i <= numeroTerminos; i++) {
        resultado *= ((2 * i) / ((2 * i) - 1)) * ((2 * i) / ((2 * i) + 1));
    }
    console.log(resultado);
}

/**
 * Ejercicio 4
 */

function obtenerDomingoPascua() {
    var maximoAnio = 2000;
    var minAnio = 1990;
    var resultado = "";
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    for (var i = minAnio; i <= maximoAnio; i++) {
        a = i % 19;
        b = i % 4;
        c = i % 7;
        d = (19 * a + 24) % 30;
        e = (2 * b + 4 * c + 6 * d + 5) % 7;
        resultado += i + " -> " + calcularFecha(22 + d + e)
            + "<br>";
    }
    console.log(resultado);
}

function calcularFecha(dias) {
    if (dias > 31) {
        return (dias - 31) + " de abril";
    }
    return dias + " de marzo";
}



/**
 * Ejercicio 8
 */
function calcularEjercicio8() {
    var x = 2;//ingresar
    var maxPotencia = 100;
    var i = 1;
    var resultado = 1;
    for (i; i <= maxPotencia; i++) {
        resultado += (Math.pow(x, i) / factorial(i));
    }
    console.log(resultado);
}

function factorial(n) {
    var resultado = 1;
    var i = 1;
    for (i; i <= n; i++) {
        resultado *= i
    }
    return resultado;
}
/**
 * Ejercicio 11
 */

 function validarNumeroPrimo(){
     var numero = 11;
     var mitad = numero / 2;
     var isPrimo = "Es primo";
     for(var i = 2; i <= mitad ; i++){
        if(numero % i === 0){
            isPrimo = "No es primo";
            break;
        }
     }
     if(numero === 1) isPrimo = "No es primo";
     console.log(isPrimo);
 }

/**
 * Ejercicio 12
 */
function calcularSerie12(){
    var resultado = 0 ;
    var numeroMaximo = 10;
    for(var i = 1; i<=numeroMaximo ; i++){
        resultado += (1/i);
    }
    console.log(resultado);
}

/**
 * Ejercicio 13
 */
function calcularSerie13(){
    var resultado = 0 ;
    var numeroMaximo = 3;
    for(var i = 1; i<=numeroMaximo ; i++){
        resultado += (i/Math.pow(2,i));
    }
    console.log(resultado);
}

/**
 * Ejercicio 14
 */
function mostrarLineas() {
    var lineas = 10;
    var grafica = '';
    var i = 0;
    for (i; i <= lineas; i++) {
        var j = 0;
        for (j; j < i; j++) {
            grafica += "*"
        }
        grafica += "<br>";
    }
    console.log(grafica);
}

/**
 * Ejercicio 15 
 */
function listarNumerosPerfectos() {
    var numeroLimite = 10000;
    var resultado = "";
    for(var i = 1; i < numeroLimite;i++){
        if(validarNumeroPerfecto(i)){
            resultado+=" " + i;
        }
    }
    console.log(resultado);
}

function validarNumeroPerfecto(numero) {
    var mitad = numero / 2;
    var suma = 0;
    for (var i = 1; i <= mitad; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma === numero;
}