// fs
const fs = require('fs'); // modul za rabota so files
//SYNCHRONE
const vchituvanjeNaTekst = fs.readFileSync('./text.txt', 'utf-8');
console.log(vchituvanjeNaTekst);
const podatok = `Ova sakame da go zapiseme vo nasiot kompjuter ${2 + 2}`;

fs.writeFileSync('./novText.txt',podatok);
fs.writeFileSync('./novText1.txt', 'primer broj 2');

// callback
function pozdrav(ime, callback) {
    console.log(`Zdravo, ${ime}`);
    callback()
}

function chao(){
    console.log('Chao!');
}

pozdrav('Mirko', chao);

// ASYNC
fs.readFile('./text.txt', 'utf-8', (err, text) => {
    if (err){
        return console.log('ima greshka');
    }
    console.log(`Async verzija ${text}`);
});

console.log('test');

fs.writeFile('./asynhronWrite.txt', 'async text', 'utf-8', (err) =>{
    console.log('uspesno');
});

// Promise patter

//Chekor 1
//definirame ime na promise funkcijata
const fileWrite = ( ) => {};

//Chekor br.2
const fileWrite = () => {
    return new Promise();
};

//Chekor br.3
//Ke kreirame executor funkcija vo promisot
const fileWrite = () => {
    return new Promise(() => {})
};

//Chekor br.4
//Ke vneseme dva parametri success i fail koi se callback funkcii
const fileWrite = () => {
    return new Promise((success, fail) => {});
}

//Chekor br.5
//Ke ja zapiseme fs.writeFile funkcijata vnatre vo egzekucionata funkcija
const fileWrite = () => {
    return new Promise((success, fail) =>{
        fs.writeFile('data.txt', 'Hello world from node', 'utf-8', (err) => {
            if(err) return console.log(err);
            console.log('Zapisot e napraven')

        });
    });
};

//Chekor 6
//Vo ovoj slucaj ako imame err ke se aktivira fail funkcijata, ako ne ke se aktivira success funkcija
const fileWrite = () => {
    return new Promise((success, data)=>{
        fs.writeFile('data.txt', 'Hello world from node!', 'utf-8' (err)=>{
            if(err) return fail(err);
            return success()
        })
    })

}

//Cekor br.7
//Kreiranje na modularna funkcija koja ke moze da funkcionira so parametri
const fileWrite = (filename, data)=> {
    return new Promise((success, fail) =>{
        fs.writeFile(filename, data, 'utf-8', (err) => {
            if (err) return fail(err),
            return success();
        });
    });
};

const fileRead = (filename) => {
    return new Promise((success, fail)=>{
     fs.readFile(filename, 'utf-8', (err, data)=>{
        if(err) return fail(err);
        return success(data);
     });
    });
};

const main = async () => {
    try {
        await fileWrite('Data1.txt', 'Nov fajl zapis od promise!';)
    } catch(err) {
        console.log(err);
    }
};

main()
// Promisot moze da bide 
//Pending : inicijalna sostojba, ne e ni ispolnet ni odbien promisot
//Fulfilled ili success: Oznacuva deka operacijata zavrsila uspesno
//Rejected ili fail: Oznacuva deka operacijata zavrsila so greska


(async () => {
    try {
    } catch (err) {
        console.log(err);
    }
})();

const imenik = [
    {
        ime: 'Pero Perovski',
        telefon: 223305,
    },
    {
        ime: 'Janko Jankoski',
        telefon: 232305,
    },
    {
        ime: 'Stanko Stankovski',
        telefon: 222555,
    }
];

(async () => {
    try {
        const imenikData = JSON.stringify(imenik);
        await fileWrite('imenik.json', imenikData);
        let dataString = await fileWrite('imenik.json');
        let data = JSON.parse(dataString);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})();


// unlink





