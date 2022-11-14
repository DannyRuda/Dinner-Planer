import './reset.css';
import './style.css';
import './add-recipe.jpg';
import DinnerCollage from './dinner-collage.jpg';
import PastaDish from './pasta-dish.jpg';
import './thinking-woman.jpg';
import {home} from './home';
import {generateDish} from './generateDish';
import {allDishes} from './allDishes';
import {addDishes} from './addDishes';
export {dishArray}
home.loadInitialPage();

let dishArray = addDishes.loadDishArray();

if( window.localStorage.getItem("one")) {
  let test = (JSON.parse(window.localStorage.getItem("one")));
  console.log(test);
}

(() => {
  let navButtons = document.querySelectorAll('ul li');
  let buttonHome = navButtons.item(0);
  let buttonGenerateDish = navButtons.item(1);
  let buttonAllDishes = navButtons.item(2);
  let buttonAddDishes = navButtons.item(3);
  /*let dishArray = [{
    name: 'Kartoffeln mit Spinat', prepTime: '20min', cookTime: '20min', 
    ingredients: ['Kartoffeln','Spinat','Salz'],
    'cooking steps': ['step1','step2'], img: DinnerCollage
  },
  {
    name: 'Nudeln mit Soße', prepTime: '5min', cookTime: '15min', 
    ingredients: ['Nudeln','Passierte Tomaten','Sahne','Muskat','Schinkenwürfel'],
    'cooking steps': ['step1','step2'], img: PastaDish
  }
  ];*/
  
  function addEventlistenerToButtons(e) {
    if (e.target.innerText === 'Generate Dishes'){
      document.querySelector('button.generate-dish').addEventListener('click', ()=>{
        generateDish.generate(dishArray)
      })
    } else if(e.target.innerText === 'Add Dishes') {
        /*document.querySelector('button').addEventListener('click', ()=>{
          let formBackground = document.querySelector('.formBackground');
          let newDishForm = document.querySelector('.dishForm');
          formBackground.classList.remove('hide')
          newDishForm.classList.remove('hide')
          formBackground.addEventListener('click', addDishes.closeForm);
          newDishForm.addEventListener('mouseover',()=>{formBackground.removeEventListener('click',addDishes.closeForm)});
          newDishForm.addEventListener('mouseleave',()=>{formBackground.addEventListener('click', addDishes.closeForm)});
        })
        document.querySelector('.addIngredient').addEventListener('click',()=>{
          addDishes.createNewInputField('Ingredient');
        });
        document.querySelector('.addStep').addEventListener('click',()=>{
          addDishes.createNewInputField('Step');
        });
        document.querySelector('.submit').addEventListener('click',(e)=>{
          e.preventDefault();
          addDishes.addDishObjectToArray(dishArray);
        });*/
    } else if (e.target.innerText === 'All Dishes') {
        /*allDishes.addListenersToDivs(dishArray);
        allDishes.addListenersToRemoveButtons(dishArray);*/
    }
  }

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
    addEventlistenerToButtons(e);
  });
  
  buttonAllDishes.addEventListener('click',(e)=>{
    removeElements();
    allDishes.loadPage(dishArray);
    changeActiveNavButton(e);
    addEventlistenerToButtons(e);
  });

  buttonAddDishes.addEventListener('click',(e)=>{
    removeElements();
    addDishes.loadPage();
    changeActiveNavButton(e);
    addEventlistenerToButtons(e);
  });
})()