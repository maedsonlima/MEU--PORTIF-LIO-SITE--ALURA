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
Dicionário de caracteres que serão ultilizados, deixar esse é o mais usado. Ele engloba todos que ultilizamos inclusive inglês
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
DEIXANDO A PÁGINA NO PADRÃO 2 

LINKS NA VERTICAL E O NOME: Acesse minhas redes

1- dentro da DIV que separa os links dos textos, vamos inserir um <h2>, ele será o subtitulo

```css
<body>
    <header></header>
    <main class="apresentacao">
    <section class="apresentacao__conteudo">
        <h1 class="apresentacao__conteudo__titulo">Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong></h1>
        <p class="apresentacao__conteudo__texto">Olá! Maedson Lima, desenvolvedor back-end com especialidade em, HTML, Java Script e  CSS.Ainda sou estudante. Vamos conversar?</p>
            <div class="apresentacao__links">
            <h2>Acesse minhas redes:</h2>
            <a class="apresentacao__links__link" href="http://instagram.com/_maedson">instagram</a>
            <a class="apresentacao__links__link" href="https://github.com/maedsonlima">github</a>
            <a class="apresentacao__links__link" href="https://www.linkedin.com/in/maedson/">Linkedin</a>
            </div>
        </section>
    <img src="eu.png" alt="minha foto no computador codando">
    </main>
    <footer></footer>
</body>
```
Agora vamos deixar eles alinhados em coluna, no css na ".apresentacao__links"

O display: flex;  deixa em linhas, vamos colocar em coluna, com: flex-direction: column;
```css
.apresentacao__links{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```
Vamos alinhar esses objetos no centro para ficarem um em cima do outro tudo certinho com o comando align-items: center;

```css
.apresentacao__links{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
```
vamos separar os itens, estão muito colados, usamos o comando "gap"
a distância vemos lá no figma como ensinado a cima:


```css
.apresentacao__links{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
}
```
Alterando a fonte: vamos fazer  o de sempre, criar uma classe dentro do <h2> e chamar de apresentacao__links__subtítulo, e depois alterar no css

```html
<h2 class="apresentacao__links__subtitulo">Acesse minhas redes:</h2>
```
no css sempre colocamos na ordem em que aparece na página, então vamos deixar entre o .apresentação__conteudo__texto e o  .apresentacao__links, colocamos também o peso da fonte em 400;
e também o tamanho da fonte em 24
```css
.apresentacao__links__subtitulo{
font-family:"Krona One", sans-serif;
font-weight: 400;
font-size: 24px;
}

```
TIRANDO A COR DO FUNDO DOS LINKS E HABILITANDO BORDA

Para tirar a cor é só transformar o código em comentário com CTRL + K + C
```css
/* background-color: #22D4FD; */
```
Mudamos a cor do nome para branco conforme o figma
```css
color:#f6f6f6;
```
A BORDA VOCÊ PEGA NO FIGMA ELE VAI DAR EXATAMENTE COMO É PRA FICAR
```css
border: 2px solid #22D4FD;
```border é a corda, 2px é a largura, solid é o estilo, tem outros como pontilhado etc, e no fim é a cor.
---
Mudamos width que é a largura total para 378px conforme figma
```css
 width: 378px;
```
------------------------------------------------------------------------
###INSERINDO IMAGENS DOS SIMBOLOS DOS LINKS

Deixamos todos os incones e símbolos em uma pasta separada para facilitar

chamamos ela de ASSETS e alteramos dentro do html, para trocar é só colocar um ./ no começo dentro do src""
```html
 <img src="./assets/eu.png"  alt="minha foto no computador codando">
```
---
###COLOCANDO SIMBOLOS  AO LADO DOS NOMES

