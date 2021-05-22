const body = document.getElementById("body");
const menu = document.getElementById("menu");

menu.onclick = () => {
  body.classList.toggle("open");
}

AOS.init();