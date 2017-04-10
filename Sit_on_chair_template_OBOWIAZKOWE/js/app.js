document.addEventListener("DOMContentLoaded", function(){
  var innerMenu = document.querySelector('.innerMenu');
  var company = document.getElementById('o-firmie');
  innerMenu.classList.add("invisible");

  // te eventy wysuwają i chowają wewnętrzne menu zakładki "o firmie"
  company.addEventListener("mouseover", function(){
    innerMenu.classList.remove("invisible");
  });
  company.addEventListener("mouseout", function(){
    innerMenu.classList.add("invisible");
  });
  // zadanie nr 2 warsztaty
  var boxes = document.getElementsByClassName('box');
  var box3 = document.getElementById('right');

  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].id !== "right") {
      boxes[i].addEventListener("mouseover", function(e){
        var line = this.querySelector('.opacity-blue');
        line.className ="invisible";

      });
      boxes[i].addEventListener("mouseout", function(){
        var line = this.querySelector('.invisible');
        line.className = "opacity-blue";
      });
    }
  }

});
