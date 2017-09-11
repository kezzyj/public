/**
 * Created by Karachi on 9/9/2017.
 */

var userName=window.prompt("Welcome to the vacatonplanner. please enter your name");
document.getElementById("greeting").innerHTML+= " "+ userName;
//var daysInput=document.getElementById("days");
var enter= document.getElementById("enterDays");
//   var days= daysInput.value;
enter.onclick= calculateDays;
function calculateDays() {
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
    if (days < 4) {
        daysMessage.innerHTML = "Short trips are always worth it!";

    }
    else if (days < 7) {
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
    }
    else {
        daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
    }

    var hours, minutes, seconds;
    hours = days * 24;
    minutes = hours * 60;
    seconds = minutes * 60;
    var hoursMessage = document.getElementById("hoursMessage");
    var minutesMessage = document.getElementById("minutesMessage");
    var secondsMessage = document.getElementById("secondsMessage");

    hoursMessage.innerHTML = "That means you’ll be traveling for " + hours + " hours.";
    minutesMessage.innerHTML = "which means you’ll be traveling for " + minutes + " minutes.";
    secondsMessage.innerHTML = "Oga you will be spending this much seconds " + seconds + " seconds.";
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
    timingNext.onclick = function () {
        var budgetSection = document.getElementById("budgetSection");
        budgetSection.removeAttribute("hidden");
    }


}
var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick = function () {
    var tripBudget = document.getElementById("tripBudget");
    var calBudget=tripBudget.value;
    var naira =calBudget*400;
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    tripExchangeMsg.innerHTML="That means you will need "+ naira+ " naira for your trip.";
    var perDay= naira/24;
    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
       dailyExchangeMsg.innerHTML="that means you can spend "+ perDay+" per day";
       var for10= 10*400;
       var for500= 500*400;
       var exchange10Msg= document.getElementById("exchange10Msg");
       var exchange500Msg= document.getElementById("exchange500Msg");
       exchange10Msg.innerHTML="You'll need"+for10+" for an item that will cost you 10USD";
       exchange500Msg.innerHTML= "You'll need"+for500+" for an item that will cost you 5000USD";
}
var images=["images/maxresdefault.jpg","images/nigeria-training_16ohtzafh4a1p14mfkgg4yb5gb.jpg","images/promo295514979.jpg","images/Sharm-el-Sheikh-Egypt.jpg"];
var currentImage = 0;
setInterval(changeImage, 3000);
function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage= "url(" + images[currentImage] + ")";
}


/* var prev = document.getElementById("prev");
 var next = document.getElementById("next");
 var image = document.getElementById("image");
 var images = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/city.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/cloudy.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/green.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1259621/pretty_clouds.jpg"];
 var imageIndex = 0;
 // point to previous image when prev button is clicked
 prev.onclick = function(){
 // set image to highest index when moving past 0
 if(imageIndex == 0){
 imageIndex = images.length - 1;
 }
 else{
 imageIndex--;
 }
 image.setAttribute("src", images[imageIndex]);
 }
 // point to previous image when prev button is clicked
 next.onclick = function(){
 // set image index to 0 when moving past max index
 if(imageIndex == images.length - 1){
 imageIndex = 0;
 }
 else{
 imageIndex++;
 }
 image.setAttribute("src", images[imageIndex]);
 }
 */