pega a parte do código que declaramos os nomes dos links um a um, exemplo:
```html
<a class="apresentacao__links__link" href="http://instagram.com/_maedson">instagram


</a>

```
Vamos inserir a imagem dentro da mesma forma que inserimos minha foto ficando assim:
```
            <a class="apresentacao__links__link" href="http://instagram.com/_maedson">
                <img src="./assets/instagram.png">
                instagram 
            </a>      
            <a class="apresentacao__links__link" href="https://github.com/maedsonlima">
                <img src="./assets/github.png">
                github
            </a>
            <a class="apresentacao__links__link" href="https://www.linkedin.com/in/maedson/">
                <img src="./assets/linkedin.png">
                Linkedin
            </a>
```
---
###Alinhando o texto dos links com as fotos dos incones

vamos procurar qual propriedade do CSS usamos para tratar dos links, no caso o .apresentacao__links__link e vamos personalizar, para isso inserimos o comando: display:flex

em seguida o comando para centralizar: justify-content: center;

ele vai deixar no centro, mas ambos colados um no outro, para se parar
vemos o espaçamento no figma e colocamos o comando gap 
```html
.apresentacao__links__link{
    display:flex;
    justify-content: center;
    gap: 16px;
    border: 2px solid #22D4FD;
    width: 378px;
    text-align: center;
    border-radius: 8px;
    font-size: 24px;
    padding: 21.5px 0;
    text-decoration: none;
    color:#f6f6f6;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    ;
}
```
---
### HOVER - COMO DESTACAR CONTEÚDO QUANDO PASSAR O MOUSE

ultilizaremos esse recurso nos links

1- VEJA O LOCAL QUE VOCÊ QUER APLICAR, vamos aplicar nos botões que está no 

```html
.apresentacao__links__link{
    display:flex;
    justify-content: center;
    gap: 16px;
    border: 2px solid #22D4FD;
    width: 378px;
    text-align: center;
    border-radius: 8px;
    font-size: 24px;
    padding: 21.5px 0;
    text-decoration: none;
    color:#f6f6f6;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    ;
}
```
2- a configuração será substituídas momentaneamente por outra quando ultilizamos o hover, para fazer isto basta chamar a tag + : hover assim:
```html
.apresentacao__links__link:hover{

}
```
3- Configuremos as coisas que queremos que alterem quando passar o mouse, nesse caso só o fundo do nome dos links ficará um pouco mais claro

```html
.apresentacao__links__link:hover {
    background-color: #272727;
}

```
---
### FOOTER - FAZENDO A PARTE DE BAIXO DA PÁGINA

Vamos criar um <p> dentro do footer (tag parágrafo) e colocar o nome dentro:
```html
<footer>
        <p>Desenvolvido por Maedson</p>
    
    </footer>
```
Agora vamos estilizar, para isso fazemos o de sempre, criamos uma classe no footer
```
  <footer class="rodape">
        <p>Desenvolvido por Maedson</p>
    
    </footer>
```
No css estilizamos: 
```
.rodape {
    color: #000000;
    background-color:#22D4FD;
}

```
##AJUSTANDO O TAMANHO

Vamos adicionar algo para aumentar, importante ver em elementos no navegador a relação do padding, margin e borda... 

margin: Cria da borda pra fora
padding: cria da borda pra dentro

adicionaremos um padding do tamanho que está no figma, clicando no objeto e segurando alt ele mostra a distancia
```css
.rodape {
    padding: 24px;
    color: #000000;
    background-color:#22D4FD;
    text-align: center;
}

```
## Alinhando o texto no meio da página

Usando o comando text-align: center;
```css
.rodape {
    padding: 24px;
    color: #000000;
    background-color:#22D4FD;
    text-align: center;
}
```
## AJUSTANDO TAMANHO E FONTE e PESO

Usando os comandos de sempre:
```css

.rodape {
    padding: 24px;
    color: #000000;
    background-color:#22D4FD;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 400px;
}
```
## AJUSTANDO VISUALIZAÇÃO DA PÁGINA NA TELA

