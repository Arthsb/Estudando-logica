//conteudo que vai se repertir indeterminadas vezes ate que uma determinada condição seja verdadeira.

//FOR ==> faz ações repetidas/ repete ate chegar ao final mandada( pode usar so i ), faz um laço de repetição.
for (let contador = 0; contador < 4; contador++){
    console.log(contador)
}

//contado vida
var pontosDeVida = 0  
for(i = 1; i<11; i++){
    pontosDeVida++
    console.log("tomou elixir +" + i)
}
console.log("tem " + pontosDeVida + " pontos de vida")

//while: alternativa para o for, se deicar sem um valor pra aumentar ele fica infinito, pode usar o i
let numerador = 0
while(numerador <5){
    console.log("ola")
    numerador++
}

// do while: faça enquanto
let y = 0
do{
console.log("loop")
y++
}while(y < 3)

//OBS: ele tem uma particularidade de que mesmo que o valor ja sega 3 ele ainda exibe a mensagem.
let x = 3
do{
    console.log("teste")
  x++
}while( x < 3)