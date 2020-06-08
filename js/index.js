const burger = document.querySelector(`.burger`);
if(burger) {
  function hndClickBurger() {
    const burgerLines = burger.querySelectorAll(`.burger__line`);
    const menu = document.querySelector(`.menu`);
    burgerLines.forEach(line => line.classList.toggle(`open`));
    menu.classList.toggle(`open`);
    
  }
  burger.addEventListener(`click`, hndClickBurger);
}