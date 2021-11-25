const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
menubtn.addEventListener("click",menuactive);
crossbars.addEventListener("click",menudeactive);
function menuactive(){
    crossbars.style.display="block"
}

function menudeactive(){
    crossbars.style.display="none"
}