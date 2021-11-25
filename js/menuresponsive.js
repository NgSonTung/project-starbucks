const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
const menu = document.getElementById("mainmenu");
const banner = document.getElementById("banner");


menubtn.addEventListener("click",menuactive);
crossbars.addEventListener("click",menudeactive);



function menuactive(){
    crossbars.style.display="block";
    menu.style.height="396px";
    banner.style.marginTop= "374px";
}

function menudeactive(){
    crossbars.style.display="none"
    menu.style.height="0";
    banner.style.marginTop= "0";
}