No início estabelecemos que seria visualizado 100% da tela no campo body, mas dessa forma o footer fica invisível pois está em baixo então vamos remover esse campo transformando em comentário.


### AQUI FIZ UNS EXPERIMENTOS MUDANDO O TIPO DE FLEX BOX DE ALINHAMENTO DE BETWENN PARA COLUMN E AS LATERAIS

NÃO USAREMOS ESSE CÓDIGO, ELE FICOU COMENTADO
```css
.apresentacao {
    margin: auto;
    padding:5% 24%;
    display:flex;
    align-items: center;
    justify-content: column;
    gap: 244px;
}
```
---
### AJUSTANDO TELA

No campo .apresentação é onde ficará a pági de vez, oficial deixamos assim
```css
.apresentacao {
    padding:8% 20%;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
```
# 📏 Diferença entre Margin, Padding e Borda

Quando trabalhamos com **CSS**, é essencial entender a diferença entre **Margin**, **Padding** e **Borda**. Esses três conceitos definem o **espaçamento e estrutura** dos elementos em uma página.

## 🔍 Estrutura da Caixa no CSS

Cada elemento HTML pode ser representado como uma caixa, composta pelos seguintes componentes:
```
+---------------------------+
|         MARGIN            | (Espaço externo ao redor da borda)
|  +---------------------+  |
|  |       BORDER        |  | (A borda do elemento)
|  |  +---------------+  |  |
|  |  |   PADDING     |  |  | (Espaço interno entre o conteúdo e a borda)
|  |  | +-----------+ |  |  |
|  |  | | CONTENT   | |  |  | (O conteúdo do elemento)
|  |  | +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

## 📌 Definição de cada um:

- **Margin** 🏞️ → Espaço externo ao redor da borda do elemento.  
- **Borda** 🖼️ → Linha ao redor do elemento (pode ser visível ou não).  
- **Padding** 🎁 → Espaço interno entre a borda e o conteúdo.  
- **Conteúdo** 📝 → Texto, imagem ou outro elemento dentro da caixa.  

---

## 🎨 Exemplo CSS:
```css
.box {
    margin: 20px;  /* Espaço externo */
    border: 5px solid red;  /* Borda vermelha */
    padding: 15px;  /* Espaço interno */
    background-color: lightblue; /* Cor de fundo */
}

```
---
---
## HEADER = CABEÇALHO 

Vamos criar  2 botões o da página inicial e o da página sobre mim.

Para navegação na página, onde clicamos e ele leva você a uma outra parte do site que não é um link externo, mas sim viajar na própria página.

- DENTRO DO HEADER USAREMOS O COMANDO: <nav> </nav> para navegar.
- Criaremos "tags" ancora dentro do nav, as duas que queremos navegar.
```html
<body>
    <header>
	<nav> 
	     <a>Home</a>
	     <a>Sobre mim</a>
	</nav>	

    </header>
```
# Personalizando as ancoras

vamos criar as classes dentro do header para poder personalizar

```html
<body>
    <header class="cabecalho">
	<nav class="cabecalho__menu"> 
	     <a class="cabecalho__menu__link">Home</a>
	     <a class="cabecalho__menu__link">Sobre mim</a>
	</nav>	

    </header>
