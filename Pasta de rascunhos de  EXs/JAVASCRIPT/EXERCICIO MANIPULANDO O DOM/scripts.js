var numendereco = 0;
function addAdress(){
    var listaTotal = document.createElement("ul");
    var NumeroLi = document.createElement("li");
    var BairroLi = document.createElement("li");
    var CidadeLi = document.createElement("li");
    var AreaLi = document.createElement("li");
    var txt = document.createElement("li");
    // numendereco ++;
    
   
   
    var Endereco = document.createTextNode("Endereço nº " + numendereco);
    var Numero = document.createTextNode("Número: " + document.getElementById("Numero").value);
    var Bairro = document.createTextNode("Bairro: "+ document.getElementById("Bairro").value);
    var cidade = document.createTextNode("Cidade: "+ document.getElementById("Cidade").value);
    var Area = document.createTextNode("Área: "+ document.getElementById("area").value);

    // txt.appendChild(Endereco);
    NumeroLi.appendChild(Numero);
    BairroLi.appendChild(Bairro);
    CidadeLi.appendChild(cidade);
    AreaLi.appendChild(Area);

    listaTotal.appendChild(txt);
    listaTotal.appendChild(NumeroLi);
    listaTotal.appendChild(BairroLi);
    listaTotal.appendChild(CidadeLi);
    listaTotal.appendChild(AreaLi);
    
 
    var par = document.getElementsByTagName("p")[0];
    par.appendChild(txt);

    var lista = document.getElementsByTagName("ul")[0]; 
    lista.appendChild(listaTotal);



   

    // var lista = document.getElementsByTagName("ul")[0];
    // lista.appendChild(elemento);
}       