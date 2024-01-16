// if : (SE), IF ELSE (SE NAO SE), ELSE (SE NAO) 
// IF ENTREGRA UMA CONDIÇÃO E CASO SEJA ATENDIDA UMA AÇÕA É TOMADA, CASO NAO A PROXIMA CONDIÇÃO E VISTA COM O ELSE IF E CASO NENHUMA O ELSE A ULTIMA ALTERNATIVA

let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}

//switch, case :É como se o computador tivesse várias opções e escolhesse uma com base em um valor que você dá a ele. 
var dia = "domingo"

switch (dia){
    case "segunda":
    console.log("Dia de começar a semana com energia!");
    break;
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:
    console.log("Final de semana! Descanse e divirta-se!");
}

