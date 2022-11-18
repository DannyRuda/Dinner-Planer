export {addDishes}
import {dishArray} from './index'
import DinnerCollage from './dinner-collage.jpg';
import PastaDish from './pasta-dish.jpg';

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

    let formDataArray = [];
    for (let i of formData.entries()) {
      formDataArray.push(i[1]);
    }
    return formDataArray;
  }

  function createObject(name,prepTime,cookTime,ingredients,steps,img) {
    return {name,prepTime,cookTime,ingredients,steps,img}
  }

  function saveDishArray(dishArray) {
    localStorage.setItem('dishArray',JSON.stringify(dishArray));
  }
let sahneSchinken = JSON.parse('{\"name\":\"Schinken Sahne Auflauf\",\"prepTime\":\"15 min\",\"cookTime\":\"35 min\",\"ingredients\":[\"250g Nudeln\",\"100g Sahne\",\"100g Schinken\",\"200ml Milch\",\"250g Brühe\",\"1/2 EL Mehl\",\"50g Schmelzkäse\",\"1/2 EL Tomatenmark\",\"1/2 TL Zucker\",\"200g Gratinkäse\",\"Weißwein\",\"Alle Flüssigkeiten in einen Topf gießen und mit dem Mehl vermischen.\"],\"steps\":[\"Alle Flüssigkeiten in einen Topf gießen und mit dem Mehl vermischen.\",\"Den Topf erhitzen und Schmelzkäse, Tomatenmark und Zucker hinzufügen und verrühren.\",\"Die Soße aufkochen und anschließend etwas köcheln lassen.\",\"Nudeln und Schinken in eine Auflaufform geben, die Soße dazugießen, mit dem Gratinkäse überstreuen und bei 200°C Ober-/ Unterhitze oder 180°C Umluft für 35 Minuten in den Ofen\"],\"img\":null}')
  function loadDishArray() {
    return JSON.parse(localStorage.getItem('dishArray')) || [{
      name: 'Kartoffeln mit Spinat', prepTime: '20min', cookTime: '20min', 
      ingredients: ['Kartoffeln','Spinat','Salz'],
      steps: ['step1','step2'], img: DinnerCollage
    },
    {
      name: 'Nudeln mit Soße', prepTime: '5min', cookTime: '15min', 
      ingredients: ['Nudeln','Passierte Tomaten','Sahne','Muskat','Schinkenwürfel'],
      steps: ['step1','step2'], img: PastaDish
    }
    
    ];
  }

  function addDishObjectToArray(dishArray, formDataArray = getFormData()) {
    let ingredients = [];
    let steps = [];
    let ingredientsDiv = document.querySelector('.Ingredients');
    let stepsDiv = document.querySelector('.Steps')
    for (let i = formDataArray.length-1-stepsDiv.children.length+1; i<formDataArray.length-1; i++) {
      steps.push(formDataArray[i]);
    }
    for (let i = formDataArray.length-1-stepsDiv.children.length-ingredientsDiv.children.length+2;i<formDataArray.length-stepsDiv.children.length; i++) {
      ingredients.push(formDataArray[i]);
    }
    testReadertoObject(document.querySelector('#recipe-img').files[0],formDataArray,dishArray,ingredients,steps);
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

    let testurl = '';
    let testReader = new FileReader();

    testReader.addEventListener('load', ()=> {
      testurl = testReader.result;
      document.querySelector('#img-preview').style.backgroundImage = `url(${testurl})`;
    })
    testReader.readAsDataURL(testFile);
    window.setTimeout(()=>{

    },100)
  }

  function saveImgToRecipe(e,formDataArray,dishArray,ingredients,steps) {
    let imgurl = e.target.result;
    console.log(imgurl);
    let dishObject = createObject(formDataArray[0],formDataArray[1],formDataArray[2],ingredients,steps,imgurl);
    console.log(dishObject.img)
    dishArray.push(dishObject);
    saveDishArray(dishArray);
    loadPage();
  }

  function testReadertoObject(file,formDataArray, dishArray, ingredients, steps) {
    let testReader = new FileReader();
    testReader.addEventListener('load',(e)=>{
      saveImgToRecipe(e,formDataArray,dishArray,ingredients,steps)
    })
    testReader.readAsDataURL(file);
  }
  
  /* TEST ZONE OVER */

  return {loadPage,loadDishArray,closeForm,createNewInputField,addDishObjectToArray};
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