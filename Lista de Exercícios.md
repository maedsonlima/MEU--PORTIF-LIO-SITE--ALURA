# - LISTA DE EXERCÍCIOS 1 - 

1. Faça um programa que peça um número natural ao usuário e imprima o quadrado desse número.
```py
numero = int(input("Insira o número: "))
print (f"Seu número ao quadrado é {numero*numero}")

```

2. Faça um programa que peça dois números naturais ao usuário e imprima a divisão do primeiro número pelo segundo. Avise ao usuário que o segundo número não pode ser 0.
```py
print ("Bem vindo a cálculadora de divisão")
numero1 = int(input("Insira o número que será dividido: "))
numero2 = int(input("Insira o divisor. obs: diferente de 0): "))
print (f"{numero1} divido por {numero2} é {numero1/numero2}")

```

3. Escreva um programa que peça ao usuário um número natural que representa o lado de um quadrado e calcule seu perímetro e a sua área.
```py
print ("Cálculadora de área/perimetro de um Quadrado.")
lado = int(input("Insira o tamanho do lado do quadrado: "))
perimetro = (lado * 4)
area = (lado * lado)
print (f"O quadrado cujo lado é {lado}, tem como área {area} e perimetro {perimetro}")

```
4. Escreva um programa que peça ao usuário dois números naturais para as variáveis A e B, e efetue as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados. OBS: não é permitido apenas imprimir o valor trocado. Ex.: “O valor da variável A é: “ e imprimir da variável B.
```py
variavelA = int(input("Iinsira a variável A: "))
variavelB = int(input("Iinsira a variável B: "))
caixaDeTroca = variavelA
variavelA = variavelB
variavelB = caixaDeTroca
print (f" A variavel A é :{variavelA}, A variável B é: {variavelB}")

```
5. Escreva um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar ao usuário o valor da cotação do dólar, e também a quantidade de dólares que ele deseja converter.
```py
print ("Bem vindo o conversor de USD para BRL")
cotacao = float(input("Insira o valor da cotação de USD atual: "))
valorEmDolar = float(input("Insira o valor que deseja converter: "))
print (f"{valorEmDolar} em reais BRL é: {cotacao * valorEmDolar}")

```
6. Escreva um programa que leia uma temperatura em graus Celsius e a apresente convertida em graus Fahrenheit. A fórmula de conversão é: F = (9*C+160) / 5, sendo F a temperatura em Fahrenheit, e C a temperatura em Celsius.
```py
print ("Bem vindo o conversor de Celcius para Fahrenheit")
celcius = float(input("Insira a temperatura em Celcius: "))
fahrenheit = (9*celcius + 160)/5    
print (f"{celcius} Celcius convertidos em Fahrenheit é: {fahrenheit}")

```
7. Uma empresa quer dar um bônus de Natal (em dezembro, claro) para seus empregados que será 60% do cálculo médio do salário de trabalho. Considerando que todos na empresa ganhem um mesmo valor de salário, elabore um programa que receba a entrada do salário e imprima o valor do bônus de Natal e o valor a ser depositado na conta de cada empregado em dezembro.
```py
print ("Bem vindo a calculadora do Bonus salárial de natal")
salarioBase = float(input("Insira o seu salário: "))
bonus = salarioBase * 0.6  #calcula 60% do salário.    
salarioFinal = salarioBase + bônus

print (f"Seu BONUS de 60% é de: {bonus}")
print (f"O valor final a ser depositado é: {salarioFinal}")

```
8. Crie um algoritmo que efetue o cálculo do salário líquido de um professor. Os dados fornecidos serão: valor da hora aula, número de aulas dadas no mês e percentual de desconto do INSS.
```py
print ("Descubra o seu salário líquido")
horasAula = float(input("Insira o valor das suas horas/aula: "))
quantidadeAulas = int(input("Insira o número de aulas dadas no mês: "))  
percentualInss = float(input("Insira o percentual de desconto do INSS (SEM O %): "))  

salarioBruto = horasAula * quantidadeAulas                      # Calcula o salário sem o desconto
descontoInss = (percentualInss * salarioBruto) / 100     # Calcula a porcentagem descontada em Reais
salarioLiquido = salarioBruto - descontoInss                     # Retira o desconto em Reais do salário Liquido

print (f"Seu salário líquido é de: {salarioLiquido} ")

```

9 - Antes do racionamento de energia ser decretado, quase ninguém falava em quilowatts; mas, agora, todos incorporaram essa palavra em seu vocabulário. Sabendo-se que 100 quilowatts de energia custa um sétimo do salário mínimo, faça um algoritmo que receba o valor do salário mínimo e a quantidade de quilowatts gasta por uma residência, e calcule (imprima):

o  valor em reais de cada quilowatt;
o valor em reais a ser pago;
o novo valor a ser pago por essa residência com um desconto de 10%.

```py
print ("Calcule a energia gasta na sua residência")
salario = float(input("Insira o seu salário: "))
quilowattsGasta = int(input("Insira a quantidade de quilowatts gastas no mês: "))  

valorQuilowatt = (salario/7) / 100                                            #salario /  por 7 = 1/7 de salário, vezes 100 QW
valorTotal = valorQuilowatt * quilowattsGasta                  # O Valor da unidade de QW vezes a quantidade
valorTotalComDesconto = valorTotal * 0.9                          # multiplica por 0.9 porque é 90%, se fosse 100% seria 1.0, retiamos 0.1 = 90%

print (f" O valor de cada Quilowatt é: R${valorQuilowatt:.2f}")
print (f" O valor total é de: R${valorTotal:.2f}")
print (f" O valor total com desconto é de: R${valorTotalComDesconto:.2f}")

```