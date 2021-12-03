
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("mouseover",function(){
let hexColor = '#';
for(let i=0 ; i<6;i++){
    hexColor += hex[getranNumber()];
}
color.textContent = hexColor;
document.body.style.background = hexColor;
document.getElementById("navi").style.backgroundColor = hexColor;

})
function getranNumber(){
    return Math.floor(Math.random()*hex.length);
}
