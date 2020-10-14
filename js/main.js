/*
*
*Programma biglietto treno*/

var title = document.getElementById('text');
// Chiedere all'utente il numero di chilometri che vuole percorrere
var distance = parseInt( prompt('Quanti km vuoi percorrere?') );

// Chiedere l'età del passeggero.
var age = parseInt( prompt('Quanti anni hai?') );

// Prezzo del biglietto
var price = distance * 0.21 ;
//console.log(price + '€');

// Sconti
var discountYoung = (price / 100) * 20;
//console.log(discountYoung)

var discountOld = (price / 100) * 40;
//console.log(discountOld)

if (age < 18) {
  text.innerHTML = 'il prezzo del biglietto è: ' price - discountYoung + '€';
  console.log(discountYoung);
}
else if (age > 65) {
  text.innerHTML = 'il prezzo del biglietto è: ' price - discountOld + '€';
  console.log(discountOld)
}
else {
  text.innerHTML = 'il prezzo del biglietto è: ' + price + '€';
  console.log(price + '€');
}
