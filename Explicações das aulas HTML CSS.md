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
Escrevemos apenas isto e o nome da cor do texto dentro do local selecionado, jo caso o body, mas se for por exemplo o *strong* {} é só abrir alterar.

```html
````
```html
````

```html
````
```html
````

```html
````



