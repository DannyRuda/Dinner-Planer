import './dinner-collage.jpg';
import './pasta-dish.jpg';
export {generateDish};

let generateDish = (()=>{
    function loadPage () {
        document.querySelector('.main').innerHTML = `
          <button class="generate-dish">Generate Dish</button>
          <div class="recipe-card">
              <div class="card-header">
                  <div class="img" id="card-img"></div>
                  <div class="card-info">
                      <h1>Tomato Pasta with meatballs</h1>
                      <p>prep Time:</p>
                      <p>cooking Time:</p>
                  </div>
              </div>
              <div class="Ingredients">
                  <h1>
                      Ingredients:
                  </h1>
                  <ul>
                      <li>400g meat</li>
                      <li>1 bellpepper</li>
                      <li>2 carrots</li>
                      <li>1 onion</li>
                  </ul>
              </div>
          </div>`
    }

    function getDish (dishArray) {
        if (document.querySelector('.recipe-card').innerHTML) {
            const findCurrentDish = (object) => object.name === document.querySelector('.card-info h1').innerText;
            let removedDish =dishArray.splice(dishArray.findIndex(findCurrentDish),1);
            console.log(removedDish)
            let dish = dishArray[Math.floor(Math.random()*dishArray.length)];
            dishArray.push(removedDish[0]);
            console.log(dishArray)
            return dish;
        }
        let dish = dishArray[Math.floor(Math.random()*dishArray.length)];
        return dish;
    }

    function getInnerHTML(dishArray) {
        let dish = getDish(dishArray)
        let ingredientsString = '';
        for (let ingredient of dish.ingredients) {
            ingredientsString += `<li>${ingredient}</li>`;
        }
        let htmlString = `
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
        </div>`;
        return [htmlString,dish];
    }

    function generate(dishArray) {
        let innerHTMLAndDish = getInnerHTML(dishArray)
        let innerHTML=innerHTMLAndDish[0];
        document.querySelector('.recipe-card').innerHTML = innerHTML;
    }
    return {loadPage,generate};
})()