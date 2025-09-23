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

## OBS: PRIMEIRA COISA QUE DEVEMOS COLOCAR NO CÓDIGO DENTRO DO HEAD, ASSIM:
```
<meta charset="UTF-8">
<html>
    <head>
        <title>Projeto 1 - página</title>
    </head>
    <body>TESTE UM</body>
</html>

```
---
### - HTML 5 - DETALHES IMPORTANTES

```
<!DOCTYPE html>

```
Comentário importante para o navegador saber que é um arquivo HTML - Boas práticas
```
<html lang= "pt-br">
```
É a linguagem de quem está vai ultilizar o site, podemos substituir por outras opções, como:
```
<html lang= "pt-pt">
```
Nesse caso está em portugues de portugal

---
### - INSERINDO PARÁGRAFOS

1- não vamos deixar nada solto no <body>, precisamos ultilizar uma tag, no caso
```html
<p></p>
```
ficando assim:
```html
<!DOCTYPE html>
<html lang= "pt-br"></html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Projeto 1 - página</title>
    </head>
    <body>
<p>TESTE UM/<p></body>
</html>
```
Agora ele criou um parágrafo
---
### - Inserindo quebra de linha e linhas e cores
```html
<hr color= "green">
```
hr cria a linha, e dentro deles podemos inserir as cores como está acima
``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```

```html

```

``````html

```
