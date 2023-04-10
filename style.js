const angel = document.querySelector("#angela");
const riks = document.querySelector("#riz");
const readAll = document.querySelector("#mark");
const toggled = document.querySelectorAll("#grey");
const redDots = document.querySelectorAll("#redDot");
const mark = document.querySelector("#none");

angel.addEventListener( "mouseover", function (){
    angel.style.color = " hsl(219, 85%, 26%)";
    angel.style.cursor ="pointer";
})

riks.addEventListener( "mouseover", function() {
    riks.style.backgroundColor = "hsl(205, 33%, 90%)";
    riks.style.cursor = "pointer";
})

readAll.addEventListener("click", function(){
    toggled[0].style.backgroundColor = " white";
    toggled[1].style.backgroundColor = " white";
    toggled[2].style.backgroundColor = " white";
    redDots[0].style.display = "none";
    redDots[1].style.display = "none";
    redDots[2].style.display = "none";
    mark.style.display = "none";




})