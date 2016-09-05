var scan = document.querySelector(".scan .heading");
var popup = document.querySelector(".search");
var foil = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-overlay");

scan.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("search-show");
  foil.classList.add("modal-overlay-show");
  });

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("search-show");
  foil.classList.remove("modal-overlay-show");
  });
