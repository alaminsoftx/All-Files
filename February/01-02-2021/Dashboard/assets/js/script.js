
/**
 * dashboard menu item select for animation
 */
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



/**
 * dashboard toggle
 */

let SoftX01022021ToggleButtonSelect = document.getElementById("SoftX01022021ToggleButtonAreaId");
let SoftX01022021ToggleMenuSelect = document.getElementById("SoftX31012021MainThemeOne");

SoftX01022021ToggleButtonSelect.addEventListener("click",function(){
    SoftX01022021ToggleMenuSelect.classList.toggle("SoftX01022021ToggleAddClass");
});


/**
 * Scrollbar
 * */ 
