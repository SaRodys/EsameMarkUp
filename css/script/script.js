//sezione gallery monstera
var imgs = new Array ("./css/img/Deliciosa.png", "./css/img/Adansonii.png", "./css/img/Obliqua.jpg", "./css/img/Borsigiana.jpg");
var specie = new Array ("Monstera Deliciosa", "Monstera Adansonii", "Monstera Obliqua", "Monstera Borsigiana");
var current = 0; 
var currentT = 0;
function moveDown() {
    current = (current + 1) % imgs.length;
    currentT = (currentT + 1) % specie.length;  
    document.getElementById("big").src=imgs[current];
    document.getElementById("text").innerHTML=specie[currentT];

}
function moveUp() {
    current = (current - 1);
    currentT = (currentT - 1);
    if (current < 0)
    current = imgs.length-1; 
    document.getElementById("big").src=imgs[current];
    if (currentT < 0)
        currentT = specie.length-1;
        document.getElementById("text").innerHTML=specie[currentT];
}
document.getElementById("down").onclick = moveDown;
document.getElementById("up").onclick = moveUp;


//sezione gallery banano
var banano = new Array ("./css/img/banano1.png", "./css/img/banano2.png", "./css/img/banano3.png", "./css/img/banano4.png");
var contatore = 0;
function scorriSx(){
    contatore = (contatore - 1);
    if (contatore < 0)
        contatore = (banano.length-1);
        document.getElementById("GBanano").src = banano[contatore];
}

function scorriDx(){
    contatore = (contatore + 1) % banano.length;
    document.getElementById("GBanano").src = banano[contatore];
}

document.getElementById("bsx").onclick = function(){
    scorriSx(); 
}
document.getElementById("bdx").onclick = function(){
    scorriDx();
}


//sezione gallery dieffenbachia 
var dieffenbachia = new Array ("./css/img/dieffenbachia1.jpg", "./css/img/dieffenbachia2.jpg", "./css/img/dieffenbachia3.jpg", "./css/img/dieffenbachia4.jpg");
var i = 0;
function scorriSinistra(){
    i = (i - 1);
    if (i < 0)
        i = (dieffenbachia.length-1);
        document.getElementById("GDiffenbachia").src = dieffenbachia[i];
}

function scorriDestra(){
    i = (i + 1) % dieffenbachia.length;
    document.getElementById("GDiffenbachia").src = dieffenbachia[i];
}

document.getElementById("sinistra").onclick = function(){
    scorriSinistra(); 
}
document.getElementById("destra").onclick = function(){
    scorriDestra();
}


//sezione gallery pothos 
var pothos = new Array ("./css/img/pothos1.jpg", "./css/img/pothos2.jpg", "./css/img/pothos3.jpg", "./css/img/pothos4.jpg");
var j = 0; 
function scorriAS(){
    j = (j - 1);
    if (j < 0)
        j = (pothos.length-1);
        document.getElementById("GPothos").src = pothos[j];
}

function scorriAD(){
    j = (j + 1) % pothos.length;
    document.getElementById("GPothos").src = pothos[j];
}

document.getElementById("psx").onclick = function(){
    scorriAS(); 
}
document.getElementById("pdx").onclick = function(){
    scorriAD();
}


//recupero il bottone
var bottoneScroll = document.getElementById("bottoneTop");

//funzione che fa apparire/scomparire il bottone se la pagina scende
function paginaScorre() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      bottoneScroll.style.display = "block";
    } 
    else {
      bottoneScroll.style.display = "none";
    }
  }
  
//funzione per far tornare a inizio pagina
function tornaInAlto() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


//allo scorrimento della pagina si esegue la funzione per far apparire il bottone 
window.onscroll = function() {
    paginaScorre()
};

//al click sul bottone si esegue la funzione per tornare in alto
bottoneScroll.onclick = function(){
    tornaInAlto(); 
}


