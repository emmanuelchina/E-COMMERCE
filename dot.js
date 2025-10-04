var mainImg = document.getElementById("meain")
var smallimg = document.getElementsByClassName("small-img")

smallimg[0].onclick = function(){
    mainImg.src = smallimg[0].src
}
smallimg[1].onclick = function(){
    mainImg.src = smallimg[2].src
}
smallimg[2].onclick = function(){
    mainImg.src = smallimg[2].src
}
smallimg[3].onclick = function(){
    mainImg.src = smallimg[3].src
}
// script.js
function showAlert() {
    document.getElementById("alertBox").style.display = "block";
}

function closeAlert() {
    document.getElementById("alertBox").style.display = "none";
}


window.onload = showAlert;