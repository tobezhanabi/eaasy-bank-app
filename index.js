const hamburgur = document.querySelector(".hamburger");
const menu = document.querySelector("ul");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

hamburgur.addEventListener("click", () => {
  console.log("hamburger clicked");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
  } else {
    menu.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
  }
});
