const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
const menu = document.getElementById("mainmenu");


menubtn.addEventListener("click",menuactive);
crossbars.addEventListener("click",menudeactive);



function menuactive(){
    crossbars.style.display="block";
    menu.style.display="block";
}

function menudeactive(){
    crossbars.style.display="none"
    menu.style.display="none";
}