Speed = 0;

let SpaceShip = {
    name: "Baguncinha",
    tipo: "CARALHAÇO",
    MaxVel: 230
}
function baguncinha(){
        let op = prompt("O que deseja fazer? \n 1 - Acelerar \n 2 - Reduzir \n Velocidade atual: " + Speed )
        switch(op){
            case '1':
                speedUp();
                break;
            case '2'    :
                speedDown();
                break;
            default:
                alert("Digite uma opção válida!")
                break;
        }
    }
   
function speedUp(){
    let speedWished = Number(prompt("Quanto deseja acelerar? "))
    let speedfoda = speedWished + Speed
    if(speedfoda > SpaceShip.MaxVel ){
        alert("Velocidade máxima suportada atingida, impossível acelerar mais!")
    }
    else{
        Speed = speedfoda
        alert("Nave "+ SpaceShip.name + "\n Do tipo "+ SpaceShip.tipo + "acelerada com sucesso!")
    }
} 
function speedDown(){
    let speedW = Number(prompt("Quanto você deseja desacelerar?"))
    if(Speed - speedW >= 0){
        Speed -= speedW
    }
    else{
        alert("Já estamos parados, impossível desacelerar")
    }
}  