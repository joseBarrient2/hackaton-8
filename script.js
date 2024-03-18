

//btn_execute.addEventListener('click',sumar);

function sumar(){
let v1 = Number(document.getElementById('first_number').value);
let v2 = Number(document.getElementById('second_number').value);

let sumar= v1 + v2;
let boxResult = document.getElementById('result');
boxResult.innerHTML = sumar;

}

function calcular(){
    let nota_1 = Number(document.getElementById('note_1').value);
    let nota_2 = Number(document.getElementById('note_2').value);
    let nota_3 = Number(document.getElementById('note_3').value);
    let nota_4 = Number(document.getElementById('note_4').value);

    let calcular_promedio = (nota_1 + nota_2 + nota_3 + nota_4) / 4;
    let result = document.getElementById('promedio');
    result.innerHTML = calcular_promedio; 
}

function calcularRectangulo(){
    let hValue = Number(document.getElementById('alto').value);
    let wValue = Number(document.getElementById('ancho').value);

    let area = hValue * wValue;
    let box = document.getElementById('rectangle');
    box.innerHTML = area+ "cm<sup>2</sup>";

}

function calcularTriangulo(){
    let base = Number(document.getElementById('base').value);
    let height = Number(document.getElementById('altura').value);

    let operacion = base * height / 2;
    let figure = document.getElementById('triangle');
    figure.innerHTML = operacion;
}

function calcularCircunferencia(){
    let pi = 3.14;
    let radio = Number(document.getElementById('radio').value);
    let vCuadrado = radio * radio;
    
    let vCircunferencia = pi * vCuadrado;

    let circulo = document.getElementById('circulo');
    circulo.innerHTML = vCircunferencia + "cm<sup>2</sup>";
}


function calcularSueldo(){
    let workHours = Number(document.getElementById('jobHours').value);
    let payHours = Number(document.getElementById('dollarsHours').value);
    let payTotal = workHours * payHours;
    
    let sueldo = document.getElementById('pSueldo');
    sueldo.innerHTML = "S/"+ payTotal;
}

function convertMetersToInches(){
    let inches = 39.37
    let telasMetros = Number(document.getElementById('metrosTela').value);
    let valorFinal = telasMetros * inches;
    
    let totalInches = document.getElementById('tela');
    let metros = document.getElementById('m');
     metros.innerHTML = telasMetros + " metros";
    totalInches.innerHTML = Math.floor(valorFinal) + " Pulgadas";
}



function convertirSoles(){
    let valor_dolar = 3.69;
    let valorSoles = Number(document.getElementById('cuantoTienes').value);
    let valorFinal = valorSoles / valor_dolar;

    if(valorSoles < valor_dolar){
        let boxDolar = document.getElementById('vDolar');
        boxDolar.innerHTML = "Dinero insuficiente, minimo debes tener: S/"+valor_dolar;
    }
    else{
        let boxDolar = document.getElementById('vDolar');
        boxDolar.innerHTML = "$"+valorFinal;  
        }   
}

function calculaTuBono(){
    let timeWork = Number(document.getElementById('anhosTrabajo').value);
    if(timeWork == 1){
        //$100
        let boxBono = document.getElementById('bono');
        boxBono.innerHTML = "Te toca recibir un bono de: $100 dolares";
    }
    else if(timeWork == 2){
        let boxBono = document.getElementById('bono');
        boxBono.innerHTML = "Te toca recibir un bono de: $200 dolares";
    }
    else if(timeWork == 3){
        let boxBono = document.getElementById('bono');
        boxBono.innerHTML = "Te toca recibir un bono de: $300 dolares";
    }
    else if(timeWork == 4){
        let boxBono = document.getElementById('bono');
        boxBono.innerHTML = "Te toca recibir un bono de: $400 dolares";
    }
    else if(timeWork == 5){
        let boxBono = document.getElementById('bono');
        boxBono.innerHTML = "Te toca recibir un bono de: $500 dolares";
    }
    else if(timeWork > 5){
        let boxBono = document.getElementById('bono');
        boxBono.innerHTML = "Te toca recibir un bono de: $1000 dolares";
    }
}


function puedesVotar(){
    
    let edad = Number(document.getElementById('edad').value);
    if(edad >= 18){
        let votar = document.getElementById('votar');
        votar.innerHTML = "Felicidades. Si puedes votar";
    }
    else{
        let votar = document.getElementById('votar');
        votar.innerHTML = "Eres menor. No puedes votar";
    }
    
}


function calcularSalario(){
    let salarioInicial = 1500;//$
    //1500 x 10 / 100

    for(x=0;x<6;x++){
        let porcentage = (salarioInicial * 10) / 100;
        let total = salarioInicial + porcentage;
        salarioInicial = total;
       // console.log(salarioInicial);

        let boxAmount = document.getElementById('amout');
        boxAmount.innerHTML = boxAmount.value += ("En el año numero "+ (x+1) +" recibio: "+ total + "<br>");
    }
    
    let pagoX6 = document.getElementById('pagoTotal');
    pagoX6.innerHTML ="Despues de 6 años su salario aumento a: " + "$"+ salarioInicial;

}

function calcularEdadXAnho(){
    let anhoNacimeinto = Number(document.getElementById('queahno').value);
    let date = new Date();
    let actualAnho = date.getFullYear();
    //console.log(anho);
    let age = actualAnho - anhoNacimeinto;
    
    let resultEdad = document.getElementById('edadAnho');
    resultEdad.innerHTML = "Naciste: "+ anhoNacimeinto+". Tu edad es de: "+ age;
}