class imoveis{
    constructor(tipoImovel, isAlugado, area){
        this.isAlugado = isAlugado;
        this.tipoImovel = tipoImovel;
        this.area = area;
    }
}


// ap = new imoveis(document.querySelector("input[name ='tipoDoImovel']:checked").value, 
//                  Boolean(document.querySelector("input[name='alugado']:checked", ).value),
//                  Number(document.querySelector("input[name='area']").value) )

function addImovel(){
   event.preventDefault();
  var tipoImovel = document.querySelector("input[name ='tipoDoImovel']:checked").value
   var Alugado = document.querySelector("input[name='alugado']:checked").value
   var area = document.querySelector("input[name='area']").value
   var paragrafo = document.createElement("p");
   var isAlugado = document.createElement("p");
   var btn = document.createElement("button");
   btn.innerText = "Remover"
   btn.setAttribute("onclick", "RemoveImovel(this)");

   if(Alugado == "s"){
        isAlugado.style.backgroundColor = 'red'
        isAlugado.innerText = "ALUGADO";
   }
   else{
        isAlugado.innerText = "DISPONÍVEL"
   }
 
   paragrafo.innerText = "\n Tipo do imóvel: "+ tipoImovel+"\n Area: "+ area + "m²\n ";
   paragrafo.appendChild(isAlugado);   
   paragrafo.appendChild(btn);
  
  
   imoveis = document.getElementById("imoveis");
  
   imoveis.appendChild(paragrafo);

}
function RemoveImovel(btnw){
    let pToRemove = btnw.parentNode
    document.getElementById("imoveis").removeChild(pToRemove);
}