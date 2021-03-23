//stampare numeri da 1 a 100

var numeri = [];
console.log( numeri);

for (var i=0; i <100; i++) {
    numeri.push(i+1);
    console.log(numeri)
}


//multipli di 3 = fizz
//multipli di 5 = bazz
//multipli di 5 & 3 = fizzbazz

var risultato
if ( i % 3 == 0 ){
    risultato = 'fizz'
} else if (i % 5 == 0 ){
    risultato = 'bazz'
} else if ( i % 3 == 0 && i % 5 == 0 ) {
    risultato = 'fizzbazz'
}
console.log(risultato)