var titulo = document.querySelector(".titulo")
titulo.textContent = "SAVE THE FAMILY"

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < 5; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

//  validando peso,altura e imc

    var pesoEhValido = validaPeso(peso)
    var alturaEhValido = validaAltura(altura)
    
    if (!pesoEhValido){
        console.log("Peso inválido")
        pesoEhValido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaEhValido){
        console.log("Altura inválido")
        var alturaEhValido = false
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValido && pesoEhValido){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso){
    if (peso >=0 && peso <= 1000){
        return true
    }
    else{
        return false
    }
}

function validaAltura(altura){
    if (altura >=0 && altura <= 3){
        return true
    }
    else{
        return false
    }
}
//  calculando IMC
function calculaImc(peso,altura){
    var imc = 0
    var imc = peso/(altura*altura)

    return imc.toFixed(2)
}
