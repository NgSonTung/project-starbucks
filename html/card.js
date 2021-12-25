window.addEventListener("load", function () {
    // NORMAL SLIDER
    const slider = document.getElementById('slider');
    const sliderMain = document.getElementById('sliderMain');
    const sliderItems = document.querySelectorAll(".slideritem");
    const right = document.getElementById('right-arrow');
    const left = document.getElementById('left-arrow');
    const sliderItemWidth = document.getElementById('sliderwidth').offsetWidth;
    let positionX = 0;
    let index = 0;
    right.addEventListener("click", function () {
        changeItem(1);
    });
    left.addEventListener("click", function () {
        changeItem(-1);
    });
    function changeItem(direction) {
        if (direction == 1) {
            index++;
            console.log(index)
            if (index >= 2) {
                index = 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;

        } else if (direction == -1) {
            index--;
            console.log(index)
            if (index <= -1) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log("back")
        }
    }
})
