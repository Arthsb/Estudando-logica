//operadores logicos permitem realizar operaçoes logicas com valores booleanos

//and(&&)
var experienciaJogador = 100
var estrelaDeMana = 1
var subirnivel = (experienciaJogador >= 100)&&(estrelaDeMana >= 1) 
console.log(subirnivel)

//or(||)
var tempo = "chuva"
var item = "guarda chuva"

var podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log(podeSair)