
import planet from "./planet.js"
import planet_operations from "./planet_operations.js"

    let Planets = [];
    let KM;

    Planets.push(new planet("Mercúrio", 0.39))
    Planets.push(new planet("Vênus", 0.72))
    Planets.push(new planet("Terra", 1))
    Planets.push(new planet("Marte", 1.52))
    Planets.push(new planet("Júpiter", 5.2))
    Planets.push(new planet("Saturno", 9.53))
    Planets.push(new planet("Urano", 19.1))
    Planets.push(new planet("Netuno", 30))




Planets.forEach(element => {
    KM = planet_operations(element.distance); 
    alert(`Nome do planeta: ${element.name} \n Distância do Sol: ${KM}`);
});

