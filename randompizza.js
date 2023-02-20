window.onload= function(){

function randomPizza(){

var pizza = ['Margerita','Capricciosa','Diavola','Quattro Formaggi','Boscaiola','Marinara','Margherita + Cipolla',
'Bianca Salsiccia&Patate','Vegetariana','Mais&Salsiccia','Crudo&Burrata','Trevisana','Biancaneve',
'Burrata, Pistacchio&Mortadella','Tricolore','Margerita Wurstel&Patatine'];


var button = document.querySelector('#randomBtn');
var result = document.getElementById('randomPizzaChoice');

button.addEventListener('click', () => {
    var random = Math.random(pizza);
    var randomPizza = Math.floor(random*14);
    var randomResult= pizza[randomPizza];
    result.innerHTML= randomResult
    window.scrollTo(0, document.body.scrollHeight);
})
  

}
randomPizza();  
}


