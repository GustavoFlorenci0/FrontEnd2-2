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
                return  "Maquina";
            }
             else return "Jogador";

        case 2: 
            if (valorMaquina == 3) {
                return "Maquina";
            }
             else return "Jogador";
                         
        case 3:
            if (valorMaquina == 1) {
                return "Maquina";
            }
            else return "Jogador";            

        default:
            break;
    }
}

let J1 = 0;
let J2 = 0;
let Jogo = 0

console.log(Jogo);

while (Jogo < 1) {

    let escolhaMaquina = getRandomIntInclusive(1,3);
    let valorInformado = parseInt(prompt(" Escolha Pedra(1), Papel(2) ou Tesoura(3)?"));
    
    let resultado = ganhador(valorInformado,escolhaMaquina);
    console.log(resultado);

    if (resultado == "empatou") {
        alert("Empatou");
    } else if (resultado == "Jogador") {
        J1 += 1;
        alert("Voce venceu a rodada");
    } else if (resultado == "Maquina") {    
        J2 +=1;
        alert("Maquina venceu a rodada");
    }
    
    if (J1 == 2) {
        Jogo =1
        alert("jogador venceu")
    } else if (J2 == 2){
        Jogo =1
        alert("Maquina venceu")
    }
    console.log("jogador " + J1);
    console.log("jogador " + J2);
} 


alert("Jogo acabou");

