import './reset.css';
import './style.css';
import './add-recipe.jpg';
import './dinner-collage.jpg';
import './pasta-dish.jpg';
import './thinking-woman.jpg';

document.querySelector('body').innerHTML = `<div id="content">
<header>
  <div class="heading"><h1 class="main-heading">Dinner Planner</h1></div>
  <div class="nav">
    <ul>
      <li>Home</li>
      <li>Generate Dishes</li>
      <li>All Dishes</li>
      <li>Add Dishes</li>
    </ul>
  </div>
</header>
<div class="main" id="Home">
  <div class="heading">
    <h1>What should we eat for dinner?</h1>
  </div>
  <div class="img" id="main-img"></div>
  <div class="text">
    <p>Safe the time you would spend on thinking about what to eat for dinner and spend it on important things!<br>
    This Dinner Planer will show you a selection of recepies to chose from or just tell you what to have for dinner</p>
  </div>
  <div class="offers">
      <div class="offer">
          <div class="img" id="selection">
              <div class="desc"><p>View a selection<br>of delicious<br>recipies</p></div>
          </div>
      </div>
      <div class="offer">
          <div class="img" id="generator">
              <div class="desc"><p>Cant decide?<br>Let the dinner planer<br>show you what dish<br>to make for dinner</p></div>
          </div>
      </div>
      <div class="offer">
          <div class="img" id="add-recipe">
              <div class="desc"><p>Add your own recipies<br>to the collection</p></div>
          </div>
      </div>
  </div>
</div>
</div>`

alert('webpack bundling worked');
console.log('is div still there?');