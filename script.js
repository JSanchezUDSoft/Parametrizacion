let ac=0;

function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
}

const lanzardado = function(a) {
    document.getElementById("txt" + a).value = getRandomInt();
    document.getElementById("btn" + a).disabled = true;
}

const lanzar6 = function() {
    for(var i=1; i<=6; i++){
        document.getElementById("txt" + i).value = getRandomInt();
        document.getElementById("btn" + i).disabled = true;
    }
}

const lanzarA = function() {
    var menu = true;
        for(var i=1; i<=6; i++){
            document.getElementById("txt" + i).value = getRandomInt();
            document.getElementById("btn" + i).disabled = true;
        }
        validar();
}

function reset(){
    for(var i=1; i<=6; i++){
        document.getElementById("txt"+i).value="";
        document.getElementById("btn" + i).disabled = false;
    }
}

function validar(){
    const valores = [], validacion = [];
    ac = ac+1;

    valores[0] = document.getElementById("txt1").value;
    valores[1] = document.getElementById("txt2").value;
    valores[2] = document.getElementById("txt3").value;
    valores[3] = document.getElementById("txt4").value;
    valores[4] = document.getElementById("txt5").value;
    valores[5] = document.getElementById("txt6").value;

    for(var i=0; i<6; i++){
        if(valores[i]==1){
            validacion[0] = 1;
        }
        else if(valores[i]==2){
            validacion[1] = 2;
        }
        else if(valores[i]==3){
            validacion[2] = 3;
        }
        else if(valores[i]==4){
            validacion[3] = 4;
        }
        else if(valores[i]==5){
            validacion[4] = 5;
        }
        else if(valores[i]==6){
            validacion[5] = 6;
        }
        else{
        }
    }
    console.log(validacion.join(''))
    if(validacion.join('')=="123456"){
        alert("Se logró obtener los números 1,2,3,4,5,6 en cualquier orden en la ronda de lanzamiento #: " + ac);
        clearInterval();
        agregarDatosTabla(valores[0], valores[1], valores[2], valores[3], valores[4], valores[5], validacion.join(', '), 1);
    }
    else{
        agregarDatosTabla(valores[0], valores[1], valores[2], valores[3], valores[4], valores[5], validacion.join(', '), 0);
    }
    reset();
    document.getElementById("lanzamientos").innerHTML = "Ronda de lanzamiento # " + ac;
}

function agregarDatosTabla(a,b,c,d,e,f,g,h){
    if(h==0){
        document.getElementById('tbl1').insertRow(-1).innerHTML = '<th scope="row">'+ac+'</th><td>'+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td>'+e+'</td><td>'+f+'</td><td>'+g+'</td>';
    }
    else{
        document.getElementById('tbl1').insertRow(-1).innerHTML = '<th scope="row" class="table-dark">'+ac+'</th><td class="table-dark">'+a+'</td><td class="table-dark">'+b+'</td><td class="table-dark">'+c+'</td><td class="table-dark">'+d+'</td><td class="table-dark">'+e+'</td><td class="table-dark">'+f+'</td><td class="table-dark">'+g+'</td>';
    }
}