```
Criamos classe para o cabeçalho (pai, área total) 
o menu (área dos botões)
link os próprios botões clicáveis

---
No CSS colocamos as estilizações na ordem em que aparece no site para facilitar a organização, no caso ela ficará antes da .apresentacao{}

e estilizamos conforme figma.
```css
.cabecalho__menu__link {
    font-family: "Montserrat", sans-serif;
    font-size:24px;
    font-weight: 600;
    color: #22D4FD;

}
```
### AJUSTANDO A POSIÇÃO

para ajustar as duas ancoras pro lado, vamos usar o padding, para ajustar certinho a posição podemos dar 4 valores

- 1 valor: superior
- 2 valor: lado direito
- 3 valor: inferior
- 4 valor: baixo

Realizaremos os ajustes no campo do cabeçalho que é o apropriado.
```css
.cabecalho {
    padding: 2% 0% 0% 20%;
}
```
Vai ficar recuado no canto esquerdo superior, mas não muito.
---
### SEPARANDO OS NOMES

usaremos o flex-box novamente, sempre que queremos alterar a posição do conteúdo, usamos no elemento pai no caso o: .cabecalho__menu 
```css
.cabecalho__menu {
    display:flax;
    gap: 80px;
}
```
---
### CRIANDO NOVAS PÁGINAS PARA FAZER INTERAÇÃO E NAVEGAÇÃO

#1- Criamos uma dentro do nosso projeto para guardar os arquivos css que são os estilos, chamaremos de "styles" 

#2- vamos mover o css pra lá e alterar o código do html para que ele volte a pegar os estilos.
```html
<link rel="stylesheet" href="./styles/style.css">
```
---
### ABOUT - CRIANDO A PÁGINA "SOBRE MIM"

1- Vamos criar um novo arquivo no projeto com o nome "about.html" será nossa página do sobre mim

2- Para gerar o código base, basta escrever: ! e da um enter no vs code. 

vamos configurar o básico, como a 
- linguagem 
- nome do titulo no no head
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre mim</title>
</head>
<body>
    
</body>
</html>
```
---
### CRIANDO A NAVEGAÇÃO ENTRE AS PÁGINAS

No nosso arquivo index.html, vamos inserir a função de localizar

"href="" e inserir dentro dele o nome do arquivo da página.

```html
    <header class="cabecalho">
        <nav class="cabecalho__menu"> 
             <a class="cabecalho__menu__link" href="index.html">Home</a>
             <a class="cabecalho__menu__link" href="about.html">Sobre mim</a>
        </nav>	
    </header>  
```
Agora ficou clicavel, apenas aparece um sublinhado nos nomes, vamos tirar no CSS removendo a estilização padrão com o 

text-decoration: none;
---
---
### CRIANDO A BASE DA NOVA PÁGINA

### 1- colocaremos as divisões básicas do <body>
```html
<header></header>
<main></main>
<footer> </footer> 
```
### 2- Vendo o figma,  o cabeçalho  e o footer são iguais então podemos só copiar do index.html

NOSSO CÓDIGO ESTÁ ASSIM:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre mim</title>
</head>
<body>
 <h1>sobre mim</h1>
</body>
    <header class="cabecalho">
        <nav class="cabecalho__menu"> 
            <a class="cabecalho__menu__link" href="index.html">Home</a>
            <a class="cabecalho__menu__link" href="./about.html">Sobre mim</a>
       </nav>	
    </header>
    <main></main>
    <footer class="rodape">
        <p>Desenvolvido por Maedson</p>
    </footer> 


</html>
```
---
### IMPORTANTO A ESTILIZAÇÃO CSS DO PRIMEIRO ARQUIVO PARA O ABOUT ME

Como as estilizações são iguais e as classes, não tem porque criar outro css para a página about, vamos importar o mesmo css

#### 1 - VAMOS NO <HEAD> do arquivo about.html e inserimos o comando:

```html
link:css
```
Vai abrir uma caixa de seleção, você confirma o local do "style.css" e ele vai importar ficando assim:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre mim</title>
    <link rel="stylesheet" href="./styles/style.css">
</head>
```
---
### INSERINDO AS INFORMAÇÕES O BODY  

1- Precisamos criar 2 parágrafos e inserir uma imagem conforme projeto do figma

2- Vamos criar uma SECTION para os nomes, será uma divisão para os TEXTOS E A FOTO
```html
   <main>
        <section>

        </section>
        <img> </img>

    </main>

```
3- criaremos o titulo e os parágrafos, para separar os parágrafos usaremos uma div
```html
    <main>
        <section>
            <h1>Sobre mim</h1>
            <p></p>
            <div>
                <p></p>
            </div>
        </section>
        <img> </img>

    </main>
```
*DICA: para criar 2 parágrafos de uma vez só, só colocar "p*2" e da enter.

