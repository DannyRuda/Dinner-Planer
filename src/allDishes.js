export {allDishes}

let allDishes = (()=>{

    function getInnerHTML(dishArray) {
      let htmlString = '';
      for(let dish of dishArray) {
        console.log(dish);
        htmlString += `<div class="img" style="background-image:url(${dish.img});"><div class="desc"><p>${dish.name}</p></div></div>`;
      }
      console.log(htmlString)
      return htmlString;
    }
    function loadPage(dishArray) {
      let innerHTML = getInnerHTML(dishArray)
      document.querySelector('.main').innerHTML = `<div class="dishes">
      ${innerHTML}
      </div>`;
    }

    function addListenersToDivs(dishArray) {
      let divs = document.querySelectorAll('.desc');
      for (let div of divs) {
        div.addEventListener('click',(e)=>{
          showRecipeCard(dishArray,e);
        })
      }
    };

    function getDish(e,dishArray) {
      console.log(e.target)
      console.log(e.target.children)
      let dishIndex = dishArray.findIndex((object)=>e.target.children[0].innerText === object.name)
      console.log(dishIndex)
      return dishArray[dishIndex];
    }

    function createHtmlString(dish) {
      let ingredientsString = '';
        for (let ingredient of dish.ingredients) {
          ingredientsString += `<li>${ingredient}</li>`;
        }
        let stepsString = '';
        for (let step of dish.steps) {
          stepsString += `<li>${step}</li>`;
        }
        let htmlString = `<div class="recipe-card">
          <div class="card-header">
            <div class="img" id="card-img" style="background-image:url(${dish.img});"></div>
            <div class="card-info">
            <h1>${dish.name}</h1>
            <p>prep Time: ${dish.prepTime}</p>
            <p>cooking Time: ${dish.cookTime}</p>
            </div>
          </div>
          <div class="Ingredients">
            <h1>
              Ingredients:
            </h1>
            <ul>
              ${ingredientsString}
            </ul>
          </div>
          <div class="Steps">
            <h1>
              Steps:
            </h1>
            <ul>
              ${stepsString}
            </ul>
          </div>
          </div>`;
        return htmlString;
    };

    function createAndAddElement(htmlString){
      let element = document.createElement('div')
      element.classList.add('recipeBackground')
      element.id = "allDishesCard"
      element.innerHTML = htmlString;
      document.querySelector('.main').append(element);
    }

    function removeRecipeCard() {
      document.querySelector('.main').removeChild(document.querySelector('.recipeBackground'));
    }

    function showRecipeCard(dishArray,e) {
      createAndAddElement(createHtmlString(getDish(e,dishArray)));
      let recipeCardBackground = document.querySelector('.recipeBackground');
      let recipeCard = document.querySelector('.recipe-card');
      recipeCardBackground.addEventListener('click',removeRecipeCard);
      recipeCard.addEventListener('mouseover',()=>{recipeCardBackground.removeEventListener('click',removeRecipeCard)});
      recipeCard.addEventListener('mouseleave',()=>{recipeCardBackground.addEventListener('click',removeRecipeCard)});
    }
    return {loadPage,addListenersToDivs,showRecipeCard};
})()