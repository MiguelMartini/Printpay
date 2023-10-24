/*function removerAcentos(texto) {
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
          if(saque <= conta){
            conta -= saque;
            alert(`Você sacou R$${saque.toFixed(2).replace('.',',')}`)  
          } else{
            alert("Você não possui saldo suficiente para sacar")
          }
            break
//-----------------
            case "deposito":
                deposito = Number(prompt("Voce escolheu Depósito"))
                conta += deposito;
                alert(`Você depositou R$${conta.toFixed(2).replace('.',',').replace('-','$')}`)
                break

//-----------------

            case "status":
                //status2 = conta
                status2 = Number(alert(`Você escolheu o Status bancário: ${conta.toFixed(2).replace('.',',')}`)) 
                break;

                default:
                    alert("Operação não reconhecida, favor selecione novamente")
            }

   again = confirm("Você deseja voltar ao menu?")

}while(again) */

/*Menu*/
const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

//MENU LATERAL ICONE
const menus = document.getElementsByClassName('navi');
const icones = document.getElementsByClassName('profile');

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('transitionend', function () {
    if (menus[i].offsetWidth === 300) {
      icones[i].style.transform = 'scale(1.5)';
    } else {
      icones[i].style.transform = 'scale(1)';
    }
  });
}

