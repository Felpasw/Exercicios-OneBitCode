function navefodase(){
    let NomeNave = prompt("Digite o nome da nave: ");
    let velocity = 0;
    let Option = 1;
    while(Option != 4){
        Option = Number(prompt("Ok, o que vamos fazer com a nave "+NomeNave+"? \n 1- Acelerar Nave em 5km/s \n 2- Desacelerar a nave em 5km/s\n 3- Imprimir dados de bordo \n 4- Sair"))
        switch(Option){
            case 1:
                velocity = acelerarNave(velocity);
                alert("Nave acelerada com sucesso!");
                break;
            case 2:
                if(velocity>0){
                    velocity = desacelerarNave(velocity);
                    alert("Nave desacelerada com sucesso!");
                }
                else{
                    alert("A nave já está em repouso, impossível desacelerar!")
                }
                break;
            case 3:
                ImprimirValores(velocity, NomeNave);
                break;
            case 4:
                alert("Programa encerrado, volte sempre!");
                break;
            default:
                alert("Digite um valor válido!");
                break;
        }

   }
  

   
}

function acelerarNave(velocity){
    return velocity += 5;
}
function desacelerarNave(velocity){
        return velocity -= 5;
}
function ImprimirValores(velocity, NomeNave){
    return alert("Velocidade da nave "+NomeNave+":" +velocity + "km/s");
}