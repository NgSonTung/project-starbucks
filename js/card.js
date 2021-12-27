window.addEventListener("load", function () {
    const right = document.getElementById('right-arrow');
    const left = document.getElementById('left-arrow');
    var slider = document.getElementById("sliderMain");
    var sliderWidth = document.getElementById('sliderwidth').offsetWidth;
    let num = 0;

    slider.style.transform = `translateX(0px)`
    left.addEventListener("click", () => {
        var w_width = $(window).width();
        if (slider.style.transform == "translateX(0px)") return;
        else if (w_width <= 840) {
            slider.style.transform = `translateX(${-sliderWidth*(num-=1)}px)`;
            if (slider.style.transform == "translateX(0px)") {
                left.style["border-color"] = "gray";
            } else {
                left.style["border-color"] = 'white';
                right.style["border-color"] = 'white';
            }
        }
        else {
            slider.style.transform = `translateX(0px)`;
            left.style["border-color"] = "gray";
            right.style["border-color"] = "white";
        }
    })
    right.addEventListener("click", () => {
        var w_width = $(window).width();
        if (slider.style.transform == `translateX(-${sliderWidth}px)` && w_width > 840) return;
        else if (w_width <= 840) {
            if (slider.style.transform == `translateX(-${sliderWidth*5}px)`) return;
            slider.style.transform = `translateX(${-sliderWidth*(num+=1)}px)`;
            if (slider.style.transform == `translateX(${-sliderWidth*5}px)`) {
                right.style["border-color"] = "gray";
            } else {
                left.style["border-color"] = 'white';
                right.style["border-color"] = 'white';
            }
        }
        else {
            slider.style.transform = `translateX(-${sliderWidth}px)`;
            left.style["border-color"] = "white";
            right.style["border-color"] = "gray";
        }
    })

    $(window).resize(() => {
        sliderWidth = document.getElementById('sliderwidth').offsetWidth;
        slider = document.getElementById("sliderMain");
        var width = document.getElementById('sliderwidth').offsetWidth;
        if (slider.style.transform == `translateX(0px)`) return;
        else if ($(window).width() > 840) slider.style.transform = `translateX(-${width}px)`;
        else {
            slider.style.transform = `translateX(${-sliderWidth*(num)}px)`;
        }
    });
})