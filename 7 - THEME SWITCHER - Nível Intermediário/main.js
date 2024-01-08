const buttonLight = document.querySelector(".buttonLight");
const buttonDark = document.querySelector(".buttonNight");


buttonLight.addEventListener('click',function(e){
    toogle(e)

})

buttonDark.addEventListener('click',function(e){
    toogle(e)
})

function toogle(e){
    document.documentElement.classList.toggle('darkMode')
    buttonDark.classList.toggle('hide')
    buttonLight.classList.toggle('hide')
}

