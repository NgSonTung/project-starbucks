let state = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

// $(".box-top").then(i => openC())

async function openC(e) {
    e = parseInt(e);
    let num = state[e];
    let value = (num == -1) ? "visible" : "hidden";
    let arrow = (num == -1) ? "arrowUp .1s" : "arrowDown .1s";
    let arrowDir = (num == -1) ? "rotate(-135deg)" : "rotate(45deg)";
    let pad = (num == -1) ? "80%" : "0";
    let value_each = (num == -1) ? (e <= 1) ? 36 : (e == 3) ? 635 : 186 : (e <= 1) ? -36 : (e == 3) ? -635 : -186;
    let card = (e <= 1) ? "card__apps" : "card__FAQs";
    document.getElementsByClassName("box__content")[e].style.transition = "font-size .1s, padding-bottom .1s";
    document.getElementById(card).style.transition = "height .1s";
    if (num == 1) {
        document.getElementsByClassName("box__content")[e].style["padding-bottom"] = "4px";
        await new Promise(res => setTimeout(res, 110));
        document.getElementsByClassName("box__content")[e].style["padding-bottom"] = "0";
    }
    document.getElementsByClassName("arrow")[e].style.animation = arrow;
    document.getElementsByClassName("arrow")[e].style.transform = arrowDir;
    if (num == 1) {
        await new Promise(res => setTimeout(res, 150));
        document.getElementsByClassName("box__content")[e].style.animation = "fadeOut 0.15s"
    }
    let getHeight = document.getElementById(card).offsetHeight + value_each;
    document.getElementById(card).style.height = getHeight + "px";
    document.getElementsByClassName("box__content")[e].style["font-size"] = pad;
    await new Promise(res => setTimeout(res, 100));
    (num == -1) ? document.getElementsByClassName("box__content")[e].style.animation = "fadeIn 0.1s": "";
    document.getElementsByClassName("box__content")[e].style.visibility = value;
    state[e] *= -1;
}

async function openCS(e) {
    let num = state[e];
    let vsb = (num == -1) ? "visible" : "hidden";
    let pad = (num == -1) ? "80%" : "0";
    let value_each = (num == -1) ? (e <= 1) ? 36 : (e == 3) ? 635 : 186 : (e <= 1) ? -36 : (e == 3) ? -635 : -186;
    let card = (e <= 1) ? "card__apps" : "card__FAQs";
    document.getElementsByClassName("box__content")[e].style.transition = "font-size .1s, padding-bottom .1s";
    document.getElementById(card).style.transition = "height .1s";
    if (num == 1) {
        document.getElementsByClassName("box__content")[e].style["padding-bottom"] = "4px";
        await new Promise(res => setTimeout(res, 110));
        document.getElementsByClassName("box__content")[e].style["padding-bottom"] = "0";
    }
    document.getElementsByClassName("arrow")[e].style.animation = arrow;
    document.getElementsByClassName("arrow")[e].style.transform = arrowDir;
    if (num == 1) {
        await new Promise(res => setTimeout(res, 150));
        document.getElementsByClassName("box__content")[e].style.animation = "fadeOut 0.15s"
    }
    let getHeight = document.getElementById(card).offsetHeight + value_each;
    document.getElementById(card).style.height = getHeight + "px";
    document.getElementsByClassName("box__content")[e].style["font-size"] = pad;
    await new Promise(res => setTimeout(res, 100));
    (num == -1) ? document.getElementsByClassName("box__content")[e].style.animation = "fadeIn 0.1s": "";
    document.getElementsByClassName("box__content")[e].style.visibility = value;
    state[e] *= -1;
}