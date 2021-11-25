const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
menubtn.addEventListener("click",menuactive);
function menuactive(){
    crossbars.style.display="none";
};