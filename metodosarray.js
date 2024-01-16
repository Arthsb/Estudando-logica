//length==> quantidade de elementos na array
let numeros = [0,1,2,3,4,5,6,7,8,9,10]
console.log(numeros.length)

//push==> acrescenta um elemento ao final de uma array
numeros.push(11)
console.log(numeros)

//pop==> remove o ultimo elemento de uma array
numeros.pop()
console.log(numeros)

//unshift==> acrescenta um elemento no começo
numeros.unshift(67)
console.log(numeros)

//shift==> remove um elemento do inicio de uma array
numeros.shift()
console.log(numeros)

//acessar o ultimo elemento, ou outros(so mudar o ultimo numero negativo da expreção)
console.log(numeros[ numeros.length - 1 ])

let dias = ["segunda", "terça", "quarta", "quinta", "sexta"]
console.log(dias[ dias.length - 4 ])

//Array.isArray==> testar se o que vc esta trabalhando é uma array
let teste = Array.isArray(dias)
console.log(teste)

//splice==> usadopra acrescentar um elemento no meio de uma array, ta,bem remove e subistitui elementos
//acrescenta: 
let cidades = ["são paulo ", "recife ", "vitoria ", "aracaju ", "blumenau" ]
cidades.splice(2, 0, "bora")
console.log(cidades)
//remove:
let livros = ["livro1", "livro2", "livro3", "livro4"]
livros.splice(2, 1)
console.log(livros)
//subistitui
var portas = ["porta1", "porta2", "porta3", "porta4"]
portas.splice(0, 1, "porta15")
console.log(portas)

//indexof==> ahcar o indice do elemento 
var index = livros.indexOf("livro2")
console.log(index)

// join==> sepaa elementos ou tranforma uma array em uma string 
console.log(cidades.join(""))
//our
console.log(portas.join("| "))

//reverse==> reverte os elementos de ordem 
console.log(cidades.reverse())