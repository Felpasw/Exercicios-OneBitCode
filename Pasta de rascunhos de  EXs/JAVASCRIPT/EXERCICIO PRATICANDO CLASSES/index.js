var SpaceShips = [];
class Naves{
   
    constructor(name, Crew, isHiched, isOpen){
        this.name = name;
        this.Crew = Crew;
        this.isHiched = isHiched;
        this.isOpen = isOpen;
    }
}
function menu(){
         op = Number(prompt("Olá o que deseja fazer com sua nave?  \n 1- Realizar engate \n 2- Imprimir naves \n 3- Sair" ));
         switch(op){
            case 1:
                cadastrarnaves();
            break;
            case 2:
                imprimirnaves();
            break;
            case 3:
                alert("Ok, saindo...")
            break;
         }
    }
function cadastrarnaves(){
        SpaceName = prompt("Qual o nome da sua nave para engate? ")
        SpaceCrew = Number(prompt("Qual o número de tripulantes suportado por essa nave? "))
        a = new Naves(SpaceName, SpaceCrew, true, true);
        SpaceShips.push(a);
        alert("Nave engatada com sucesso!!")

    }
function  imprimirnaves(){
            forEach( SpaceShips, function(key, value) {
                    alert(key +":"+ value +"\n");
                });
    }
