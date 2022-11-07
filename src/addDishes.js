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
                <div class="ingredients">
                <label>Ingredients</label>
                <input type="text" name="ingredient1" placeholder="Ingredient 1"/>
                </div>
                <button class="addInput">Add Ingredient Field</button>
                <div class="steps">
                <label>Cooking Steps</label>
                <input type="text" name="Step1" placeholder="Step1"/>
                </div>
                <button class="addInput">Add Step</button>
                <input class="submit" type="submit" value="Save Dish"/>
            </form>
        </div>
    </div>`
  };

  function resetFormValues() {
    document.querySelector('form').reset();
  }

  function closeForm() {
    document.querySelector('.dishForm').classList.add('hide');
    document.querySelector('.formBackground').classList.add('hide');
    resetFormValues();
  }
  return {loadPage,closeForm};
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