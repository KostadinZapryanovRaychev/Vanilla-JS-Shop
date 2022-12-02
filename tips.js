const bubleArray = ["Apple", "Money", "Strewberies"];

const vegetablesArray = ["Tomatoes", "Potatoes"];

const mandjareArray = [...bubleArray, ...vegetablesArray, 3, 4];

console.log(bubleArray);
console.log(mandjareArray);

const Ico = {
    colorYeas: "Blue",
    age: 27,
    believe: "Ortodox",
    coding: function () {
        let a = 7;
        let b = 63;
        let c = a / b;
        return c;
    }
};

const Stan = {
    ...Ico, codingAngular: function () {
        console.log("Fucking Typescript");
    }
};


// Desctructiring elements from an ARRAY

const [a, b, c] = bubleArray;

console.log(a);
console.log(c);

// Desctructiring elements from an Object

let { k, l, m, n } = Ico;

console.log(k);
console.log(l);
console.log(m);
console.log(n);


const myName = "KostadinRaychev";


console.log(...myName);


const myProductList = [
    {
        price: 12,
        value: 8,
        quantity: 7,
        inStock: false,
        name: "wTk -12-24"
    },
    {
        price: 18,
        value: 2,
        quantity: 10,
        inStock: true,
        name: "K -12-24"
    },
    {
        price: 12,
        value: 10,
        quantity: 19,
        inStock: true,
        name: "LmL -12-24"
    },
    {
        price: 22,
        value: 19,
        quantity: 1,
        inStock: false,
        name: "IA -12-24"
    },
    {
        price: 12,
        value: 8,
        quantity: 7,
        inStock: false,
        name: "ticket -12-24"
    },
];

const myTrhirdProductList = myProductList.map((product) => {
    delete product.name;
    return product
});

// da mahnesh property ot obektite v array s obekti

const mySecondProductList = myProductList.map(product=>
    {
        return {...product , isLiked:false}
    }    
);


