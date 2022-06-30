let index = 0;
let NavesBatalha = new Array();
let NavesTransporte = new Array();
class naves{
    constructor(name, CrewQuantity){
        this.name = name
        this.CrewQuantity = CrewQuantity
        this.CurrentVelocity = 0
    }
 
}

class NaveBatalha extends naves{
    constructor(name, CrewQuantity, Weapons){
        super(name, CrewQuantity)
        this.Weapons = Weapons
    }   
    // set CurrentVelocity(newVelocity){
    //     this.CurrentVelocity = this.CurrentVelocity + (newVelocity * ( 1 - 0.17));
    // }
  
   
}

class NaveTransporte extends naves{
    constructor(name, CrewQuantity, NumberPlaces){
        super(name, CrewQuantity)
        this.NumberPlaces = NumberPlaces
    }
    // set CurrentVelocity(newVelocity){
    //     this.CurrentVelocity = this.CurrentVelocity + (newVelocity * ( 1 - 0.17));
    // }
   
}

function menu(){
    let naveAtual = TrocaNave();
    op2 = 0;
    sair = false;
  do{
        let op2 = prompt("O que deseja fazer com a nave "+ naveAtual.name +"?"+"\n 1-Acelerar nave \n 2-Trocar nave \n 3-Imprimir e sair ")
        switch(op2){
            case '1':
            AcelerarNave(naveAtual);
            break;
            case '2':
            naveAtual = TrocaNave();
            break;
            case '3':
            ImprimeNave(NavesBatalha, NavesTransporte); 
            sair = true;
            break;
        }

    } while(!sair)
   
}
function TrocaNave(){
    let op1 = prompt("Qual será a nova nave para viagem? \n 1-Batalha \n 2- Transporte ")
    switch(op1){
        case '1':
            let Crew = prompt("*******Cadastro nave de Batalha******* \n Digite o número de tripulantes: ")
            let Weapon = prompt("*******Cadastro nave de Batalha******* \n Digite o número de armas: ")
            let NameSpace = prompt("*******Cadastro nave de Batalha******* \n Digite o nome da nave: " )
            SpaceShip = new NaveBatalha(NameSpace, Crew, Weapon);
            NavesBatalha.push(SpaceShip);
            return SpaceShip;
        case '2':
            let Crew1 = prompt("*******Cadastro nave de Transporte******* \n Digite o número de tripulantes: ")
            let NumberPlace = prompt("*******Cadastro nave de Transporte******* \n Digite o número de lugares: ")
            let NameSpac = prompt("*******Cadastro nave de Transporte******* \n Digite o nome da nave: " )
            SpaceShip = new NaveTransporte(NameSpac, Crew1, NumberPlace);
            NavesTransporte.push(SpaceShip);
            return SpaceShip;
    }
}
function ImprimeNave(NavesBatalha, NavesTransporte){
    let SpaceShiplistBatalha = ""
    let SpaceShipListTransporte = ""
    NavesBatalha.forEach((spaceship)=> {
        SpaceShiplistBatalha += "\n-------------------------------\n" +"Nome: " + spaceship.name + "\n" + "Número de tripulantes: " + spaceship.CrewQuantity + "\n Quantia de armas: " + spaceship.Weapons + "\n Tipo: Batalha  \n Velocidade Atual: "+spaceship.CurrentVelocity+"\n ----------------------------------- \n"  
    });
    NavesTransporte.forEach((spaceship)=> {
        SpaceShipListTransporte += "\n-------------------------------\n" + "Nome: " + spaceship.name + "\n" + "Número de tripulantes: " + spaceship.CrewQuantity + "\n Quantia de lugares: " + spaceship.NumberPlaces + "\n Tipo: Transporte \n ----------------------------------- \n"  
    });
    alert("*******Naves de Batalha: ******* \n "+SpaceShiplistBatalha) 
    alert("*******Naves de Transporte: ******* \n "+SpaceShipListTransporte) 
}
function AcelerarNave(naveAtual){
    let WishedSpeed = Number(prompt("Qual é a aceleração desejada? "))
    naveAtual.CurrentVelocity = SetCurrentVelocity(WishedSpeed, naveAtual);

    alert("Velocidade incrementada com sucesso! \n "+ "Velocidade: " + naveAtual.CurrentVelocity);

}

  function SetCurrentVelocity(newVelocity, naveAtual){
        return naveAtual.CurrentVelocity = naveAtual.CurrentVelocity + (newVelocity * ( 1 - 0.17));
     }
     