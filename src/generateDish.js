export {generateDish}

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
    return {loadPage};
})()