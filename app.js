let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let playerPhotos = document.querySelectorAll(".players_container .player");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});
playerPhotos.forEach((photo) => {
  photo.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  photo.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});
