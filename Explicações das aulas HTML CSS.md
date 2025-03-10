## curso 3 - HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags
---
### ESCLARECENDO O CÓDIGO INICIAL ABAIXO:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Portfólio</title>
    </head>
    <body>
        <h1>Isso é um título</h1>
        <p>Isso é um parágrafo</p>
        <img scr="html.png" alt="Logo do HTML 5">
    </body>
</html>
````
```html
<!DOCTYPE html>
````
O !DOCTYPE html declara que será utilizado o HTML5
```html
<html></html>
```
<html> Significa que tudo que estiver entre sua abertura e fechamento será parte do html.
  
```html
<head></head>
````
É a meta informação que fica no canto da pagina, ali na aba  
```html
<title>Portifólio</title>
````
Insere o titulo dentro do canto da página citado acima
```html
<body></body>
````
O Body é propriamente a parte visível do código, onde inserimos titulos, subtitulos, parágrafos, imagens, etc. 
```html
<h1>Isso é um título </1>
````
h1 é o título visível, ele pode ir até h6, quanto maior menor fica o tamanho da letra, podendo ser usado para subtitulo também.
```html
<p>Isso é um parágrafo</p>
````
"P" Insere parágrafos, é importante declarar.

```html
<img src="dali.jpg" alt="A tentação de Santo Antão, Salvador Dali">
````
Aqui é como inserimos imagens, temos algumas observações:

- *<img >* não precisa fechar, ela indica que vamos inserir a imagem no local
- *src=* significa search, é o nome do nosso arquivo (deve estar na mesma pasta do projeto
- *alt* = é apenas uma descrição do que é a imagem, não aparece na página principal.
---
---
## curso 3 - HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags
---
---
### aula 3.0 -  CORPO BASE BASE DE UMA PÁGINA 
```html
<!DOCTYPE html>
<html lang="pt-br"a>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portifólio</title>
</head>
<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>
</html>
````
### ESCLARECENDO AS NOVAS TAGS:
```html
<html lang="pt-br"> 
````
Lang é a linguagem que ultilizaremos, no caso português Brasil
```html
<meta charset="UTF-8">
````
Dicionário de caracteres que serão ultilizados, deixar esse é o mais usado.
```html
<meta http-equiv="X-UA-compatible" content="IE=edge">
````
Configuração específica pro edge, orienta o computador a utilizar a versão mais atual, mesmo que não ultilizemos, devemos usar porque o usuário pode querer utilizar.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
````
Pega a largura e altura do dispositivo que está acessando a página e cria uma escala compatível com o tamanho da tela (evita que fique uma fonte enorme em tela pequena).
```html
<header></header>
````
Cabeçalho da página, parte superior que fica em destaque
```html
<main></main>
````
Conteúdo principal (parágrafos, botões)
```html
<footer></footer>
````
Rodapé da página, parte de baixo

----
### aula 4.0 - Detalhando o html

```html
<strong></strong>
````
Evidência um texto, destaca, dizemos ao html: destaque isso.
```html
<a href="url"> </a>
````
- A tag <a> TAG ANCORA, no HTML é usada para criar 
- O Nome que estiver no meio aparecerá na tela
- href = "" é igual ao scr de inserir imagens, é nele que você coloca o link da página, é onde insere o conteúdo pretendido, no caso o link.

---
### aula 5.0 - Iniciando em CSS
#### Geralmente se usa "style.css" no nome do css
#### Para que a estilização funcione,precisamos inserir no <head> (onde fica os metadados) códigos que vão fazer a conexão do html e css
```html
<link rel="stylesheet" href="style.css">   
````
- o rel indica qual a relação desse documento html com o outro documento Css
- Stylesheet é uma folha de estilo, que vai ficar localizado href= no arquivo style.css

### Iniciando
```html
body { }
````
Escrevemos o body porque é onde nosso código propriamente inicia com textos e imagens
```html
background-color: ;
````
Aqui serve para mudar a cor do fundo do local que escolhemos a cor, digitando o código, escrevendo o nome ou selecioando manual.

```html
color: White;
````
Escrevemos apenas isto e o nome da cor do texto dentro do local selecionado, jo caso o body, mas se for por exemplo o *strong* {} é só abrir alterar. vamos no css, e colocamos

