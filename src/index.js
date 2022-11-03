import './reset.css';
import './style.css';
import './add-recipe.jpg';
import './dinner-collage.jpg';
import './pasta-dish.jpg';
import './thinking-woman.jpg';
import {home} from './home';
import {generateDish} from './generateDish';
import {allDishes} from './allDishes';
import {addDishes} from './addDishes';

home.loadInitialPage();

(() => {
  let navButtons = document.querySelectorAll('ul li');
  let buttonHome = navButtons.item(0);
  let buttonGenerateDish = navButtons.item(1);
  let buttonAllDishes = navButtons.item(2);
  let buttonAddDishes = navButtons.item(3);

  function removeElements() {
    document.querySelector('.main').replaceChildren();
  }

  function changeActiveNavButton(e) {
    document.querySelector('li.active').classList.remove('active');
    e.target.classList.add('active');
  }

  buttonHome.addEventListener('click', (e)=>{
    removeElements();
    home.loadPage();
    changeActiveNavButton(e);
  });

  buttonGenerateDish.addEventListener('click', (e)=>{
    removeElements();
    generateDish.loadPage();
    changeActiveNavButton(e);
  });
  
  buttonAllDishes.addEventListener('click',(e)=>{
    removeElements();
    allDishes.loadPage();
    changeActiveNavButton(e);
  });

  buttonAddDishes.addEventListener('click',(e)=>{
    removeElements();
    addDishes.loadPage();
    changeActiveNavButton(e);
  });
})()