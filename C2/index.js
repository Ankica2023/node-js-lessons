// TYPEOF

console.log(typeof undefined); //Undefined
console.log(typeof 230); //Number
console.log(typeof 'Type'); //String
console.log(typeof null); //Object
console.log(typeof '23'); //String
console.log(typeof + '23'); //Number
console.log(console.log); //Function
console.log(typeof false); //Boolean

//BOOLEAN - TRUE, FALSE
console.log(Boolean[1]); //true
console.log(Boolean(0)); //false
console.log(Boolean(-2)); //true
console.log(Boolean('')) //false
console.log(Boolean('0')); //true
console.log(Boolean +'0'); //false

console.log(2 > 1); //true
console.log(2 < 1); //false

console.log( 2 == '2'); //true
console.log( 2 === '2'); //false
console.log( 2 != 1); //true

console.log(!true); //false

// || i &&

// or(ili)
console.log(true || true); //true
console.log( true || false); //true
console.log( false || true); //true
console.log( false || false); //false

// and
console.log(true && false); //false
console.log(true && true); //true

// Ternary operators
// uslov ? uslovot ako e tocen : uslovot ako e netocen 

const godini = 26
const vozrast = godini >= 18 ? "Polnoletno" : "Ne e polnoletno"
console.log(vozrast);

// Working with arrays
const arrayEden = [5,2,4,6,7];

const arrayPrazen = [];

for(let i = 0; i < 10; i++){
    console.log(i);
}

let test = [ 10,5,13,8,5,6];
// implementacija na gotovi higher - order functions vo js
//map, forEach, reduce, filter i sort

//forEach vrshi iteracija na sekoj element so arrayot, ne go modificira po default tuku samo go izmenuva. No ako sakame togas mozeme da go modificirame arrayot
test.forEach((item, index) => console.log(item))
test.forEach((item, index, arr)=> (arr[index] = item + 10));
console.log(test);

const test2 = [3,6,2,1,20]
//map metoda izminuva niza i kreira nova niza


const rezultat = test2.map((item,i)=>{
    return item + i
});

//Reduce reducira/namaluva/sumira niza na eden edinstven rezultat
const reduceRezultat = test2.reduce((acc,s) => {
    return acc + s;
},0);

console.log(`sum sumarum ${reduceRezultat}`)

//Sort - sortira elementi vo niza spored dadena funkcija za sortiranje
test2.sort((a,b) => b - a);
console.log(`Descending way: ${test2}`)

//Filter vrakja niza od elementi koi odgocaraat na postaveniot uslov
const testFilter = test2.filter((item)=>{
    return item > 5;
})

console.log(testFilter);


//Find vrakja element od nizata koj odgovara na postaveniot uslov
const testFind = test2.find((item)=>{
    return item === 100;
});

console.log(testFind);

// Kopiranje na array
const array1 = [2,3,4,5]
const array2 = [2,1,0,2,45,6]

const array3 = [...array1, ...array2];
console.log(array3);

const obj1 = {
    item1 : 'First',
    item2 : 'Second',
};
const newObject = {
    ...obj1,
    item3 : 'third'
};
console.log(newObject);

//Destruction(razlozuvanje) on Array
const arra1 = [1,2,3];
const [a,b,c] = arra1;
console.log(c);

const arr2 = [50,100,200,300,500];
const [element, ...remainingElements]= arr2;
console.log(element);
console.log(remainingElements);

//Destruction on Objects
const myObject = {product: 'Smoki', cena: 120};
const {product: novoIme, cena} = myObject;
console.log( novoIme, cena);














