let paragrafo = document.querySelector('#PR1');

paragrafo.addEventListener("click",Mudaverde);
paragrafo.addEventListener("mouseover",Mudavermelho);

function Mudaverde () {
    paragrafo.style.background= "green"
}

function Mudavermelho (){
    paragrafo.style.color= "red"

}

