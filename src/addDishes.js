export {addDishes}
import {dishArray} from './index'
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
                <input id="recipe-img" type="file" name="recipe-img" accept="image/jpeg, image/png, image/jpg"/>
                <div id="img-preview"></div>
                <input class="submit" type="submit" value="Save Dish"/>
            </form>
        </div>
    </div>`

    document.querySelector('button').addEventListener('click', ()=>{
      let formBackground = document.querySelector('.formBackground');
      let newDishForm = document.querySelector('.dishForm');
      formBackground.classList.remove('hide')
      newDishForm.classList.remove('hide')
      formBackground.addEventListener('click', addDishes.closeForm);
      newDishForm.addEventListener('mouseover',()=>{formBackground.removeEventListener('click',addDishes.closeForm)});
      newDishForm.addEventListener('mouseleave',()=>{formBackground.addEventListener('click', addDishes.closeForm)});
    })
    document.querySelector('.addIngredient').addEventListener('click',()=>{
      createNewInputField('Ingredient');
    });
    document.querySelector('.addStep').addEventListener('click',()=>{
      createNewInputField('Step');
    });
    document.querySelector('.submit').addEventListener('click',(e)=>{
      e.preventDefault();
      addDishObjectToArray(dishArray);
    });

    document.querySelector('#recipe-img').addEventListener('change',testImgUploadLoader);
  };

  function getFormData() {
    let formData = new FormData(document.querySelector('form'));
    console.log(formData);
    let formDataArray = [];
    for (let i of formData.entries()) {
      formDataArray.push(i[1]);
    }
    return formDataArray;
  }

  function createObject(name,prepTime,cookTime,ingredients,steps,img) {
    return {name,prepTime,cookTime,ingredients,steps,img}
  }

  function addDishObjectToArray(dishArray, formDataArray = getFormData()) {
    console.log(formDataArray[5]);
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
    let dishObject = createObject(formDataArray[0],formDataArray[1],formDataArray[2],ingredients,steps,testReadertoObject(document.querySelector('#recipe-img').files[0]))
    dishArray.push(dishObject);
    window.localStorage.setItem('one',JSON.stringify(dishObject));
    loadPage();
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

  /* TEST ZONE */
  
  function testImgUpload() {
    let testFiles = document.querySelector('#recipe-img').files;
    console.log(`FileList: ${testFiles}`);
    console.log(`File: ${testFiles[0]}`);
    let testurl = URL.createObjectURL(testFiles[0]); 
    console.log(`Object URL: ${testurl}`);
    document.querySelector('#img-preview').style.backgroundImage = `url(${testurl})`;
    /*URL.revokeObjectURL(testurl);*/
  }
  
  function testImgtoObject(file) {
    console.log(file);
    let testurl = URL.createObjectURL(file);
    return testurl;
  }

  function testImgUploadLoader() {
    let testFile = document.querySelector('#recipe-img').files[0];
    console.log(testFile);
    let testurl = '';
    let testReader = new FileReader();
    console.log(testReader);
    testReader.addEventListener('load', ()=> {
      console.log('enters eventListener')
      testurl = testReader.result;
      document.querySelector('#img-preview').style.backgroundImage = `url(${testurl})`;
    })
    testReader.readAsDataURL(testFile);
    window.setTimeout(()=>{
      console.log(testurl);
    },100)
  }

  function testReadertoObject(file) {
    let testReader = new FileReader();
    testReader.readAsDataURL(file);
    window.setTimeout(()=>{
      console.log(testReader.result);
      return testReader.result;
    },100)
    
  }
  /* TEST ZONE OVER */

  return {loadPage,closeForm,createNewInputField,addDishObjectToArray};
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