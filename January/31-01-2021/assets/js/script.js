let addMenuItemAnimation = document.getElementsByClassName("addAnimationEachItem");
console.log(addMenuItemAnimation);


for (let i = 0; i < addMenuItemAnimation.length; i++) {
    addMenuItemAnimation[i].addEventListener("click", function () {
        for (let j = 0; j < addMenuItemAnimation.length; j++) {
            addMenuItemAnimation[j].classList.remove("addBgColor");
        }
    })
}


for (let i = 0; i < addMenuItemAnimation.length; i++) {
    addMenuItemAnimation[i].addEventListener("click", function () {
        addMenuItemAnimation[i].classList.add("addBgColor");
    })
}



