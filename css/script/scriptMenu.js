var menuView = true;

function openMenu (){
    let nav = document.getElementsByTagName("nav");
    nav[0].style.display = "block";
    menuView = false;
}

function closeMenu(){
    let nav = document.getElementsByTagName("nav");
    nav[0].style.display = "none";
    menuView = true;
}

document.getElementById("BMenu").onclick = function(){
    if (menuView == true) 
    openMenu();
    else
    closeMenu(); 
}