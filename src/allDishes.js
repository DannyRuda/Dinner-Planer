export {allDishes}

let allDishes = (()=>{

    function getInnerHTML(dishArray) {
      let htmlString = '';
      for(let dish of dishArray) {
        console.log(dish);
        htmlString += `<div class="img" style="background-image:url(${dish.img});"><div class="desc"><p>${dish.name}</p></div><button class="remove">remove</button></div>`;
      }
      console.log(htmlString)
      return htmlString;
    }
    function loadPage(dishArray) {
      let innerHTML = getInnerHTML(dishArray)
      document.querySelector('.main').innerHTML = `<div class="dishes">
      ${innerHTML}
      </div>`;
      addListenersToDivs(dishArray);
      addListenersToRemoveButtons(dishArray);
    }

    function addListenersToDivs(dishArray) {
      let divs = document.querySelectorAll('.desc');
      for (let div of divs) {
        div.addEventListener('click',(e)=>{
          showRecipeCard(dishArray,e);
        })
      }
    };

    function addListenersToRemoveButtons(dishArray) {
      let removeButtons = document.querySelectorAll('.remove');
      for (let button of removeButtons) {
        button.addEventListener('click',(e)=>{
          dishObject.deleteDish(e,dishArray)
        })
      }
    }

    function getDish(e,dishArray) {
      console.log(e.target.tagName)
      if(e.target.tagName === 'DIV') {
        let dishIndex = dishArray.findIndex((object)=>e.target.children[0].innerText === object.name)
        return dishArray[dishIndex];
      } else if(e.target.tagName === 'button') {
        let dishIndex = dishArray.findIndex((object)=>e.target.parentNode.children[0].children[0].innerText === object.name)
        return dishArray[dishIndex];
      }
    }

    let dishObject = (()=>{
      function remove(dish,dishArray) {
        let objectIndex = dishArray.findIndex((object)=>object == dish);
        dishArray.splice(objectIndex,1)
      }
      function saveDishArray(dishArray) {
        localStorage.setItem('dishArray',JSON.stringify(dishArray));
      }
      function deleteDish(e,dishArray) {   
        remove(getDish(e,dishArray),dishArray);
        saveDishArray(dishArray);
        loadPage(dishArray);
      }
      return {deleteDish}
    })()

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
    return {loadPage,addListenersToDivs,addListenersToRemoveButtons,showRecipeCard};
})()