```css
Strong {

color: #22D4FD;}
````
-----
### CLASSES NO CSS

É utilizado para alterar apenas uma parte do html e não um todo como víamos fazendo. ultilizamos ela DENTRO DAS TAGS, ex:
```html
<Strong class=""> </strong>
````
dentro dela colocamos o nome que representa o que é aquilo. se for um destaque do título, põem titulo-destaque , mas existem padrões também.
---
Para alterar no CSS apenas aquele destaque usamos o nome que referenciamos no classs com um ponto antes. ex:
```css
.titulo-destaque {
	color: #22D4FD;
}
````
Nosso código atual está assim:

```css
body {
    background-color: black;
    color:#F6F6F6;
}

Strong {
    color: #22D4FD
}

Utilizando classes ficará assim se alterado no código:

body {
    background-color: #000000;
    color: #F6F6F6;
}

.titulo-destaque {
    color: #22D4FD;
}
````
---
### BOX MODEL

Modelo de caixa é a forma como o CSS trabalha para estilizar uma página
Como selecionar todos os itens no css? com o *, ex:
```css
* {
Tudo inserido aqui alterará todo conteúdo.
}
````
A box Model trabalha com espaçamentos temos:
- margin: margem
- border: é invisível mas podermos dar cores.
- padding: fica dentro da borda,  espaço entre o conteúdo e a borda.


Podemos alterar no css para tirar o espaço, exemplo:
````css
* {
margin:0;
padding:0;
}
````
---
### #Como definir um tamanho oficial para o conteúdo da nossa página ultilize 100% Da nossa tela?

no campo BODY no css, definimos a altura primeiro com o comando
````css
body {
	height: 100vh; 
	}

````
O height é a altura do view port, ou seja que ultilize 100 da tela do navegador.
---
### BORDER BOX

Como definir que nenhum elemento saia da página, não ultrapasse o que definimos, visto que podem ter imagens maiores ou nomes com bordas?

com o comando box-sizing: border-box;
 
colocamos ele junto no campo body, ficando assim:
````css
body {
box-sizing: border-box;
height: 100vh; 
	}
````
---
### FLEX BOX - Posicionando elementos na página 

Link do guia completo: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Essa propriedade agrega itens em "caixas ou containers"
o elemento "pai" é a caixa, e os filhos são os itens dentro dela

Para  criar o elemento pai, usamos:
````css
display:flex;
````
Qual parte do código é o "pai" dos elementos?

nosso código: 
````html
<body>
    <header></header>
    <main>
        <h1>Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong></h1>
        <p>Olá! Maedson Lima, desenvolvedor back-end com especialidade em, HTML, Java Script e  CSS.Ainda sou estudante. Vamos conversar?</p>
        <a href="http://instagram.com/_maedson">instagram</a>
        <a href="https://github.com/maedsonlima">github</a>
        <img src="eu.png" alt="minha foto no computador codando">
    </main>
    <footer></footer>
</body>

Vemos que é o "main" então vamos criar uma classe dentro dele

<main class="apresentacao">
````
Agora no css, vamos estilizar:
````css
.apresentação {
display:flex;

}
````
Nota-se que por padrão ele colocará os elementos em linha horizontal, mas também pode ficar na vertical se desejar.

Se quisermos alinhar os objetos, no centro, final ou início usamos "align-items: center;"
````
.apresentação {
display:flex;
align-items: center

}
````
Vimos que ele agrupou tudo em uma coisa só, texto e imagem todos lado a lado, precisamos deixar conforme o projeto do figma:

https://www.figma.com/design/EjwLicLBseWUpkcYBDbLaB/Curso-1---HTML-e-CSS%3A-ambientes-de-desenvolvimento%2C-estrutura-de-arquivos-e-tags-%5BPortf%C3%B3lio%5D-(Community)?node-id=1-11&t=FXW6HyUMO79MEL0i-0

lado a lado, para isso vamos criar uma sessão como a função <section> visando separar ambos ficando assim:

````html
<body>
    <header></header>
    <main class="apresentacao">
        <section>
        <h1>Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong></h1>
        <p>Olá! Maedson Lima, desenvolvedor back-end com especialidade em, HTML, Java Script e  CSS.Ainda sou estudante. Vamos conversar?</p>
        <a href="http://instagram.com/_maedson">instagram</a>
        <a href="https://github.com/maedsonlima">github</a>
        </section>
        <img src="eu.png" alt="minha foto no computador codando">
    </main>
    <footer></footer>
</body>
````
Ele separou da forma correta a foto de um lado e os textos a direita.
Enfileirou em duas partes, uma com os elementos de texto dentro e ao lado a foto.
---
### ESPAÇANDO O BLOCO DOS TEXTOS DO BLOCO DA FOTO

Usamos o comando justify-content: space-between, aplicamos no css, lá em .apresentação, ele vai separar os blocos com o espaço correto.

Agora os textos ficaram todos pra esquerda e a foto pra direita com um espaço muito grande no meio, para deixar eles mais pro centro vamos criar uma margem só onde fica nosso conteúdo, no caso dentro do main, que no nosso CSS, estamos chamando por .apresentação

````css
.apresentacao {
    margin: 25%;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
````
---
### Estilizando o tamanho dos elementos

Para realizar essa modificação, precisamos criar uma class dentro da sessão para podermos selecionar de forma eficaz

*DICA: o elemento pai é o main e ela já possui uma classe chamada APRESENTACAO*

como vamos alterar o filho, "Um conteúdo que está dentro da APRESENTACAO
vamos dar o nome dessa classe assim: apresentacao__conteúdo
ele deve carregar o nome do pai e o que eu vou alterar.

ficando:  
````html
<section class="apresentacao__conteudo">
````
NO CSS COLOCAMOS
````
.apresentacao__conteudo{

}
````
---
### AJUSTANDO ALTURA E LARGURA DO CONTEUDO

No figma ver quais os tamanhos do conteúdo que foi pedido, basta clicar no grupo


W=615 (largura)
H=482 (altura)

agora alteramos dentro do CSS.
````css
.apresentacao__conteudo{
width: 615px;

}
````
---
### ALTERANDO TAMANHO DAS FONTES DOS TEXTOS

1- Vai no figma, ver o tamanho que está lá
2- cria uma class dentro de onde quer alterar, exemplo: o titulo, obs respeitando a ordem das classes.

````html
<h1>Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong></h1>    
````
criamos a classe dentro do h1
````
<h1 class="apresentacao__conteudo__titulo>Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong></h1>
````
fazemos isso para os parágrafos <p> e o que quisermos. depois só ir no CSS
````css
.apresentacao__conteudo__titulo {
}

e alterar o tamanho da fonte

usamos: FONT-SIZE: ; exemplo:


.apresentacao__conteudo__titulo {
	font-size:56px;
}
````
---
### ALTERANDO A FONTE DOS TEXTOS

1- vamos no googlefonts para poder importar a fonte ( https://fonts.google.com/)


2- escolhemos a fonte e descemos e clicamos em get font
3- colocamos a opção para css "import" e ele vai dizer qual nome colocamos no css 

colamos o código no topo do css com o link que será importado exemplo

@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');


4- dentro do css onde queremos alterar, colocamos o código:
````css
font-family: "Krona One", sans-serif;
````
dentro do font Family podemos colocar o nome da font que o google deu. ex:
````css
.apresentacao__conteudo__titulo {
    font-size: 56px;
    font-family: "Krona One", sans-serif;
}
````
---
### POSICIONANDO BOTÕES

Vamos criar uma DIV (uma divisão apenas, não é outro main nem uma seleção:

é uma forma básica de dividir o código mesmo, sem mecher no que está dentro da box, só pra poder configurar, <div> não tem valor semântico. 
Portanto, não significa nada para os navegadores e mecanismos de pesquisa. lém do mais, por ser muito utilizada para agrupar elementos, acaba facilitando na organização das informações nos layouts. fazemos assim:
````html
<div class="apresentacao__links">
            <a href="http://instagram.com/_maedson">instagram</a>
            <a href="https://github.com/maedsonlima">github</a>
            <a href="https://www.linkedin.com/in/maedson/">Linkedin</a>
            </div>
````
Feito isso, vamos no link do flex box e pesquisar qual a forma que queremos, no caso os botões lado a lado
no css criamos o ".apresentacao__links {}"
como vamos fazer um flex box aqui pra deixar lado a lado inserimos dentro:
````css
.apresentacao__links {
	display: flex;
} 
````
Nele agora inserimos o comando de deixar as caixinhas lado a lado:
````
.apresentacao__links {
	display: flex;
	justify-content: space-between;
} 
````
---
### ESTILIZANDO OS BOTÕES

Vamos criar uma classe dentro de cada botão assim: (pode ser o mesmo em todos os botões, assim aplica a todos.
````html
<a class="apresentacao__links__link" href="http://instagram.com/_maedson">instagram</a>


<a class="apresentacao__links__link href="https://github.com/maedsonlima">github</a>
            
<a class="apresentacao__links__link 

href="https://www.linkedin.com/in/maedson/">Linkedin</a>
            </div>
````
Agora no CSS, ALTERAMOS a cor do fundo e a largura

````css
.apresentacao__links__link{
    background-color: #22D4FD;
    width: 280px;
}
````
PARA CENTRALIZAR O TEXTO, TEM O COMANDO: "text-align: center;" ficando assim: 
````css
.apresentacao__links__link{
    background-color: #22D4FD;
    width: 280px;
    text-align: center;
}
````
PARA ARREDONDAR A BORDA DA CAIXA USAMOS O COMANDO: "border-radius: 16px;" o grau de arredondamento pegamos no figma.
````css
.apresentacao__links__link{
    background-color: #22D4FD;
    width: 280px;
    text-align: center;
    border-radius: 16px;
}
````
MUDAMOS O TAMANHO DA FONTE E A PROPRIA FONTE COM O COMANDO:
````css
font-size: 24px;
````
Agora aumentamos o tamanho da borda que contorna o nome

obs: no figma clicamos no elemento que queremos ver a distancia, clicamos no objeto, seguramos Alt e movemos o mouse pra ver a distancia.

Vamos inserir um padding para gerar a borda
````css
padding: 21.5px 0;
````
*OBS: o primeiro número cresce pro eixo vertical e o segundo horizontal, se deixar só um, ele aumenta pra todos os lados, como não queremos horizontal, deixamos 0.*
---
### TIRANDO O SUBLINHADO E DECORAÇÕES DO TEXTO QUE VEM DE PADRÃO:

Usamos o: text-decoration: none;

COLOCAMOS A COR PRETA NO TEXTO: color:#00000000;

ALTERAMOS A FONTE e o PESO DA FONTE: font-family: "Montserrat", sans-serif;

#FICANDO TUDO ASSIM:    
````css
.apresentacao__links__link{
    background-color: #22D4FD;
    width: 190px;
    text-align: center;
    border-radius: 16px;
    font-size: 24px;
    padding: 21.5px 0;
    text-decoration: none;
    color:#00000000;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
}
````
---
### ESPAÇANDO OS ELEMENTOS

USAMOS O FLEX BOX, (ele sempre é usado na tag containner, a que possui os outros) no caso na tag "apresentacao__conteúdo"

````css
.apresentacao__conteudo{
width: 615px;
display: flex;
}
````
Por padrão vem em linha, OLHAMOS NO GUIA, do flex box e vemos que o comando para ajustar para colunas é: flex-direction: column;

---
### CRIANDO O ESPAÇAMENTO DOS ELEMENTOS FILHOS

usamos o comando GAP
````css
gap: 40px;
````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````


````
````






