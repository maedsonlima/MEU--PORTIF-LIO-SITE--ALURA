# - Aula 2 - Python - tipos de variáveis

### - Números
- Inteiros, ex: 1
- ponto flutuante, ex: 3.5

### - Strings

Conjunto de caracteres, ex: "Abca#84739"

### - Boleanos

True or False, armazena uma informação binária

ex: de código
```py
nome = "Maedson"
print (nome)

num_pi = 3.14
print(num_pi)
```
Atribuimos  o nome maedson na variável nome e mostranos na tela com o print

---
### - Como descobrir o tipo de variável

ex:
```py
print(type("maedson"))
print(type(8))

```
Ele vai retornar o resultado com o tipo de variável, sendo esse o resultado:
```py
<class 'str'>
<class 'int'>
```
Outro Exemplo com variável
```py
nome = "maedson"
idade = 29
preco = 15.99
aposentado = True
print(type(nome))
print(type(idade))
print (type(preco))
print (type(aposentado))

```
Temos como resultado:
```py
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```
Ou seja, ele diz que a classe nome é "string
iudade é int = inteiro
e o preco é float, ou seja flutuante
o aposentado é 'bool', ou seja boleeano
---

## -  EXERCÍCIO EXEMPLIFICATIVO- Quais tipos?

1- RECEBA O CÓDIGO DA PEÇA
2- RECEBA O VALOR DA PEÇA
3- RECEBA Q QUANTIDADE DE PEÇAS
4- CALCULE O VALOR TOTAL DA PEÇA (QUANTIDADE * VALOR DA PEÇA)
5- MOSTRE O CÓDIGO DA PELA E SEU VALOR TOTAL

---
---
# - ENTRADA e SAÍDA DE DADOS

```py
input
```
Permite ler informações via teclado do usuário.

## TUDO QUE ELE LER É STRING

Pode ser convertido para (int) ou real (float)

ex:
```py
var = input (String mensagem)
```
var = cria uma variável
input = armazena na variável o que ele ler
( )  dentro dos parenteses insira a mensagem que o usuário vai ler, ex: pedido para inserir informações

ex:
```py
nome = input(" digite seu nome: ") 
```
Para imprimir o nome que o usuário digitou, fazemos:
```py
print(f"o nome digitado é: {nome}")
```
obs: colocamos o f antes das aspas, e lá dentro usamos chaves

Código completo: 
```py
nome = input("insira seu nome: ")
print(f"o nome digitado é: {nome}")
```
---
## - CAST - conversão de String do input para outros tipos

Explicitamos o tipo que queremos guardar, se for número por exemplo usamos:

int = inteiro
floar = flutuante, valores quebrados
etc..

ex:
```py
idade = int(input("Digite sua idade é: "))
print (f"sua idade é {idade})
```
traduzindo: Tudo que for digitado dentro do input, será transformado em INT, e depois será guardado na variável idade. 

RESPEITANDO A REGRA DOS PARENTESES, o que estiver na parte de dentro será realizado primeiro.
---
## - 26/09/25 - AULA  4- CRIANDO VARIÁVEIS PARA CALCULAR NÚMEROS

1- Criamos 2 variáveis

```py
numero1 = int(input("Digite um número inteirp: "))
numero2 = int(input("Digite o segundo número inteiro: "))
```
Ele vai pedir o 1 numero, o usuário insere,
Vai pedir o segundo número, o usuário insere.

### - Somando os números
```py
numero1 = int(input("Digite um número inteirp: "))
numero2 = int(input("Digite o segundo número inteiro: "))
resultado = numero1 + numero2

print (f"o resultado é:  {resultado}")

```
A variável resultado armazena a soma
o print mostra o resultado na tela

ou podemos fazer de forma mais rápida.

```py
print (f"a soma é:  {numero1 + numero2}")

## - DObrando o número

numero = int(input("Digite um número inteiro: "))
dobro = numero * 2 
print (f"o dobro do {numero} é: {dobro}")
```
---
aqui dobramos o número usando o sinal de *, ele multiplica.

---
## - 3 FORMAS DE FAZER PORGENTAGEM DE UM NÚMERO:
```py
salarioInicial = float(input("Digite o salário inicial: "))
porcentagem = (salarioInicial * 20)/100
salarioFInal = porcentagem + salarioInicial
print (f"o {salarioInicial} com 20% é: {salarioFInal}")

salarioInicial = float(input("Digite o salário inicial: "))
porcentagem = (salarioInicial * 20)/100
print (f"o {salarioInicial} com 20% é: {salarioInicial + porcentagem}")


salarioInicial = float(input("Digite o salário inicial: "))
print (f"o {salarioInicial} com 20% é: {salarioInicial * 1.2}")

```
### 1- modo

Explicação

salarioInicial = float(input(...)):
Solicita ao usuário que digite o salário inicial e converte para float (número com casas decimais).

porcentagem = (salarioInicial * 20) / 100:
Calcula 20% do salário.

salarioFInal = porcentagem + salarioInicial:
Soma os 20% ao salário original para obter o salário final.

print(...):
Exibe o valor original e o novo salário com o aumento.

🟡 Observação

A variável salarioFInal está com "F" maiúsculo, o que não segue a convenção usual de nomes em Python (snake_case).

Poderia ser mais direto.


### 2 - MODO

✅ Explicação

Calcula os 20% como no código anterior.

Em vez de guardar o salário final em uma variável, ele soma diretamente dentro do print().

✅ Vantagem

Menos linhas de código (mais direto).

Funcionalmente idêntico ao primeiro

### 3- MODO

✅ Explicação

Cálculo mais eficiente: multiplica o salário por 1.2, que é o mesmo que somar 20%.

Exemplo: 1000 * 1.2 = 1200.

Elimina a necessidade de variáveis intermediárias.

✅ Vantagem

Mais limpo, direto e performático.

Boa prática para casos simples como esse.

---
## - POTÊNCIA DE UM NUMERO SOBRE OUTRO
```py
numero1 = int(input("Digite o primeiro numero: "))
numero2 = int(input("Digite o segundo numero: "))
print (f"O {numero2} elevado ao {numero2} é:{numero1 ** numero2}")
```

recebe os 2 números, e depois coloca o 2 como a potência do 1
---
## - Média aritimédica  de notas
```py
numero1 = float(input("Digite a primeira: "))
numero2 = float(input("Digite a segunda nota: "))
numero3 = float(input("Digite a terceira nota: "))
print (f"a média é:{(numero1 + numero2 + numero3)/3}")
```
Ele vai receber 3 valores, depois vai somar, e dividir por 3.
```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
```py

```

```py

```

```py

```
