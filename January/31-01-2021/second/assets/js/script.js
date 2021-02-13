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

 
function myFunction(value){

  
   
    let lastClassValue = localStorage.getItem('test')?? 'mystyle_1';

   console.log(lastClassValue);

  let addNewClass = localStorage.setItem('test', value)

  var element = document.getElementById("addMenuAnimation");

  element.classList.remove(lastClassValue);


  var element2 = document.getElementById("addMenuAnimation");

  element2.classList.add(addNewClass);




}
// $('#addMenuAnimation').addClass('MyClass');

// $('#MyElement').removeClass('MyClass');

// if ( $('#MyElement').hasClass('MyClass') )

