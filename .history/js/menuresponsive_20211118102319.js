const menubtn = document.getElementById("menu-btn");
const crossbars = document.getElementById("crossbar-container");
crossbars.addEventListener("click",menuactive);
function menuactive(){
    crossbars.style.display="none";
};