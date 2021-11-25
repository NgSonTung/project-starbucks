const menubtn = document.getElementById("abc");
const crossbars = document.getElementById("crossbar-container");
menubtn.addEventListener("click",menuactive);
function menuactive(){
    crossbars.style.display="block"
}