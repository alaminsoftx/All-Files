var photos = ['image/3.jpg', 'image/2.jpg', 'image/3.jpg'];
var selectImgTag = document.querySelector('img');
var counterItem = 0;


document.getElementById("softX24012021arraySlider").addEventListener("load", autoPlay());

document.getElementById('softX24012021next').addEventListener("click", function () {
    counterItem++;
    selectImgTag.src = photos[counterItem];
    if (counterItem >= photos.length) {
        counterItem = 0;
        selectImgTag.src = photos[counterItem];
    } else {
        selectImgTag.src = photos[counterItem];
    }
});

document.getElementById('softX24012021prev').addEventListener("click", function () {
    counterItem--;
    selectImgTag.src = photos[counterItem];
    if (counterItem < 0) {
        counterItem = photos.length - 1;
        selectImgTag.src = photos[counterItem];
    } else {
        selectImgTag.src = photos[counterItem];
    }
});

function autoPlay(){
    setInterval(function (){
        counterItem--;
    selectImgTag.src = photos[counterItem];
    if (counterItem < 0) {
        counterItem = photos.length - 1;
        selectImgTag.src = photos[counterItem];
    } else {
        selectImgTag.src = photos[counterItem];
    }
    }, 3000);
}

document.getElementById('softX24012021btn').addEventListener("click", function(){
    document.getElementById('softX24012021menu').classList.toggle('active');
});