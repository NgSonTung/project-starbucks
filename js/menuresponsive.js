const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
const menu = document.getElementById("mainmenu");
const header = document.getElementById("header");


menubtn.addEventListener("click",menuactive);
crossbars.addEventListener("click",menudeactive);



function menuactive(){
    crossbars.style.display="block";
    menu.style.height="396px";
    header.style.marginBottom= "374px";
}

function menudeactive(){
    crossbars.style.display="none"
    menu.style.height="0";
    header.style.marginBottom= "0";
}