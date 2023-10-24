function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }


const nome = prompt("Digite seu nome: ");
//Deve ser dentro do bloco DO WHILE const operacao = prompt("Deseja efetuar qual operação?\nSaque\nDepósito")

//let status2 = conta;
let conta = 0;
let saque = 0;
let deposito = 0;

let again;

do{

    const operacao = prompt("Deseja efetuar qual operação?\nSaque\nDepósito\nStatus").toLowerCase();
    const operacaoSemAcento = removerAcentos(operacao);

    let status2 = conta;
    switch(operacaoSemAcento){
        case "saque":
        saque = Number(prompt("Digite quanto você quer sacar: "))
            conta = - saque;
            alert(`Você sacou R$${conta.toFixed(2).replace('.',',')}`)
            break
            case "deposito":
                deposito = Number(prompt("Voce escolheu Depósito"))
                conta = + deposito;
                alert(`Você depositou R$${conta.toFixed(2).replace('.',',').replace('-','$')}`)
                break
            case "status":
                //status2 = conta
                status2 = Number(alert(`Você escolheu o Status bancário: ${conta.toFixed(2).replace('.',',')}`)) 
            }
   again = confirm("Você deseja voltar ao menu?")

}while(again) 