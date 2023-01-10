window.onload= function(){

function randomPizza(){

var button = document.querySelector('#randomBtn');

button.addEventListener('click', () => {

    var randomPizzaChoice = document.getElementById('randomPizzaChoice');
    var random = Math.floor(Math.random()*15);
    var value = randomPizzaChoice.value;

    if(random === 0){
    randomPizzaChoice.textcontent='Margerita';
   }else if (random === 1){
    randomPizzaChoice.textcontent='Capricciosa';
   }  else if (random === 2) {
    randomPizzaChoice.textContent='Diavola';
   } else if (random === 3) {
    randomPizzaChoice.textContent='Quattro Formaggi';
   } else if (random === 4) {
    randomPizzaChoice.textContent='Boscaiola';
   } else if (random === 5) {
    randomPizzaChoice.textContent='Marinara';
   } else if (random === 6) {
    randomPizzaChoice.textContent='Margherita + Cipolla';
   } else if (random === 7) {
    randomPizzaChoice.textContent='Bianca Salsiccia&Patate';
   }else if (random === 8) {
    randomPizzaChoice.textContent='Vegetariana';
   }else if (random === 9) {
    randomPizzaChoice.textContent='Mais&Salsiccia';
   }else if (random === 10) {
    randomPizzaChoice.textContent='Crudo&Burrata';
   }else if (random === 11) {
    randomPizzaChoice.textContent='Trevisana';
   }else if (random === 12) {
    randomPizzaChoice.textContent='Biancaneve';
   }else if (random === 13) {
    randomPizzaChoice.textContent='Burrata, Pistacchio&Mortadella';
   }else if (random === 14) {
    randomPizzaChoice.textContent='Tricolore';
   }else if (random === 15) {
    randomPizzaChoice.textContent='Margerita Wurstel&Patatine';
   }
})
}

randomPizza();
    
}


