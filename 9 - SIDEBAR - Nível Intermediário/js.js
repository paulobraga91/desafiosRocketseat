const btnOpen = document.querySelector('.button-open');
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.sidebar ul li');
const textButton = document.querySelectorAll('.textbutton');

const profile = document.querySelector('.profileClose');
const profileOpen = document.querySelector('.profileOpen');
const logoImage = document.querySelector('.logoImage')

btnOpen.addEventListener('click', function(){
   
    profile.classList.toggle('hidden');
    profileOpen.classList.toggle('hidden');
    logoImage.classList.toggle('hidden');
  
    menu.classList.toggle('menuOpen');
    sidebar.classList.toggle('open');
  

    textButton.forEach( function(button){
        button.classList.toggle('hidden');
})

  
    

})


