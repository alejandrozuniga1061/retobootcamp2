
/**
 * Ejercicio 14
 */
function mostrarLineas(){
    var lineas = 10;
    var grafica = '';
    var i = 0;
    for(i; i <= lineas; i++){
        var j = 0;
        for(j; j < i; j++){
            grafica+="*"
        }
        grafica+="<br>";
    }
    console.log(grafica);
}

/**
 * Ejercicio 8
 */
function calcularEjercicio8(){
    var x = 2;//ingresar
    var maxPotencia = 100;
    var i = 1;
    var resultado = 1;
    for(i; i <=maxPotencia;i++){
        resultado+=(Math.pow(x,i)/factorial(i));
    }
    console.log(resultado);
}

function factorial(n){
    var resultado = 1;
    var i = 1;
    for(i; i<=n;i++){
        resultado*=i
    }
    return resultado;
}