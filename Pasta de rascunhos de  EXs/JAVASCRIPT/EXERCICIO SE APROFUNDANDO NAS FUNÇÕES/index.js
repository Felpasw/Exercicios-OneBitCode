
let lowerspeed = speed => {
    return "Velocidade atual = " + speed +"km/s";
}
function alertabordo(){
    while(lowerspeed >= 0){
        alert(lowerspeed(speed));
        speed -= 20;

    }
    
}


