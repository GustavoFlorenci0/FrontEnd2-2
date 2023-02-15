function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function ganhador(ValorJogador , valorMaquina) {
    switch (ValorJogador) {
        case valorMaquina:
            return  "empatou";
    
        case 1: 
            if (valorMaquina == 2) {
                return  "Maquina Venceu";
            }
             else return "Jogador Venceu";

        case 2: 
            if (valorMaquina == 3) {
                return "Maquina Venceu";
            }
             else return "Jogador Venceu ";
                         
        case 3:
            if (valorMaquina == 1) {
                return "Maquina Venceu";
            }
            else return "Jogador Venceu";            

        default:
            break;
    }
}

function tradutor(valor) {
    if (valor == 1) {
        return "Pedra"        
    } else if (valor ==2) {
        return "Papel"
    } else {
        return "Tesoura"
    }
}

let n1 = 0;
let n2 = 0;


function ativarGame(valor){
    let escolhaMaquina = getRandomIntInclusive(1,3);
    let n = parseInt(valor);    
    let resultado = ganhador(n, escolhaMaquina)    
     


    if (resultado == "empatou") {
        
    } else if (resultado == "Jogador Venceu") {        
        n1 += 1;
        document.querySelector('#jogador').innerHTML = n1;
    } else if (resultado == "Maquina Venceu") {    
        n2 +=1;
        document.querySelector('#maquina').innerHTML = n2;
    }


    if (n1 >= 2 ) {
        alert("Jogador Venceu")
        n1 = 0;
        n2 = 0;
        document.querySelector('#jogador').innerHTML = n1;
        document.querySelector('#maquina').innerHTML = n2;
    } else if (n2 >= 2) {
        alert("Maquina Venceu")
        n1 = 0;
        n2 = 0;
        document.querySelector('#jogador').innerHTML = n1;
        document.querySelector('#maquina').innerHTML = n2;
    }


    console.log(n1);
    console.log(n2);

    document.querySelector('#vencedor').innerHTML = resultado;
    document.querySelector('#escolhaMaquina').innerHTML = tradutor(escolhaMaquina);
}
    

    
