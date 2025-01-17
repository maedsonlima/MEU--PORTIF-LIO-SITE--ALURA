// alert = mostra uma mensagem na tela
// let = armazena uma informação
// prompt = pede algo, caixa de diálogo
// console.log = codigo secreto para mensagens e coisas só entre devs
// if = condicionante "se", serve  para coisas do tipo "se isso, faça isso"
// ` = No início e fim serve pra que fique dinamico, quando pedir pra printar não precisa que altere o valor
// while = enquanto, faz  o negócio rodar até funcionar
// essa `é pra mudar o tipo, poem um no fim e começo
    // pra imprimir na tela o nome de um let dentro de um texto poem 
    // o simbolo do dinheiro $ e {}, só por dentro que fica
    //  alert (`parabéns ${nome} você é um mugwara e acertou a idade é ${idadeDoLufinho}`);}
// ++ é a mesma coisa que adicionar +1 a um valor sempre que o código passar por ali
//AGORA TENHO GITHUB

alert ("bem vindo ao acerte a idade do lufinho");

let nome = prompt("insira seu nome pirata!")

let idadeDoLufinho = 11;

let chute;
let tentativas = 1;

console.log (idadeDoLufinho);



// enquanto o chute não for igual ao número secreto
while (chute != idadeDoLufinho) {

chute = prompt("Qual a idade do lufinho mugwara?");

    if (chute == idadeDoLufinho){
        alert ("parabéns "+ nome + " você acertou a idade é " + idadeDoLufinho + "com " +tentativas + " tentativas");}
   
    else {
        if (chute > idadeDoLufinho) {
            alert (nome + " mano, ele é mais novo");
    
        } else {
            alert (nome + " ele é mais velho");
        }
    }
    //tentativas++ = tentativas + 1;
    tentativas++ 

}


