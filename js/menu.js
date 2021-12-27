async function openMenu() {
    let value = "blur(5px)";
    ["card-signin__layout","this-is-header","this-is-footer"].forEach(e => {
        ["-webkit-filter","-moz-filter","-o-filter","-ms-filter","filter"].forEach(a => {
            document.getElementById(e).style[a] = value;
        })
    })
    document.getElementById("hidden--menu").style.width = "300px";
    document.getElementById("menu-button").style.display = "none";
    document.getElementsByClassName("card__header--starbucksreward")[0].style.transform = "translate(-30px)";
    await new Promise(resolve => setTimeout(resolve, 50));
    document.getElementsByClassName("card__header--starbucksreward")[0].style.display = "none";
    document.getElementById("hidden--card__header--starbucksreward").style.display = "block";
    document.getElementsByClassName("bar1")[1].style.transform = "rotate(45deg) translate(7px, 6px)";
    document.getElementsByClassName("bar2")[1].style.opacity = 0;
    document.getElementsByClassName("bar3")[1].style.transform = "rotate(-45deg) translate(7px, -6px)";
    document.getElementById("hidden--card__header--menu").style.display = "flex";
}

async function closeMenu() {
    let value = "blur(0)";
    let valueR = "rotate(0) translate(0)";
    ["card-signin__layout","this-is-header","this-is-footer"].forEach(e => {
        ["-webkit-filter","-moz-filter","-o-filter","-ms-filter","filter"].forEach(a => {
            document.getElementById(e).style[a] = value;
        })
    })
    document.getElementsByClassName("bar1")[1].style.transform = valueR;
    document.getElementsByClassName("bar2")[1].style.opacity = 1;
    document.getElementsByClassName("bar3")[1].style.transform = valueR;
    await new Promise(resolve => setTimeout(resolve, 50));
    document.getElementById("hidden--menu").style.width = 0;
    document.getElementById("menu-button").style.display = "block";
    document.getElementById("hidden--card__header--menu").style.display = "none";
    document.getElementsByClassName("card__header--starbucksreward")[0].style.display = "block";
    await new Promise(resolve => setTimeout(resolve, 50));
    document.getElementsByClassName("card__header--starbucksreward")[0].style.transform = "translate(0)";
}

$(window).resize(function(){

    var width = $(window).width();
    if (width >= 932){
        closeMenu();
    }
});