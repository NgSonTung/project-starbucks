const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
const menu = document.getElementById("mainmenu");
const banner = document.getElementById("banner");


menubtn.addEventListener("click",menuactive);
crossbars.addEventListener("click",menudeactive);



function menuactive(){
    crossbars.style.display="block";
    menu.style.display="flex";
    banner.style.marginTop= "374px";
}

function menudeactive(){
    crossbars.style.display="none"
    menu.style.display="none";
    banner.style.marginTop= "0";
}