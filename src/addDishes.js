export {addDishes}

let addDishes = (()=>{
  function loadPage() {
    document.querySelector('.main').innerHTML = `<button class="generate-dish">Add your own Dish</button>
    <div class="formBackground hide">
        <div class="dishForm hide">
            <form>
                <h2>Dish Data</h2>
                <input type="text" name="name" placeholder="Dish Name"/>
                <input type="text" name="prepTime" placeholder="Preperation Time"/>
                <input type="text" name="cookTime" placeholder="Cooking Time"/>
                <div class="Ingredients">
                <label>Ingredients</label>
                <input type="text" name="ingredient1" placeholder="Ingredient 1"/>
                </div>
                <button type="button" class="addIngredient">Add Ingredient Field</button>
                <div class="Steps">
                <label>Cooking Steps</label>
                <input type="text" name="Step1" placeholder="Step1"/>
                </div>
                <button type="button" class="addStep">Add Step</button>
                <input class="submit" type="submit" value="Save Dish"/>
            </form>
        </div>
    </div>`
  };

  function getFormData() {
    let formData = new FormData(document.querySelector('form'));
    let formDataArray = [];
    for (let i of formData.entries()) {
      formDataArray.push(i[1]);
    }
    return formDataArray;
  }

  function createObject(name,prepTime,cookTime,ingredients,steps) {
    return {name,prepTime,cookTime,ingredients,steps}
  }

  function addDishObjectToArray(dishArray, formDataArray = getFormData()) {
    console.log(formDataArray);
    let ingredients = [];
    let steps = [];
    let ingredientsDiv = document.querySelector('.Ingredients');
    let stepsDiv = document.querySelector('.Steps')
    for (let i = formDataArray.length-stepsDiv.children.length+1; i<formDataArray.length; i++) {
      steps.push(formDataArray[i]);
    }
    for (let i = formDataArray.length-stepsDiv.children.length-ingredientsDiv.children.length+2;i<formDataArray.length-stepsDiv.children.length+1; i++) {
      ingredients.push(formDataArray[i]);
    }
    let dishObject = createObject(formDataArray[0],formDataArray[1],formDataArray[2],ingredients,steps)
    dishArray.push(dishObject);
  }

  function createNewInputField(category) {
    let newInput = document.createElement('input');
    let divInput = document.querySelector(`.${category}s`);
    newInput.setAttribute('type','text');
    newInput.setAttribute('name',`${category} ${divInput.children.length-1}`);
    newInput.setAttribute('placeholder', `${category} ${divInput.children.length}`);
    divInput.appendChild(newInput);
  }

  function resetFormValues() {
    document.querySelector('form').reset();
  }

  function closeForm() {
    document.querySelector('.dishForm').classList.add('hide');
    document.querySelector('.formBackground').classList.add('hide');
    resetFormValues();
  }
  return {loadPage,closeForm,createNewInputField, addDishObjectToArray};
})()

/*
<div class="formBackground hide">
        <div class="dishForm hide">
            <form>
                <h2>Dish Data</h2>
                <input type="text" name="name" placeholder="Dish Name"/>
                <input type="text" name="prepTime" placeholder="Preperation Time"/>
                <input type="text" name="cookTime" placeholder="Cooking Time"/>
                <label>Ingredients</label>
                <input type="text" name="ingredient1" placeholder="ingredient1"/>
                <button class="addInput">Add Ingredient Field</button>
                <label>Cooking Steps</label>
                <input type="text" name="Step1" placeholder="ingredient1"/>
                <button class="addInput">Add Step</button>
                <input class="submit" type="submit" value="Save Dish"/>
            </form>
        </div>
</div>
*/