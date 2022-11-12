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
    return {loadPage};
})()