## VAMOS PREENCHER O PARÁGRAFO 
```html
    <main>
        <section>
            <h1>Sobre mim</h1>
            <p>Sou formado em Direito e atualmente estudante de Análise e Desenvolvimento de Sistemas, combinando conhecimentos jurídicos com habilidades em tecnologia. Minha experiência inclui um ano como assessor jurídico no Tribunal de Justiça da Paraíba, onde desenvolvi habilidades analíticas e de comunicação. Na Show Tecnologia, atuei como suporte técnico, atendendo clientes, gerenciando a ativação de equipamentos de rastreamento e controlando custos.
            </p>
            <div>
                <p>Além disso, realizo trabalhos freelance em edição gráfica com Corel Draw e Photoshop, e ofereço serviços de suporte técnico, como formatação e assistência técnica. Tenho proficiência em Word, Excel e PowerPoint, e conhecimentos básicos em Power BI.
                </p>
            </div>
        </section>
        <img> </img>

```
4- Para a imagem, ela tem as mesmas propriedades da 1 página, só copiamos o código.
```html
<img src="./assets/eu.png"  alt="minha foto no computador codando">

```
---
## iMPORTANDO AS ESTILIZAÇÕES DO CSS

1- Vamos copiar as classes do outro arquivo, as mesmas que usamos para estilizar tudo junto, sendo as do:

main
selection
h1
p
```
DICA: para escrever dentro de duas tags ao mesmo tempo: 
- clica na primeira
- segura alt
- clica na segunda
- escreva

O NOSSO CÓDIGO FICOU ASSIM
```html
main class="apresentacao">
        <section class="apresentacao__conteudo">
            <h1 class="apresentacao__conteudo__titulo">Sobre mim</h1>
            <p class="apresentacao__conteudo__texto">Sou formado em Direito e atualmente estudante de Análise e Desenvolvimento de Sistemas, combinando conhecimentos jurídicos com habilidades em tecnologia. Minha experiência inclui um ano como assessor jurídico no Tribunal de Justiça da Paraíba, onde desenvolvi habilidades analíticas e de comunicação. Na Show Tecnologia, atuei como suporte técnico, atendendo clientes, gerenciando a ativação de equipamentos de rastreamento e controlando custos.
            </p>
            <div>
                <p class="apresentacao__conteudo__texto">Além disso, realizo trabalhos freelance em edição gráfica com Corel Draw e Photoshop, e ofereço serviços de suporte técnico, como formatação e assistência técnica. Tenho proficiência em Word, Excel e PowerPoint, e conhecimentos básicos em Power BI.
                </p>
            </div>
        </section>
        <img src="./assets/eu.png"  alt="minha foto no computador codando">
    </main>
