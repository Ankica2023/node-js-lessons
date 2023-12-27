console.log('Welcome Node.Js')
console.log('1')
console.log('2')
console.log('2')

//funkcionalni deklaracii
function sobirok (a,b){
    return a + b
}

//Funkcionalni ekspresii
const proizvod = function (a,b){
    return a*b;
};

// Fat-Arrow functions
const razlika = (a,b) => a-b;

//Metodi

const ucenik = {
    ime: "Trajan",
    pozdrav: function() {
        console.log(`Zdravo, ${this.ime}`)
    },
};

ucenik.pozdrav();

// LIFE Imidiately invoked function expression
(function () {
  console.log('Iva e nasiot taen kod')
})();

//Zadaca br.1
//Da se kreira funkcijalna ekspresija pod ime c2f koja ke konvertira celziusovi stepeni vo farenhajt


function c2f(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp*9/5 + 32;
    var message = cTemp
}






