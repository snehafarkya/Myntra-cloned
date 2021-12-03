function menw(){
document.getElementById("myDropdown").classList.toggle("show");
} 
function menn(){
    document.getElementById("myDropdown").classList.toggle(false);
}
function womenw(){
document.getElementById("myDropdown1").classList.toggle("show");

} 
function wmenn(){
    document.getElementById("myDropdown").classList.toggle("none");
}
function kimds(){
document.getElementById("myDropdown2").classList.toggle("show");

} 
function kim(){
    document.getElementById("myDropdown").classList.toggle("none");
}
function HOL(){
document.getElementById("myDropdown3").classList.toggle("show");

} 
function holl(){
    document.getElementById("myDropdown").classList.toggle("none");
}
function beau(){
    document.getElementById("myDropdown4").classList.toggle("show");
    
    } 
function profile(){
    document.getElementById("prof").classList.toggle("show");
    
    } 
// Slideshow for discount options
    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex-1].style.display = "block";
    }

