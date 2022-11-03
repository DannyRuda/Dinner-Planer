export {addDishes}

let addDishes = (()=>{
  function loadPage() {
    document.querySelector('.main').innerHTML = `<button class="generate-dish">Add your own Dish</button>`
  };
  return {loadPage};
})()