var slides = document.getElementsByClassName("slide");
var index = 0;

function goLeft() {
    if(index == 0){
        index = slides.length -1;
    } else {
        index--
    }

    slides[0].style.marginLeft = '-' + index * 720 + 'px';

}

function goRight() {
    if(index == slides.length - 1) {
        index = 0;
    } else {
        index++
    }

    slides[0].style.marginLeft = '-' + index * 720 + 'px';
}

//for auto Navigation

setInterval(goRight, 5000)