// Smooth Scroll

const links = document.querySelectorAll(".banner-btn");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

// Button Up

window.onscroll = function () {
  scrollFunction();
};

const upbuttons = document.querySelectorAll(".button-up");

for (const upbutton of upbuttons) {
  upbutton.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("btnUp").className = "button-up visible";
  } else {
    document.getElementById("btnUp").className = "button-up hidden";
  }
}

// Menu

// укажем две эти функции с помощью onclick для нужных элементов - openModal() для burger-menu и  closeModal() для modal-close

// открытие модального окна
function openModal() {
  document.getElementById("modal").style.top = "0px";
}

// закрытие модального окна - указываем top = -400px и окно "прячется" наверх за пределами страницы
function closeModal() {
  document.getElementById("modal").style.top = "-400px";
}
