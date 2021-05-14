Swal.fire({
    icon: 'succes',
    title: 'WELCOME'
})

var operandoA;
var operandoB;
var operador;

function inicializar(){
    //variables
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var num3 = document.getElementById('num3');
    var num4 = document.getElementById('num4');
    var num5 = document.getElementById('num5');
    var num6 = document.getElementById('num6');
    var num7 = document.getElementById('num7');
    var num8 = document.getElementById('num8');
    var num9 = document.getElementById('num9');
    var cero = document.getElementById('cero');
    var resultado = document.getElementById('resultado');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var mult = document.getElementById('mult');
    var div = document.getElementById('div');
    var borrar = document.getElementById('borrar');
    var igual = document.getElementById('igual');

    //eventos
    num1.onclick = e =>{return resultado.textContent += + "1";}
    num2.onclick = e =>{return resultado.textContent += + "2";}
    num3.onclick = e =>{return resultado.textContent += + "3";}
    num4.onclick = e =>{return resultado.textContent += + "4";}
    num5.onclick = e =>{return resultado.textContent += + "5";}
    num6.onclick = e =>{return resultado.textContent += + "6";}
    num7.onclick = e =>{return resultado.textContent += + "7";}
    num8.onclick = e =>{return resultado.textContent += + "8";}
    num9.onclick = e =>{return resultado.textContent += + "9";}
    cero.onclick = e =>{return resultado.textContent += + "0";}

    suma.onclick = e =>{
        operandoA = resultado.textContent;
        operador = "+";
        limpiar();

    }
    resta.onclick = e =>{
        operandoA = resultado.textContent;
        operador= "-";
        limpiar();

    }
    mult.onclick = e =>{
        operandoA = resultado.textContent;
        operador = "*";
        limpiar();

    }
    div.onclick = e =>{
        operandoA = resultado.textContent;
        operador = "/";
        limpiar();
    }
    igual.onclick = e =>{
        operandoB = resultado.textContent;
        resolver();
    }
    borrar.onclick = e => {
        resultado.textContent = "";
        operandoA = 0;
        operandoB = 0;
        operación = "";
    }

}

function limpiar(){
    resultado.textContent ="";
}

function resolver() {
    var res = 0;
    switch (operador){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
        break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
        break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
        break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
        break;

        default:
            res = "No existe ese operador"
        break;

    }
    resultado.textContent = res;
}
