const items=[
    {name: 'bike',price: 100},
    {name: 'TV',price: 200},
    {name: 'Album',price: 10},
    {name: 'Book',price: 5},
    {name: 'Phone',price: 500},
    {name: 'computer',price: 1000},
    {name: 'kekboard',price: 25}
]
console.log(items)
const filteritems =items.filter((item) => {
    return item.price <=100
} );
console.log(filteritems);

const itemName =items.map((item) => {
    return item.name
} );
console.log(itemName);

const itemPrice =items.map((item) => {
    return item.price
} );
console.log(itemPrice);

const foundItem =items.find((item) => {
    return item.name === 'Book'
} );
console.log(foundItem);

const foundItems =items.find((item) => {
    return item.name === 'album'
} );
console.log(foundItems);

items.forEach((item) => {
   console.log(item.name);
} );
 
const hasInexpitems =items.some((item) => {
    return item.price <= 100
} );
console.log(hasInexpitems);

const total =items.reduce((currentTotal,item) => {
    return item.price +currentTotal
},0);
console.log(total);








 
 