```
---
---
### VARIÁVEIS NO CSS

## Se precisarmos alterar a cor azul do projeto, teríamos que alterar em vários lugares porque usamos muito.

## Para isso podemos criar uma variável, no qual declaramos que aquela cor vai se chamar a variável x... e utilizar agora x como se fosse o nome da cor. 

## Ou seja, se alterarmos lá na variável que criamos a cor, todos os locais que inserimos o x, vai ser alterado, vai facilitar de mais.

---
### Para isso precisamos criar as variáveis, no css ultilizamos a tag: 
```css
:root {
  --cor-priaria: #000000;
  --cor-secundaria:#F6F6F6 
  --cor-terciaria: #22D4FD;	
}
```
## Entendendo o código acima:
--cor-primaria = é a variável que vamos usar para representar a cor ou o detalhe que queremos alterar em lote

:#000000 = o que vem depois do 2 pontos é o que vai ser substituído, ou seja quando inserimos a variável, ela terá o valor do que estiver aqui depois do :
---
### SUBSTITUINDO AS CORES PELAS VARIÁVEIS

USAREMOS A TAG: var () e dentro dela a variável que criamos correspondente aquela cor ou elemento no local a ser substituído

DICA: digitar var e dar enter, ele vai aparecer (), dar enter e escolhemos a cor.

EX:
```css
body {
    /* height: 100vh; */
    box-sizing: border-box;
    height: 100vh;
    background-color: black;
    color:#F6F6F6;
```
Substituindo
```css

body {
    /* height: 100vh; */
    box-sizing: border-box;
    height: 100vh;
    background-color: var(--cor-primaria);
    color: var(--cor-secundaria);
}

```
NO ROOT FICARÁ ASSIM
```css
:root {
    --cor-primaria: #000000;
    --cor-secundaria: #F6F6F6;
    --cor-terciaria: #22D4FD;
    --cor-hover: #272727;
}
```
### CRIANDO VARIÁVEIS PARA AS FONTES

## Como ultilizamos as fontes em muitos locais, é interessante trocar por variável para ficar fácil de alterar, vamos criar e alterar ficando assim:
```css
:root {
    --cor-primaria: #000000;
    --cor-secundaria: #F6F6F6;
    --cor-terciaria: #22D4FD;
    --cor-hover: #272727;

    --fonte-primaria: "Krona one", sans-serif;
    --fonte-secundaria:  "Montserrat", sans-serif;

}
```
Agora só substituir nos locais adequados da mesma forma de cima.
----
----
### HTML e CSS: trabalhando com responsividade e publicação de projetos

UTIMO CURSO.
---

## UNIDADES DE MEDIDAS

Quando escolhemos o tamanho da fonte dos textos no nosso navegador, é ideal que o nosso projeto ajuste de tamanho como qualquer outro site, mas da forma que está não está alterando.

Vamos corrigir.

LINK PARA AS UNIDADES DE MEDIDAS DO CSS: https://www.w3schools.com/cssref/css_units.php

## UNIDADES DE MEDIDAS

### Existem duas as:

- Relativas: podem alterar conforme o navegador, ex: rem (ele pega o elemento raiz, a página html que foi definido no navegador É O IDEAL

- Absolutas: são fixas, como cm, pixel, etc...

---
### CONVERTENDO PIXEL EM REM:

## A REGRA É: 16 pixels, é igual a 1 rem

Utilizando essa igualdade, vamos converter nosso projeto.

ex:
```css
.apresentacao__conteudo__titulo { 
    font-size: 36px;
    font-family: var(--fonte-primaria);   
}

```
36 pixels, dividimos por 16 pra saber o número em REM, no caso será 2.25 rem.
aplicando:
```css
.apresentacao__conteudo__titulo { 
    font-size: 2.25rem;
    font-family: var(--fonte-primaria);   
}
```
### TROCAREMOS TODOS OS LUGARES A FONTE-SIZE QUE TEM PIXEL, POR REM, FICANDO ASSIM:

```css
@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root {
    --cor-primaria: #000000;
    --cor-secundaria: #F6F6F6;
    --cor-terciaria: #22D4FD;
    --cor-hover: #272727;

    --fonte-primaria: "Krona one", sans-serif;
    --fonte-secundaria:  "Montserrat", sans-serif;

}

* {
    margin: 0;
    padding: 0;
}

body {

    box-sizing: border-box;
    height: 100vh;
    background-color: var(--cor-primaria);
    color:var(--cor-secundaria);
}

.cabecalho {
    padding: 2% 0% 0% 20%;
}

.cabecalho__menu{
    display:flex;
    gap: 100px;
}

.cabecalho__menu__link {
    font-family: var(--fonte-secundaria);
    font-size:1.5rem;
    font-weight: 600;
    color: #22D4FD;
    text-decoration: none;

}

.apresentacao {
    padding:10% 20%;
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.apresentacao__conteudo{
width: 50%;
display: flex;
flex-direction: column;
gap: 24px;
}

.apresentacao__conteudo__titulo { 
    font-size: 2.25rem;
    font-family: var(--fonte-primaria);   
}
.titulo-destaque {
    color:var(--cor-terciaria);
}   

.apresentacao__conteudo__texto {
    font-size: 1.5rem;
    font-family: var(--fonte-secundaria);
}




.apresentacao__links__subtitulo{
font-family:var(--fonte-primaria);
font-weight: 400;
font-size: 1.5rem;
}

.apresentacao__links{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
}

.apresentacao__links__link{
    display:flex;
    justify-content: center;
    gap: 16px;
    border: 2px solid var(--cor-terciaria);
    width: 23.6rem;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    padding: 1.35rem 0rem;
    text-decoration: none;
    color:var(--cor-secundaria);
    font-family: var(--fonte-secundaria);
    font-weight: 600;
    ;
}

.apresentacao__links__link:hover {
    background-color: var(--cor-hover);
}

.apresentacao__imagem {
    width: 50%;
}

.rodape {
    padding: 1.5rem;
    color: var(--cor-primaria);
    background-color:var(--cor-terciaria);
    text-align: center;
    font-family: var(--fonte-secundaria);
    font-size: 1.5rem;
    font-weight: 400;
}}

```
### TORNANDO A IMAGEM RESPONSIVA: se ajusta em outras telas e dimensões.

## 1- Vamos usar a porcentagem como unidade de medida para imagens

## OBS: a porcentagem que o navegador vai alterar, vai ser em relação ao tamanho do "pai" da imagem, no caso é o main, a imagem está dentro do main

## se colocarmos 50%, será 50% do tamanho definido no main.

## 1- Para escolher o tamanho da imagem, vamos criar uma classe para ela tanto no index, como no about.html.
```css
<img class="apresentacao__imagem" src="./assets/eu.png"  alt="minha foto no computador codando">
    </main>
```
## Criamos e ajustamos o tamanho no CSS
```css
.apresentacao__imagem {
    width: 50%;
}
```
Ajustamos um "width" que significa LARGURA, mas se alterar só ela, também ajusta a altura proporcional.
```
---
## DIMINUINDO O TAMANHO GERAL DOS TEXTOS DE FORMA PROPORCIONAL SEM DISTORCER.

Vamos no conteúdo pai que abraça todos os textos, no caso:
```html
<main>
	<section class="apresentacao__conteudo">
```
A section abrange todos os textos. Então vamos colocar em porcentagem no css.
```css
.apresentacao__conteudo{
width: 50%;
display: flex;
flex-direction: column;
gap: 24px;
}
```
## ALTERANDO OS LINKS PARA DEIXAR RESPONSIVOS A PÁGINAS DIFERENTES
```
.apresentacao__links__navegacao{
    display:flex;
    justify-content: center;
    gap: 16px;
    border: 2px solid var(--cor-terciaria);
    width: 50%;
    text-align: center;
    border-radius: 8px;
    font-size: 1.5rem;
    padding: 21.6px 0px;
    text-decoration: none;
    color:var(--cor-secundaria);
    font-family: var(--fonte-secundaria);
    font-weight: 600;
    ;
}
```
ALTERAMOS SÓ O WIDTH PARA 50%
---
### RESPONSIVIDADE NA PRÁTICA - COMO MUDAR O LAYOUT DE ACORDO COM O DISPOSITIVO ACESSADO OU A DIMENSÃO DA TELA?

Primeiro vamos adicionar um gap entre a foto e os textos para evitar de quando a tela for estreita, não colar um no outro.
```css
.apresentacao {
    padding:10% 20%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:92px;
}
```
## MEDIA QUERIES - MUDANDO O LAYOUT DE ACORDO COM A RESOLUÇÃO DA TELA EXIBIDA.

## USAMOS O:
```css
@media (max-width:1200px) {

}
```
- @media = propriedade que possibilita mudar o layout
- max-width = largura máxima.
- : = o espaço após o max-width: é para inserir a largura máxima
- {} = características que devem ser aplicadas enquanto a largura for menor que o máximo definido no max-width no caso acima, 1200px. 

- Como funciona? de 0 até a largura máxima, o conteúdo a ser exibido será da forma que está dentro do média. 

- Após essa largura máxima, ele começa a ser exibidor conforme foi programado normal.

---
## NO NOSSO PROJETO, QUEREMOS QUE:

- A imagem fique acima do texto quando a largura da tela for menor que 1200px

1- Vemos onde a imagem e os textos estão inseridos, qual é o pai deles, no caso o: 
```css
.apresentacao {
    padding:10% 20%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:92px;
}
```
2- Podemos notar que o display-flex dele está padrão, no caso fica em linha, precisamos que fique em coluna

então vamos inserir no @media essa condição:
```css
@media (max-width: 1200px) {
    .apresentacao {
        flex-direction: column;
    }
}
```
Traduzindo: quando a tela for menor que 1200px, a direção do flex box vai ser em linha, vertical.

PORÉM, A IMAGEM NO PROJETO FOI FEITA PARA FICAR EM BAIXO, POR ISSO DEVEMOS INVERTER A ORDEM COM O COMANDO:
```css

@media (max-width: 1200px) {
    .apresentacao {
        flex-direction: column-reverse;
    }
}
```
## AJUSTANDO O CABEÇALHO - (HOME E SOBRE MIM) QUANDO A TELA FOR MENOR QUE 1200px.

1- No nosso projeto chamamos a classe de .cabeçalho, ela atualmente está assim:
```css
.cabecalho {
    padding: 2% 0% 0% 20%;
}

.cabecalho__menu{
    display:flex;
    gap: 100px;
}

```
2- Vamos ajustar no @media

OBS: JÁ DECLARAMOS O DISPLAY-FLEX; lá em cima, então não precisa de novo, só inserimos no media o que queremos alterar e mais nada. o resto ele mantém.
```css

}

@media (max-width: 1200px) {

    .cabecalho {
        padding: 10%;
    }

    .cabecalho__menu {
	justify-content: center;
    }

    .apresentacao {
        flex-direction: column-reverse;
    }
}

```
ALTERAÇÕES:

1- O .cabeçalho ajustamos o paddin para tirar do canto da parede
2- o tipo de flex box, colocamos o justify-content: center, para centralizar os nomes no meio.

---
---
## AJUSTANDO AS LATERAIS NA VISUALIZAÇÃO COM LARGURA < 1200PX

Notamos que o conteúdo fica todo espremido no meio, mas sobra uma borda preta, isso é porque no nosso css
```css
.apresentacao {
    padding:5% 15%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:92px;
}
```
Temos um padding de 5% para superior e inferior, e 15% para as laterias, isso é muito em uma tela estreita, vamos ajustar para 5%
```css
@media (max-width: 1200px) {

    .apresentacao {
        flex-direction: column-reverse;
        padding:5%
    }   
}
```
Agora ficou 5% de largura e altura, como a altura já era 5%, já fica ideal.


## Mas o conteúdo do meio ainda não está ocupando o espaço da tela ideal porque definimos a largura que o conteúdo iria ocupar seria de 50% lá no início do projeto
```css

 .apresentacao__conteudo {
        width: 50%;
    }
```
## Vamos alterar lá no @media para uma nova propriedade que diz:

## Olha você tem esse espaço x, então ocupe esse espaço.

## a propriedade é: auto. ficando assim:
```css
@media (max-width: 1200px) {

 .apresentacao__conteudo {
        width: auto;
```

FIM -- PARABÉNS MAEDSON VOCÊ CONSEGUIU FINALIZAR!!!

