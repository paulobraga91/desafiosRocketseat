const ElementDays = document.querySelectorAll(".days")
const ElementHours = document.querySelectorAll(".hours")
const ElementMinutes = document.querySelectorAll(".minutes")
const ElementSeconds = document.querySelectorAll(".seconds")


let target = new Date('Jan 1, 2024 00:00:00').getTime();

function Countdown(){

    let now = new Date().getTime();
    let difference = target - now;

    let days = Math.floor(difference / (1000 * 60 *60 *24));
    let hours = Math.floor((difference %(1000 *60 *60 *24)) / (1000 *60 *60));
    let minutes = Math.floor((difference % (1000 *60 *60) )/ (1000 *60 ));
    let seconds = Math.floor((difference % (1000 *60 )) / 1000 );
    
    ElementDays.forEach(element => element.innerHTML = days.toString().padStart(2,'0'));
    ElementHours.forEach(element => element.innerHTML = hours.toString().padStart(2,'0'));
    ElementMinutes.forEach(element => element.innerHTML = minutes.toString().padStart(2,'0'));
    ElementSeconds.forEach(element => element.innerHTML = seconds.toString().padStart(2,'0'));
}

let x = setInterval(Countdown, 1000);
