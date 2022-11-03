export {allDishes}

let allDishes = (()=>{
    function loadPage() {
      document.querySelector('.main').innerHTML = `<div class="dishes">
      <div class="img" id="eins"><div class="desc"><p>Textttttt</p></div></div>
      <div class="img" id="eins"><div class="desc"><p>Textttttt</p></div></div>
      <div class="img" id="eins"><div class="desc"><p>Textttttt</p></div></div>
      <div class="img" id="eins"><div class="desc"><p>Textttttt</p></div></div>
      <div class="img" id="eins"><div class="desc"><p>Textttttt</p></div></div>
      <div class="img" id="eins"><div class="desc"><p>Textttttt</p></div></div>
      </div>`
    }
    return {loadPage};
})()