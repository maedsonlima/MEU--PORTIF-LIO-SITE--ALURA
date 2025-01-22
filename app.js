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
//break serve para parar o looping do while
// alert ("bem vindo ao acerte a idade do lufinho");
// parseInt - transforma em número inteiro
// Math.random () (M sempre maíusculo), gera um número aletório entre 0 e 1, ex: 0.25


let nome = prompt("insira seu nome pirata!")

let numeroMaximo = 1000 ;

let idadeDoLufinho = parseInt(Math.random () * numeroMaximo + 1);
// parseInt vai converter todo calculo feito do que tá em parenteses na frente para um inteiro
// Math.random () vai gerar o número entre 0 e 1, ex: 0,25253. para deixar esse 
// esse número na casa de 1 e 100, multiplicamos por 100, ex: 25,253. 

// Mas se quisessemos que fosse até 3, ou de 1 a té 5, é só mudar a multiplicação por esse número
// e somar +1, ex:  parseInt(Math.random () *3 + 1); para ir de 1 a 3, se quiser que o 0 apareça
// só não multiplicar pelo número acima do que quer e não somar o 1, ex: parseInt(Math.random () *4)

// somamos + 1 porque o math.random não gera o número 100, então assim garante 0 a 100. 
// o parseInt então vai converter esse 25,253 para 25.

let chute;
let tentativas = 1;

console.log (idadeDoLufinho);



// enquanto o chute não for igual a idade do lufinho
while (chute != idadeDoLufinho) {

chute = prompt(`Qual a idade do luffy entre 1 e ${numeroMaximo}`);

    if (chute == idadeDoLufinho){
        break;  //serve para parar a execução do código.

   } else {
        if (chute > idadeDoLufinho) {
            alert (nome + " mano, ele é mais novo");
    
        } else {
            alert (nome + " ele é mais velho");
        }
    }
    //tentativas++ = tentativas + 1;
    tentativas++;

}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert ("Parabéns " +nome + " você acertou, a idade é " +idadeDoLufinho+ " com " +tentativas + " "+palavraTentativa);
console.log (tentativas);

//como ler esse trecho acima?
//básicamente: a variável "palavraTentativa será igual a variável de tentativas calculadas no jogo
// , > 1 ? é uma pergunta: " tentativas é maior que 1?"" se sim realize o primeiro comando "tentativas", 
// se não, realize o que está depois dos : que é "tentativa". é a mesma coisa desse if e else abaixo


//if (tentativas > 1 ) {
//alert ("parabéns "+ nome + " você acertou a idade é " + idadeDoLufinho + " com " +tentativas + " tentativas");

//}else {
//   alert ("parabéns "+ nome + " você acertou a idade é " + idadeDoLufinho + " com " +tentativas + " tentativa");
//}


//teste

