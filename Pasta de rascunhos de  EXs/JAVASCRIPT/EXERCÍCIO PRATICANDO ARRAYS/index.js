const hitchedSpaceships =[
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let MoreThan9 = hitchedSpaceships.filter( element => { return element[1] >= 9;}).map( sexo=>{ return sexo[0]});
let HitchingSpaceships= hitchedSpaceships.filter( element => { return element[2] == false; }).map( sexo=>{ return sexo[0]});

alert(MoreThan9);
alert(HitchingSpaceships);