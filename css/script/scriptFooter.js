//------------------------INSTAGRAM ICON----------------------
var instagram = document.getElementById("instagram");

function mouseOverIg(){
    instagram.src="./css/img/instagramClick.png";
}
function mouseOutIg() {
    instagram.src="./css/img/instagram.png";
}

instagram.onmouseover = function (){
mouseOverIg();
}
instagram.onmouseout = function () {
    mouseOutIg();
}
//------------------------FACEBOOK ICON----------------------
var facebook = document.getElementById("facebook");
function mouseOverFb(){
    facebook.src="./css/img/facebookClick.png";
}
function mouseOutFb() {
    facebook.src="./css/img/facebook.png";
}

facebook.onmouseover = function (){
mouseOverFb();
}
facebook.onmouseout = function () {
    mouseOutFb();
}

//------------------------TIKTOK ICON----------------------
var tiktok = document.getElementById("tiktok");

function mouseOverTk(){
    tiktok.src="./css/img/tiktokClick.png";
}
function mouseOutTk() {
    tiktok.src="./css/img/tiktok.png";
}

tiktok.onmouseover = function (){
mouseOverTk();
}
tiktok.onmouseout = function () {
    mouseOutTk();
}

